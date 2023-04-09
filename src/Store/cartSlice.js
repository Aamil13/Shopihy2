import {createSlice} from "@reduxjs/toolkit"


const initialState = [];


const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        add(state,action){
            let idx = state.findIndex((x)=> x.id === action.payload.id)
            if(idx !== -1){
                state[idx].qty += 1
            }else{
                state.push(action.payload)
            }
            
            
        },
        increaseprod(state,action){
            let idx = state.findIndex((x)=> x.id === action.payload)
            
            if(idx !== -1){
                state[idx].qty += 1
            }
        },
        decreaseprod(state,action){
            let idx = state.findIndex((x)=> x.id === action.payload)
            
            if(idx !== -1){
                if(state[idx].qty >= 2){
                    state[idx].qty -= 1
                }
            }
        },

        remove(state,action){
            return state.filter((item)=> item.id !== action.payload)
        },
    }

})

export const {add, remove, increaseprod ,decreaseprod} = cartSlice.actions;
export default cartSlice.reducer;
