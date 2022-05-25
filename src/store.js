import {configureStore} from "@reduxjs/toolkit";
import loginReducer from './components/Login/slice';
import dashboardReducer from "./components/Dashboard/slice";
import loaderReducer from "./components/common/Loader/slice";
import signUpReducer from "./components/Signup/slice";

export const store = configureStore({
    reducer: {
        login: loginReducer,
        dashboard: dashboardReducer,
        loader: loaderReducer,
        signUp: signUpReducer
    }
});
