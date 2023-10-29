import {configureStore} from '@reduxjs/toolkit'
import formReducer from './formSlice'

const store=configureStore({
    reducer:{
        form:formReducer
    }
})

export default store





// The three pieces of code you provided are essential parts of a Redux setup in a React application:

// Form Component (Form.js):

// This is a React component that represents a form for user input.
// Inside this component, you use Redux hooks (useSelector and useDispatch) to connect to the Redux store.
// You map specific pieces of state from the Redux store (e.g., firstName, lastName, email, and urls) to component-level state using useSelector.
// You also dispatch actions (e.g., updateFirstName, updateLastName, updateEmail, and updateUrls) using the useDispatch hook to update the Redux store's state.
// The handleSubmit function is responsible for handling form submissions. It validates the email address, collects form data, dispatches actions to update the Redux store, and makes an API request using Axios.
// When a file is uploaded, the lr-data-output event handler dispatches an action (updateUrls) to update the urls in the Redux store.
// Redux Slice (formSlice.js):

// This code defines a Redux slice using the @reduxjs/toolkit.
// The formSlice contains an initial state object with fields for firstName, lastName, email, and urls.
// It defines four action creators (updateFirstName, updateLastName, updateEmail, and updateUrls) that update their respective fields in the Redux state.
// The actions are defined using the createSlice function, which also generates the corresponding reducers.
// The action creators and reducer are exported for use in other parts of the application.
// Redux Store Configuration (store.js):

// This code configures the Redux store using configureStore from the @reduxjs/toolkit library.
// The formReducer (exported from formSlice.js) is combined into the store's root reducer using the reducer object.
// The resulting store is exported as the default export of this module.
// The workflow of how these components connect and work together is as follows:

// The Redux store is created and configured in store.js, and the formReducer is added as the reducer for the form slice.

// The Form component imports the Redux store using useSelector and useDispatch hooks. It maps specific parts of the Redux state to component-level state variables and uses dispatch to update the state.

// When the user interacts with the form (e.g., types in input fields or submits the form), the component dispatches actions (e.g., updateFirstName, updateLastName, updateEmail, and updateUrls) to update the corresponding fields in the Redux store.

// The lr-data-output event handler in the Form component listens for file uploads and dispatches the updateUrls action to update the urls field in the Redux store.

// When the form is submitted, the handleSubmit function dispatches actions to clear the form fields in the Redux store and sends an API request using Axios. Depending on the response, it may also show a success or error notification using the react-toastify library.

// In summary, the Redux store serves as a central data store for the application, and the Form component connects to it using Redux hooks to read and update the data. The actions defined in the Redux slice (formSlice.js) are used to modify the state in a predictable way, and the Redux store maintains the state throughout the application. This setup allows for a clear separation of concerns and efficient state management.