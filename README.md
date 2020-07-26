# Django+React Project Template

A project template for quickly getting started with django and react

## Features

* Separate backend and frontend apps
* Backend is a django rest app with no data model or migrations defined yet
* Frontend is a django app that just serves react

## Usage

From the project root, start the backend by doing `python manage.py runserver`. It will watch for changes.

From the `frontend/` directory, start the frontend by doing `npm run dev`. It will watch for changes.

Frontend runs on `127.0.0.1:8000/`. Backend runs on `127.0.0.1:8000/api/`.