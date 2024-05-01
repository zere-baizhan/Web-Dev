import psycopg2

def update(name, score):
    command = """
        UPDATE scores
        SET score =  %s 
        WHERE user_name = %s;
        """
    try:
        with psycopg2.connect(host="127.0.0.1", database="postgres", user="postgres", password="Lgbtiscool666") as connection:
            with connection.cursor() as cur:
                cur.execute(command, (score, name))
    except (psycopg2.DatabaseError, Exception) as error:
        print(error)