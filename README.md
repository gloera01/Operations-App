# Operations App

Users management app.

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

## Features

### Login

TBD...

### Users search

TBD...

### Accounts search

TBD...

### Account team members operations history

TBD...

## TODOs

### Architecture

#### Service and API layers

Explore the aproach to use api pattern instead services

#### Security

- Do not allow Users role to visit following pages
  - app dashboard
  - users page
  - accounts page
  - operations page

### Router

- Define routes (ok)
  - index (/)
  - profile
  - users
  - accounts
  - accounts/:accountId/history
- Implement router at least 1 route (ok)
- Create private route component

### Redux

- Define state management and architecture. (ok)
  - Actions
  - Reducers
  - Async actions (Async thunk)
- Define Auth reducer with login action (ok)
- Define users reducer
- Define accounts
- Define operations

## MUI

- Design pages content

### Top bar (ok)

- Create component
- Add functionality

### Login page

- Create component (ok)
- Functionality
  - inputs validation
  - UI loading spinner
  - connect with BE (ok)
  - handle submit button disabled state (ok)
    - disabled just after submitting (ok)
    - enabled after server responds with status !== ok so users can retry (ok)

### Dashboard page

- Design page (ok)
- Create component (ok)
- Add functionality (ok)
  - if user is !Auth, redirect to login (ok)
  - navigation links (ok)

### Profile page

- Design page (ok?)
- Create component (ok)
- Add functionality
  - Reset my pwd

### Users page

- Design page (ok)
- Create component
  - search section
    - add multiple fields for filters instead of a modal
  - floating add button
  - add filters modal
  - create user modal
  - view user modal
- functionality
  - create users
  - update (?)
  - delete (?)

### Accounts page

- Design page (wip)
  - decide page design for account details
    - use modal with tabs
      - account info (name, client, responsible)
      - members (custom complex component)
        - view (table)
        - create
        - delete
      - history (custom complex component)
        - view (table)
    - redirect to account details page
      - account info (card component)
      - team members
        - view (table)
        - add members
        - remove members
      - operations history
        - search
        - view (table)
- Manage accounts
  - create
  - read
  - update
  - delete
- Manage account members
  - create
  - read (view)
  - update
  - delete

### Operations history

- Search with filters
