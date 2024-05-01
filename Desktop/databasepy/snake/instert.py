import psycopg2

def inserting(name):
    data = (name, 0)
    command = """
        INSERT INTO scores(user_name, score) 
        VALUES(%s, %s)
        """
    try:
        with psycopg2.connect(host="127.0.0.1", database="postgres", user="postgres", password="Lgbtiscool666") as connection:
            with connection.cursor() as cursor:
                cursor.execute(command, data)
    except (psycopg2.DatabaseError, Exception) as error:
        print(error)
    finally:
        if connection:
            connection.close()