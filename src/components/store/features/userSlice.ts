import {createSlice} from "@reduxjs/toolkit";
import {stat} from "fs";
import validator from "validator";


const userSlice = createSlice({
    name: "user",
    initialState: {
        email: '',
        password: '',
        emailError: '',
        passwordError: '',
        error: false,
        count: 0
    },
    reducers: {
        addEmail: (state, action) => {
            state.email = action.payload
        },
        addPassword: (state, action) => {
            state.password = action.payload
        },
        addEmailError: (state) => {

            console.log(state.email)
            if (!validator.isEmail(state.email)) {
                state.error = true
                state.emailError = 'invalid email'
            }

            if (state.email === '') {
                state.error = true
                state.emailError = 'sorry email cannot be empty'
            }

            if (!state.error) {
                state.emailError = ''
            }

            state.error = false


        },
        addPasswordError: (state) => {
            if (state.password === '') {
                state.passwordError = 'sorry password cannot be empty'
            } else if (state.password.length < 5) {
                state.passwordError = 'Password must be 5 or more characters long'
            } else {
                state.passwordError = ''
            }
        },
        addCount: (state) => {
            if (state.count > 3) {
                state.count = 0
            } else {
                state.count += 1
            }
        }

    }
})

export const {addEmail, addPassword, addEmailError, addPasswordError, addCount} = userSlice.actions

export default userSlice