import {createSlice} from "@reduxjs/toolkit";
import validator from "validator";
// import {updateCount, updatePlan} from "../../../firebase";




type subOptions = {
    [key: string]: boolean
}

type priceOptions = {
    [key: string]: string
}
const userSlice = createSlice({
    name: "user",
    initialState: {
        email: '',
        password: '',
        emailError: '',
        passwordError: '',
        error: false,
        count: 0,
        subscription: {
            mobile: true,
            basic: false,
            standard: false,
            premium: false
        } as subOptions,
        subscriptionPrices: {
            mobile: process!.env!.REACT_APP_MOBILE!,
            basic: process!.env!.REACT_APP_BASIC!,
            standard: process!.env!.REACT_APP_STANDARD!,
            premium: process!.env!.REACT_APP_PREMIUM!
        } as priceOptions,
        currentPrice: '',
        signUp: false
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
            if (state.count >= 5) {
                state.count = 0
            } else {
                state.count += 1
            }
            
        },
        addSubscription: (state, action) => {
            Object.keys(state.subscription).forEach((key: string) => {
                if (key === action.payload) {
                    state.subscription[key] = true
                    
                } else {
                    state.subscription[key] = false
                }
            })
        },
        getSubPrice: (state) => {
            for (const [key, value] of Object.entries(state.subscription)) {

                if (value === true) {
                    
                    state.currentPrice = state.subscriptionPrices[key]

                }
            }
        },
        changeSignUp: (state, action) => {
            state.signUp = action.payload
        }

    }
})

export const {
    addEmail,
    addPassword,
    addEmailError,
    addPasswordError,
    addCount,
    addSubscription,
    getSubPrice,
    changeSignUp
} = userSlice.actions

export default userSlice