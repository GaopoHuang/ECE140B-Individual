# Import MySQL Connector Driver
import mysql.connector as mysql

# Load the credentials from the secured .env file
import os
from dotenv import load_dotenv
load_dotenv('credentials.env')

db_user = os.environ['MYSQL_USER']
db_pass = os.environ['MYSQL_PASSWORD']
db_name = os.environ['MYSQL_DATABASE']
db_host = os.environ['MYSQL_HOST'] # must 'localhost' when running this script outside of Docker

# Connect to the database
db = mysql.connect(user=db_user, password=db_pass, host=db_host, database=db_name)
cursor = db.cursor()

# # CAUTION!!! CAUTION!!! CAUTION!!! CAUTION!!! CAUTION!!! CAUTION!!! CAUTION!!!
cursor.execute("drop table if exists Team_member;")

# Create a TStudents table (wrapping it in a try-except is good practice)
try:
  cursor.execute("""
    CREATE TABLE Team_member (
      id          integer  AUTO_INCREMENT PRIMARY KEY,
      first_name  VARCHAR(30) NOT NULL,
      last_name   VARCHAR(30) NOT NULL,
      email       VARCHAR(50) NOT NULL
    );
  """)
except:
  print("Users table already exists. Not recreating it.")

# Insert Records
query = "insert into Team_member (first_name, last_name, email) values (%s, %s, %s)"
values = [
  ('Gaopo','Huang','ghuang@ucsd.edu'),
  ('Junzhe','Luo','j5luo@ucsd.edu'),
  ('Shixuan','Wu','shw003@ucsd.edu'),
  ('Xunhao','Yang','x5yang@ucsd.edu')
]
cursor.executemany(query, values)
db.commit()

# Selecting Records
cursor.execute("select * from Team_member;")
print('---------- DATABASE INITIALIZED ----------')
[print(x) for x in cursor]
db.close()
