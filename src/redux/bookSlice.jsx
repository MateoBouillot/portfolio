import { createSlice } from "@reduxjs/toolkit"


const initialState = {
    turningPage: null
}

export const bookSlice = createSlice({
    name: 'book',
    initialState,
    reducers: {
        pageLeft: (state) => {
            state.turningPage = 'left'
        },
        pageRight: (state) => {
            state.turningPage = 'right'
        },
        pageStop: (state) => {
            state.turningPage = null
        }
    }
})

export const { pageLeft, pageRight, pageStop } = bookSlice.actions
export default bookSlice.reducer