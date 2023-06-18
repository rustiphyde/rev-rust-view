// store file "stores" the application state
import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./reducers/userReducer";
import dataReducer from "./reducers/dataReducer";
import uiReducer from "./reducers/uiReducer";
// Actual state 
const reducers = combineReducers({
  
});


const store = configureStore({
    reducer: {
        // Everything that comes from userReducer.js will be stored inside the user object
        users: usersReducer,
        // Everything that comes from dataReducer.js will be stored inside the data object
        data: dataReducer,
        // Everything that comes from uiReducer.js will be stored inside the UI object
        UI: uiReducer,    
    }
});

export default store;
