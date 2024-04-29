import psycopg2
import csv 
from main import host,user,password,db_name

try:
    connection=psycopg2.connect(
        host=host,
        user=user,
        password=password,
        database=db_name
    )
    connection.autocommit=True
    
    #creating table
    # with connection.cursor() as cursor:
    #     cursor.execute(
    #         """CREATE TABLE phonebook(
    #         id SERIAL PRIMARY KEY,
    #         first_name varchar(50) NOT NULL,
    #         last_name varchar(50) NOT NULL,
    #         phone_num varchar(11));""")
    #     print("INFO Table created successfully")

    with connection.cursor() as cursor:
        cursor.execute(
            """ALTER TABLE phonebook ALTER COLUMN phone_num TYPE varchar(20);"""
        )
        print("INFO: Column type altered successfully")

     
    #inserting    
    # with connection.cursor() as cursor:
    #     data=(input("First Name:"),input("Last Name:"),input("Phone number:"))
    #     cursor.execute(
    #         """INSERT INTO phonebook(first_name,last_name,phone_num) VALUES
    #         (%s,%s,%s);""",data
    #      )
    #     print("[INFO] Data was successfully inserted")

   #inserting csv
#    with open('table2.csv', 'r') as file:
#        rows = csv.reader(file)  
#        for data in rows:
#            with connection.cursor() as cursor:
#                cursor.execute(
#                    """INSERT INTO phonebook(first_name, last_name, phone_num) VALUES(%s, %s, %s);""",
#                    data
#                )
    #deleting
    name=input("Name: ")
    with connection.cursor() as cursor:
        cursor.execute(
            """DELETE FROM phonebook WHERE first_name=%s;""",(name,)
        )
        print(f"Deleted")
    #check data
    
except Exception as _ex:
    print("[INFO] Error while working with PostgreSQL", _ex)
finally:
    if connection:
        connection.close()
        print("[INFO] PostgreSQL connection closed")