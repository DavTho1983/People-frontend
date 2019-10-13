<h1>README</h1>

To run this project, please clone this repo and the backend repo at https://github.com/DavTho1983/People

In the same directory as the frontend:
npm install material-icons

You will need to install postgres and create a db called hiSkydb with user postgres and password admin on port 5432 - see settings.py

With Postgres running, in the same directory as the backend:
activate the venv
you may need to install django, graphene and graphene-django
python manage.py makemigrations
python manage.py migrate
python manage.py runserver

<h2>NOTES</h2>
The application has a table that shows all persons, and three buttons that allow persons to be added, edited and deleted.
The UI/UX is not ideal - the trash icons on the table are not functional, but hint that the ideal functionality would be to be able to click on
table rows to edit a person, or click on the trash icon for that row to delete a person. I need to read more about React Hooks to do this properly!
The way I would usually achieve this functionality is by managing the state centrally in the store, and I did not have time to do this - plus it seems
like an old way of doing it that isn't encouraged anymore.

I have also not managed to set up the file system for static files with Apollo - static files in Django are pretty straightforward, but not sure how to do it in
Apollo with graphql - I will be investigating this and using it in my own projects!
