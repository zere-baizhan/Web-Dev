import psycopg2
from config import host,user,password,db_name
from main import search_records,insert_or_update_user,insert_many_users,query_with_pagination,delete_data,create_user_list

try:
    connection=psycopg2.connect(
        host=host,
        user=user,
        password=password,
        database=db_name
    )

    print("What will you do?")
    print("Search for records(1)")
    print("Insert new data or Update existing data(2)")
    print("Insert many users(3)")
    print("Query with pagination(4)")
    print("Delete data(5)")
    request=int(input("Enter your request:"))
    
    if request==1:
        pattern=input("Enter your pattern:")
        search_records(pattern)
    elif request==2:
        username=input("Enter first name:")
        phone=input("Enter phone number:")
        insert_or_update_user(username,phone)
    elif request==3:
        user_list=create_user_list()
        insert_many_users(user_list)
    elif request==4:
        lim=int(input("Enter your limit of query"))
        offset=int(input("Enter your start positin of query"))
        query_with_pagination(lim,offset)
    elif request==5:
        name=input("Enter first name to delete")
        phone=input("Enter phone to delete")
        delete_data(name,phone)



except Exception as ex:
    print("[INFO] Error while working with PostgreSQL",ex)
finally:
    if connection:
        connection.close()
        print("[INFO] Connection closed")