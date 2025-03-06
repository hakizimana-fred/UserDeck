import { combineReducers } from 'redux'
import userReducer from '../slices/userSlice'
import storage from '../../storage'
import persistReducer from 'redux-persist/es/persistReducer'



const persistConfig = {
    key: 'users',
    storage,
}

export default combineReducers({
  user: persistReducer(persistConfig, userReducer)
})