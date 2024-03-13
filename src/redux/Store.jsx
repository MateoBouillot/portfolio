import { configureStore } from "@reduxjs/toolkit"
import { bookSlice } from "./bookSlice"
import { langSlice } from "./langSlice"

export const store = configureStore ({
    reducer: {
        book: bookSlice.reducer,
        lang: langSlice.reducer
    }
})