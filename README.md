
# "僕のTo Do List" - Flask Dynamic Database App 🔰

**App Link:** [ Static Live Demo ] http://cdnjmusic.pythonanywhere.com/
*Not Recommended, check Installation and Usage to run the Dynamic application*

## Introduction 🍜

This Flask-based dynamic web application, "僕のTo Do List," allows users to manage their tasks efficiently. It is designed to provide two levels of functionality:

1. **Live Session:** Users can use the app without signing up or logging in. In this mode, tasks can be added, but they will not be saved beyond the current session.

2. **User Accounts:** To persistently save tasks and enable users to access them from any device, users can sign up and log in to create and manage their personalized to-do lists.


## Features 🎏

### Live Session Mode
- **Add Tasks:** Users can add tasks in real-time during a live session. These tasks will only be available for the duration of the session.

### User Accounts
- **User Registration:** Users can create accounts with unique usernames and passwords to persistently store their tasks.

- **User Login:** Registered users can log in securely to access their saved tasks.

- **Add, Update, Delete Tasks:** Once logged in, users can add, update, and delete tasks. All changes will be stored in the database and accessible across sessions, forever.

## Technical Details 🍱

### Dependencies
- **Python:** The app is written in Python, using the Flask framework.

- **SQL Database:** SQLite is used to store user account information and their corresponding tasks.

- **HTML/CSS/JavaScript:** For the user interface, a basic front-end is provided with HTML, CSS, and JavaScript for interactivity.

### Deployment
You can deploy this Flask app on various platforms. Currently, it's set up for Python Anywhere (for static), but you should choose any cloud service that supports Python and Flask.

For Google Cloud Platform, it's recommended you use an API like Compute Engine to deploy the app. When you do :

```
$ git clone https://github.com/cdnjmusic/To-Do-List
$ cd To-Do-List
$ gcloud app deploy
```

It may deploy the app, but there are high chances of getting a 500 Server Error when you visit the URL to which the app has been deployed.

## Installation and Usage ⛩️

1. Clone this repository to your local machine
	```
	$ git clone https://github.com/cdnjmusic/To-Do-List
	```
2. Navigate to the root directory of the project
	```
	$ cd To-Do-List
	```
3. Create a Python virtual environment
	```
	python3 -m venv myenv
    ```
    Replace `myenv` with the name you want to give to your virtual environment.

4. Activate the Virtual Environment
	Windows: `myenv\Scripts\activate.bat`
	Linux: `source myenv/bin/activate`

5. Install necessary packages
	```
	pip install -r requirements.txt
	```
6. Configure the database
	Open up Python in a shell with `python` or `python3` and type
	```
	>>> from app import app, db
	>>> app.app_context().push()
	>>> db.create_all()
	>>> exit()
	```
7. Run the App
	`$ flask run` for no debugging
	`$ python3 app.py` for debuging enabled

8. Open the app in browser
	Open up an browser and type in the address bar `127.0.0.1:5000/` or `localhost:5000`
	Enjoy the app 🍥🍥🍥

## Future Enhancements 🍣

While this application provides basic task management functionality, there are several areas where you can enhance it:

- **User Profile:** Allow users to customize their profiles, add avatars, and set preferences.

- **Task Categories:** Implement categorization of tasks to help users organize better.

- **Task Edits:** Users are currently unable to edit their tasks, that is a huge disadvantage of the app that you, Dev-san may take advantage of. (Just include another button in the innerHTML, write a few lines of JavaScript to update the text and Boom! You'll be there)

- **Notifications:** Send reminders or notifications for upcoming tasks.

- **Collaboration:** Enable users to share tasks or lists with others.