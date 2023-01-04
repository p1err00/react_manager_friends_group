import { createSlice, configureStore } from "@reduxjs/toolkit"
import repaySlice from '../features/repaySlice'

const initialState = [
    {
        id:1,
        title:"Decouvirir Redux",
        href:"https://react-redux.js.org/tutorials/quick-start"
    },
]

const activitiesSlice = createSlice(
    {
        name:"activities",
        initialState:initialState,
        reducers: {
            addActivite: (state, action) => {
                //action = {type: "ADD_NEW_TASK", payload: "New task"}
                const newAct ={
                    id:Date.now(), 
                    title: action.payload.title, 
                    href: action.payload.href
                }
                state.push(newAct);
            },
            // toggleTask: (state, action) => {
            //     //action = {type: "TOGGLE_EXISTING_TASK", payload: 4}
            //     const task = state.find((t) => t.id === action.payload)
            //     task.isDone = !task.isDone 
            // },
            deleteActivity: (state, action) => {
                //action = {type: "DELETE_EXISTING_TASK", payload: 6}

                state = state.filter((t) => t.id !== action.payload )
                return state;
            } 
        }
    }
);


export const store = configureStore({
    reducer: {
        activities: activitiesSlice.reducer,
        repays : repaySlice.reducer
        // playlists:playlistSlice.reducer
    }
})


export const {addActivite, deleteActivity} = activitiesSlice.actions