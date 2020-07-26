# Django+React Project Template

A project template for quickly getting started with django and react

## Features

* Separate backend and frontend apps
* Backend is a django rest app
* Frontend is a django app that just serves react
* GraphQL wired up on both sides

## Usage

From the project root, start the backend by doing `python manage.py runserver`. It will watch for changes.

From the `frontend/` directory, start the frontend by doing `npm run dev`. It will watch for changes.

Frontend runs on `127.0.0.1:8000/`. Backend runs on `127.0.0.1:8000/api/`.

## GraphQL

A sample model, `AppSetting` exists to illustrate the basics of data passing with GraphQL.

GraphQL queries and mutations can be run with the included graphiql on the `/graphiql` endpoint. This should be disabled in production.

### Example of querying for AppSettings

```
query {
  appSettings {
    name, type, value
  }
}
```

### Example of adding an AppSetting

```
mutation {
  addAppSetting(name: "settingname", type: "string", value: "settingvalue") {
    	appSetting { id }
  }
}
```

The mutation will correctly upsert based on the name specified.