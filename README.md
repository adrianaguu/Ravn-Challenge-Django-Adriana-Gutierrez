# Ravn-Challenge-Django
Repository for the Ravn Django Code Challenge

Author: Adriana Fabiola Gutiérrez Montoya

## Technologies used
- Django REST framework
- ReactJs library

## Setup

To start clone or download the repository:
```
$ git clone git@github.com:adrianaguu/Ravn-Challenge-Django-Adriana-Gutierrez.git

```
### Back End

The Django project is in the StarWarsAPI folder. For the set up:

```
$ cd StarWarsAPI

# Create a virtual enviroment and activate it
virtualenv env
.\env\Scripts\activate

# Install the requiremets
pip install -r requirements.txt

# Run the migrations
python manage.py migrate

# Load initial data (20 people)
python manage.py loaddata people_data.json

# Login to django admin to create more registers of People, create a super user to be able to login
python manage.py createsuperuser --username admin --email admin@test.com

# run the server
python manage.py runserver

```
Navigate to 'http://localhost:8000/admin' in your browser.

### Front End

The React application is in the star-wars folder. For the set up:

```
cd star-wars

# Install the dependencies
npm i

# run the server
npm start

```
Navigate to `http://localhost:3000` in your browser.

## Project Description

The project consists of a single-page application that retrieves data from the people from the Star Wars universe. The user can select the person that they want to know more detailed information. The API consists of two endpoints GET People and GET Person, for the endpoint of people 5 people at a time are retrieved . “Infinite scrolling” is implemented on the client application.

In the following git we can see the application functionality.

![Loading](./images/working_app.gif?raw=true "Loading")

Screenshots are available in the [images](./images) folder. 

## Assumptions and additional information

- It was assumed that the field `name` of all of the resources (`People`, `Vehicles`, `Planets`, `Species`) is unique.
- For the design, relative values in some parts were used in order for the application to adapt to different screen sizes. 