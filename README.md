This is a simple Front-End for a locally hosted database of contact information.

![Image of Front-End](https://github.com/JeremyRoussel/contactsfetwo/blob/master/FE_Image.png)

It uses Redux-Thunk to make api calls to fetch/add/update/delete contact information in the database. Changes to global state are then propagated out to components based on their subscription to the redux store and the relevant reducer.

It is paired with the database hosted here: https://github.com/JeremyRoussel/ContactsDB
