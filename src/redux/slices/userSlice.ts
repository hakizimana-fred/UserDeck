import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { User } from '../../types';
import axios from 'axios';
import { RootState } from '../store';

interface IUserState {
    users: User[];
    error?: string;
    isEditing?: boolean
    editingUser?: User | null
    
}

const initialState: IUserState = {
    users: [],
    error: '',
    isEditing: false,
    editingUser: null 
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
        },
        startEditing(state) {
            state.isEditing = true
        },
        stopEditing(state) {
            state.isEditing = false
            state.editingUser = null
        },
        setEditingUser(state, action) {
            state.editingUser = action.payload
        },
        updateUser(state, action) {
            const { id, name, email, phone } = action.payload
            const user = state.users.find(user => user.id === id)
            if (user) {
                user.name = name
                user.email = email
                user.phone = phone
        }
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

export const { addUser, deleteUser, startEditing, stopEditing, setEditingUser, updateUser } = userSlice.actions

export const selectUser = (state: RootState) => state.user.users
export const isEditing = (state: RootState) => state.user.isEditing
export const editingUser = (state: RootState) => state.user.editingUser
export default userSlice.reducer