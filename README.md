# Web application phonebook for working with a collection of contacts

## The project is built on React.

### The project used React, React Hooks, Redux Toolkit(configureStore(),createAsyncThunk(), createReducer(), createSlice(), persist ), React-Redux, React Router.

1. A fronted part of the application for working with a collection of contacts
   has been created.

2. Used public backend
   [Connections API](https://connections-api.herokuapp.com/docs/) It supports
   all necessary operations with a collection of contacts, as well as
   registering, logging in, and updating a user using JWT.

3. Added interaction with the backend for storing contacts and working with
   user.

4. Created actions for saving and deleting a contact, as well as updating the
   filter.

5. Actions for registration and login and logout of the user are created.

6. Connecting React Components to Redux Logic Using Library Hooks react-redux.

7. Redux Persist library used.

#### Routing :

```
/phonebook - home page public route
```

```
/register - public route for registering a new user with a form
```

```
/login - public login route of an existing user with a form
```

```
/contacts - private route for working with the user's contact list
```

##### Operations

Use the createAsyncThunk function to declare asynchronous generators' actions
and making HTTP requests. Handling actions and changing data in Redux state is
made with createSlice and createReducer.

```
fetchContacts - getting an array of contacts (GET method) by request. The base action type is "contacts/fetchAll".
```

```
addContact - adding a contact (POST method). The base action type is "contacts/addContact".
```

```
deleteContact - contact deletion (DELETE method). The base action type is "contacts/deleteContact".
```

```
fetchRefreshCurrentUser - getting the current user (GET method). The base action type is "auth/refresh".
```

```
register - for user registration (POST method). The base action type is "auth/register".
```

```
logIn - for a user login (POST method). The base action type is "auth/login".
```

```
  'auth/logout',
 - to log out of the user (POST method). The base action type is "auth/logout".
```
