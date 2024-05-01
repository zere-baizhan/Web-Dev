import psycopg2
from config import host, user, password, db_name

try:
    connection = psycopg2.connect(
        host=host,
        user=user,
        password=password,
        database=db_name
    )
    connection.autocommit = True

    with connection.cursor() as cursor:
        cursor.execute(
            """CREATE TABLE IF NOT EXISTS phonebook(
            id SERIAL PRIMARY KEY,
            first_name VARCHAR(50),
            last_name VARCHAR(50),
            phone_num VARCHAR(20)
            )"""
        )

    def search_records(pattern):
        with connection.cursor() as cursor:
            cursor.execute("""SELECT * FROM phonebook WHERE first_name LIKE %s OR last_name LIKE %s OR phone_num LIKE %s""",
                           ('%' + pattern + '%', '%' + pattern + '%', '%' + pattern + '%'))
            rows = cursor.fetchall()
            for row in rows:
                print(row)

    def insert_or_update_user(first_name,last_name, phone_num):
        with connection.cursor() as cursor:
            cursor.execute("""SELECT * FROM phonebook WHERE first_name = %s""", (first_name,))
            if cursor.fetchone():
                cursor.execute("""UPDATE phonebook SET phone_num = %s WHERE first_name = %s""", (phone_num, first_name))
            else:
                cursor.execute("""INSERT INTO phonebook (first_name, last_name,phone_num) VALUES (%s, %s,%s)""", (first_name, last_name,phone_num))

    def create_user_list():
        user_list=[]

        while True:
            first_name=input("Enter first name (or type 'done' to finish):")
            if first_name.lower()=='done':
                break
            last_name=input("Enter last name:")
            phone_num=input("Enter phone number:")

            user_list.append((first_name,last_name,phone_num))
        
        return user_list

    def insert_many_users(users):
        for user in users:
            first_name, last_name, phone_num = user
            if len(phone_num) == 11:  # Check correctness of phone number
                insert_or_update_user(first_name,last_name,phone_num)
            else:
                print("Oops! Something wrong")


    def query_with_pagination(limit, offset):
        with connection.cursor() as cursor:
            cursor.execute("""SELECT * FROM phonebook LIMIT %s OFFSET %s""", (limit, offset))
            rows = cursor.fetchall()
            for row in rows:
                print(row)

    def delete_data(username=None, phone_number=None):
        with connection.cursor() as cursor:
            if username:
                cursor.execute("""DELETE FROM phonebook WHERE first_name = %s OR last_name = %s""", (username, username))
            if phone_number:
                cursor.execute("""DELETE FROM phonebook WHERE phone_num = %s""", (phone_number,))

except Exception as ex:
    print("[INFO] Error while working with PostgreSQL:", ex)
