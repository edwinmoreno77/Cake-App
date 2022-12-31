import { createSlice } from '@reduxjs/toolkit';


export const cakeSlice = createSlice({
    name: 'cake',
    initialState: {
        limit: 100,
        cakes: [], //products
        isLoading: false,
        errorMessage: undefined,
    },
    reducers: {

        startLoadingProducts: (state) => {
            state.isLoading = true;
        },
        setProducts: (state, action) => {
            state.isLoading = false;
            state.limit = action.payload.limit;
            state.cakes = action.payload.cakes;
        },
        showErrorMessage: (state, action) => {
            state.errorMessage = action.payload;
        },
        clearErrorsMessage: (state) => {
            state.errorMessage = undefined;
        }


    },
})

// Action creators are generated for each case reducer function
export const { startLoadingProducts, setProducts, showErrorMessage, clearErrorsMessage } = cakeSlice.actions
