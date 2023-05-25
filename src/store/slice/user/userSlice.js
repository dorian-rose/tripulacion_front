import { createSlice } from '@reduxjs/toolkit'
import { getUserLocal } from '../../../helpers/localStorage'

export const userSlice = createSlice({


    name: 'user',
    initialState: {
        userObject: getUserLocal().replaceAll('"', "")

    },
    reducers: {
        setUser: (state, action) => {

            state.userObject = action.payload
        }
    }

})

export const { setUser } = userSlice.actions