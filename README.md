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

## phase_3

 we’d like to extend the functionality of the application by requiring users be logged in to view items and also restrict access based on user type.

* As a user, I want to provide a way for other users to create new accounts
* As a user, I want to provide a way for all users to login to their account
* As a user, I want to make sure that my To Do items are only viewable to users that have logged in with a valid account.
* As a user, I want to ensure that only fellow users that are allowed to “create”, based on their user type, can add new To Do Items
* As a user, I want to ensure that only fellow users that are allowed to “update”, based on their user type, can mark To Do Items complete
* As a user, I want to ensure that only fellow users that are allowed to “delete”, based on their user type, can delete new To Do Items

----

## phase_4

we’ll be requiring that users be logged in through a live authentication server, in order to see the to-do items. Additionally, based on their user type, they will be allowed (or denied) to perform actions such as editing or deleting them. All To Do items will be stored in a database, accessed through a deployed API

* capability

1. admin access all features and he can delete an item.
2. the user gets access to specific features I allow for him (he can't delete items).

> sample to check

|username|  password|
|-----|-----|
|(admin) => userName: batool |123456789|
|(user) => userName: ahmad |123456789|
----

> I added more things

1. Show password.
2. Sweet alert when the user adds items.
3.Sweet alert when the admin deletes the items to be sure to do that.
4. Sweet alert when left username or password empty to re-enter correctly.
5. Sweet alert when doing correctly sign-up.
6. add a button logout top-right of the page.

----
|Name|Link|
|----|----|
|[website]|[todo website]()|
|[PR]|[PR](https://github.com/Mujahedyousef/todo-app/pull/7)|
