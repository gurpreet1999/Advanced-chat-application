import { configureStore } from "@reduxjs/toolkit";
import { useDispatch as useAppDispatch ,useSelector as useAppSelector} from "react-redux";
import  {persistStore,persistReducer} from "redux-persist"
import { rootPersistConfig,rootrReducer } from "./rootReducer";


const store=configureStore({
    reducer:persistReducer(rootPersistConfig,rootrReducer),
        middleware:(getDefaultMiddleware)=>getDefaultMiddleware({
serializableCheck:false,
immutableCheck:false
        })
})


const persistor=persistStore(store)

const {dispatch}=store;
const useSelector=useAppSelector;
const useDispatch=()=>useAppDispatch();
export {store,persistor,useSelector,useDispatch,dispatch}