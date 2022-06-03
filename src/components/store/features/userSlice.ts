import {createSlice} from "@reduxjs/toolkit";
import validator from "validator";


const userSlice = createSlice({
    name: "user",
    initialState: {
        email: '',
        password: '',
        error: ''
    },
    reducers: {
        addEmail: (state, action) => {
            state.email = action.payload
        },
        addPassword: (state, action) => {
            state.password = action.payload
        },
        addError: (state) => {
            if (state.email === '' || state.password === '') {
                state.error = 'Sorry field cannot be empty!'
            } else if (state.password.length < 5) {
                state.error = 'Password must be 5 or more characters long! '
            } else if (!validator.isEmail(state.email)) {
                state.error = 'invalid email'
            } else {
                state.error = ''
            }
        }

    }
})

export const {addEmail, addPassword, addError} = userSlice.actions

export default userSlice