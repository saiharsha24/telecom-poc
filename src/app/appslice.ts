import { PayloadAction, createSlice } from "@reduxjs/toolkit"
import { Plan } from "../features/plans/models"
import { RootState } from "./store"

export type AppSliceData = {
    selectedPlan: Plan | null
}

const initialData: AppSliceData = {
    selectedPlan: null,
}

const appSlice = createSlice({
    name: 'app',
    initialState: initialData,
    reducers: {
        setSelectedPlan: (state, action: PayloadAction<Plan | null>) => {
            state.selectedPlan = action.payload
        }
    }
})

export const { setSelectedPlan } = appSlice.actions

export const selectSelectedPlan = (state: RootState) => state.app.selectedPlan

export default appSlice.reducer
