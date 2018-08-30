# The Project
  This app is a RESTful API for an uptime monitoring application
  Will NOT be using ANY npm module
  Will use only native || built-in node modules

# Project Requirement

  Allow the user:
    enter URLs they want monitored
    recive alerts when those resorces go down or come back up AKA Tasks

  Tec Requirements:
    1 - Listen to an Port and acxepts incoming HTTP requests (GET, POST, PUT, DELETE and HEAD)
    2 - Allows client to CRUD users
    3 - Allows user to Sign-in giving a token for subsequent authentication requests
    4 - On Sign-out the token shoud be invalidated
    5 - Signed-in user shoud be able to CRUD tasks (Max tasks = 5)
    6 - Background Workers to monitorate the tasks and send alerts to users when a task in up to down and vice versa (once at minute)
    7 - to send SMS messages will send an HTTP request to WILLIO app
    8 - Will record the data in a JSON file
    

# Major Features
  
  Sign in || up || out
  Send SMS alert
