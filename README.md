
# "僕のTo Do List" - Flask Dynamic Database App

**App Link:** http://cdnjmusic.pythonanywhere.com/ 

## Introduction

This Flask-based dynamic web application, "僕のTo Do List," allows users to manage their tasks efficiently. It is designed to provide two levels of functionality:

1. **Live Session:** Users can use the app without signing up or logging in. In this mode, tasks can be added, but they will not be saved beyond the current session.

2. **User Accounts:** To persistently save tasks and enable users to access them from any device, users can sign up and log in to create and manage their personalized to-do lists.

This project has been created for your global summer internship application process for Hennge Corps, and it is suitable for submission to other companies, universities, or associations. The application is built using Python Flask, SQL for data storage, and a simple front-end interface.

## Features

### Live Session Mode
- **Add Tasks:** Users can add tasks in real-time during a live session. These tasks will only be available for the duration of the session.

### User Accounts
- **User Registration:** Users can create accounts with unique usernames and passwords to persistently store their tasks.

- **User Login:** Registered users can log in securely to access their saved tasks.

- **Add, Update, Delete Tasks:** Once logged in, users can add, update, and delete tasks. All changes will be stored in the database and accessible across sessions, forever.

## Technical Details

### Dependencies
- **Python:** The app is written in Python, using the Flask framework.

- **SQL Database:** SQLite is used to store user account information and their corresponding tasks.

- **HTML/CSS/JavaScript:** For the user interface, a basic front-end is provided with HTML, CSS, and JavaScript for interactivity.

### Deployment
You can deploy this Flask app on various platforms. Currently, it's set up for Python Anywhere, but you can choose any cloud service that supports Python and Flask.

For Google Cloud Platform, it's recommended you use an API like Compute Engine to deploy the app. When you do :

   ```
   git clone https://github.com/cdnjmusic/To-Do-List
   cd To-Do-List
   gcloud app deploy
   ```
It may deploy the app, but there are high chances of getting a 500 Server Error when you visit the URL to which the app has been deployed.

## Installation and Usage

1. Clone this repository to your local machine.

2. Install the required Python packages by running the following command:

   ```
   pip install -r requirements.txt
   ```

3. Navigate to the project directory and run the app:

   ```
   python app.py
   ```

4. Open your web browser and access the app at `http://localhost:5000`.

## Deployment (Python Anywhere)

1. Sign up for a Python Anywhere account.

2. Create a new Flask web app on Python Anywhere.

3. Upload your project files to Python Anywhere.

4. Configure your WSGI file to point to your `app.py` file.

5. Update your database configuration to use Python Anywhere's MySQL or SQLite, depending on your preference.

6. Reload your web app on Python Anywhere, and your "僕のTo Do List" app should be live.

## Future Enhancements

While this application provides basic task management functionality, there are several areas where you can enhance it:

- **User Profile:** Allow users to customize their profiles, add avatars, and set preferences.

- **Task Categories:** Implement categorization of tasks to help users organize better.

- **Task Edits:** Users are currently unable to edit their tasks, that is a huge disadvantage of the app that you, Dev-san may take advantage of. (Just include another button in the innerHTML, write a few lines of JavaScript to update the text and Boom! You'll be there)

- **Notifications:** Send reminders or notifications for upcoming tasks.

- **Collaboration:** Enable users to share tasks or lists with others.