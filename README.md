![uml](/image/uml.PNG)

## phase_1

 we’re going to perform some refactoring of the To Do application as built by another team. This application mixes application state and user settings at the top level and passes things around. It was a good proof of concept, but we need to make this production ready.

## useContext()

> we useContext() because him
that allows you to share specific data from all levels of your application and aids in solving prop-drilling.
of during creating provider and put inside it all props i want share it with children and the consumer can use all props when called it.

## useForm()

>useForm is a hook that allows for management forms. It has some action methods that create, edit and clone the form. The hook return value comes according to the called action and it can run different logic depending on the action.
[useForm](https://react-hook-form.com/api/useform/)
----
|Name|Link|
|----|----|
|website|[netlify](https://mujahed-abuarqob-asac.netlify.app/)|
|PR|[PR](https://github.com/Mujahedyousef/todo-app/pull/4)|
-----
## Phase_2

> In this phase, we’ll be adding a form editor so that users can save their preferences for the application, allowing them to change some of the default behaviors like:

* Control How many items to display.  
* Ability to show or hide completed Todo.
* saved the user's choices in Local Storage. 
* Each time they will re-visit the page, their choices will still be there and can remove any todo.
|Name|Link|
|----|----|
|website|[netlify](https://mujahed-abuarqob-asac.netlify.app/)|
|PR|[PR](https://github.com/Mujahedyousef/todo-app/pull/5)|
----
## phase_2
----
## phase_3 

we’ll be requiring that users be logged in through a live authentication server, in order to see the to-do items. Additionally, based on their user type, they will be allowed (or denied) to perform actions such as editing or deleting them. All To Do items will be stored in a database, accessed through a deployed API