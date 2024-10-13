import {createSlice, PayloadAction} from '@reduxjs/toolkit'
import { IconType } from "antd/es/notification/interface"

interface Project {
    name: string
    description: string
    image: string | null
    date: Date | null
    more?: {
        images: Array<string>,
        detailedDescription: string | null,
        linksList: Array<{
            platform: string
            icon: IconType | null | undefined
            link: string
        }>
    }
}

const initialState: Project = {
    name: '',
    description: '',
    image: null,
    date: null,
    more: {
        images: [],
        detailedDescription: null,
        linksList: []
    }
}


const projectSlice = createSlice({
    name: 'project',
    initialState,
    reducers: {
        setValue: (state, action) => {
            return {...state, ...action.payload}
        },

        resetValues: (state) => {
            return initialState
        }
    }
})


export const {setValue, resetValues} = projectSlice.actions
export default projectSlice.reducer