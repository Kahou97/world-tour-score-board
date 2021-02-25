### `npm start`

Runs the app in the development mode.
Open http://localhost:3000 to view it in the browser.

### `npm test`

Launches the test runner in the interactive watch mode.

## Notes

### Architecture

The architecture used here is not the most suitable for a project of this caliber, either using sagas, however this architecture would be
a good choice if this project were to grow, in which case the choice
of using redux sagas is much better than redux thunks in terms of performance and maintainability.

### Libraries

 - Redux for saving data in a state for the components
 - Redux-saga for asynchrony and calls to external apis
 - Reselect for the creation of selectors, which passes the data from the store to the components
 - Ramda for access to state data
 - PropTypes for defining the data types in the components
 - React-router for navigation
 - Prettier for the file formats
 - Jest for tests

