import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { User } from '../../types';
import axios from 'axios';
import { RootState } from '../store';

interface IUserState {
    users: User[];
    error?: string;
    
}

const initialState: IUserState = {
    users: [],
    error: ''
};

export const fetchUsers = createAsyncThunk('users/fetchUsers', async () => {
    const { data } = await axios.get(`${import.meta.env.VITE_API_URL}`)
    return data
}
)


const userSlice = createSlice({
    name: 'users',
    initialState,
    reducers: {
        addUser(state, action) {
            state.users.push(action.payload)
        },
        deleteUser(state, action) {
            state.users = state.users.filter(user => user.id !== action.payload)
        }
    },
    extraReducers: (builder) => {
        builder
        .addCase(fetchUsers.fulfilled, (state, action) => {
            state.users = action.payload
        })
        .addCase(fetchUsers.rejected, (state, action) => {
            state.error = action.error.message
        })
    }
})

export const { addUser, deleteUser } = userSlice.actions

export const selectUser = (state: RootState) => state.user.users
export default userSlice.reducer