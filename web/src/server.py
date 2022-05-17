from wsgiref.simple_server import make_server
from pyramid.config import Configurator
from pyramid.renderers import render_to_response
from pyramid.response import FileResponse

import mysql.connector as mysql
import os

db_user = os.environ['MYSQL_USER']
db_pass = os.environ['MYSQL_PASSWORD']
db_name = os.environ['MYSQL_DATABASE']
db_host = os.environ['MYSQL_HOST']

def get_home(req):
  # Connect to the database and retrieve the users
  db = mysql.connect(host=db_host, database=db_name, user=db_user, passwd=db_pass)
  cursor = db.cursor()
  cursor.execute("select first_name, last_name, email from Team_member;")
  records = cursor.fetchall()
  db.close()

  #Add email link 
  for i in range(len(records)):
    records[i] = list(records[i])
    records[i].append("mailto:%s?subject=Hello"%(records[i][-1]))

  return render_to_response('templates/home.html', {'Team_member': records}, request=req)

def get_KVP(req):
  return FileResponse('templates/KVP.html')

def get_UIMockup(req):
  return FileResponse('templates/UIMockup.html')

def get_IA(req):
  return FileResponse('templates/IA.html')

def get_ID(req):
  return FileResponse('templates/ID.html')

''' Route Configurations '''
if __name__ == '__main__':
  config = Configurator()

  config.include('pyramid_jinja2')
  config.add_jinja2_renderer('.html')

  config.add_route('get_home', '/')
  config.add_view(get_home, route_name='get_home')

  config.add_route('get_KVP', '/KVP')
  config.add_view(get_KVP, route_name='get_KVP')

  config.add_route('get_UIMockup', '/UIMockup')
  config.add_view(get_UIMockup, route_name='get_UIMockup')

  config.add_route('get_IA', '/IA')
  config.add_view(get_IA, route_name='get_IA')

  config.add_route('get_ID', '/ID')
  config.add_view(get_ID, route_name='get_ID')

  config.add_static_view(name='/', path='./public', cache_max_age=3600)

  app = config.make_wsgi_app()
  server = make_server('0.0.0.0', 6000, app)
  print("Running server! Should be up.")
  server.serve_forever()