import { createSlice } from "@reduxjs/toolkit"


const initialState = {
    language: 'fr'
}

export const langSlice = createSlice({
    name: 'lang',
    initialState,
    reducers: {
        english: (state) => {
            state.language = 'en'
        },
        francais: (state) => {
            state.language = 'fr'
        }
    }
})

export const { english, francais } = langSlice.actions
export default langSlice.reducer