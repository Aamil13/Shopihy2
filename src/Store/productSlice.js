import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

// export const fetchprod = createAsyncThunk("fetchprod",async()=>{
//     const response = await fetch("https://fakestore-api-seven.vercel.app/");
//     return response.json();
// })

export const fetchprod = createAsyncThunk(
    "fetchpord",
    async(query,{rejectWithValue})=>{
        // console.log('runned')
        try{
            let res;
            if(query){
                res = await axios.get(`https://fakestore-api-seven.vercel.app/${query}`)
            }else{
                res = await axios.get("https://fakestore-api-seven.vercel.app/")
            }
        
            return res?.data;
        }catch(err){
            return rejectWithValue(err.response.data.message)
        }
    }
)

export const fetchSingleprod = createAsyncThunk(
    "fetchsingle",
    async(id,{rejectWithValue})=>{
        // console.log('runned')
        try{
            let res = await axios.get(`https://fakestore-api-seven.vercel.app/${id}`)
            return res?.data?.data;
        }catch(err){
            return rejectWithValue(err.response.data.message)
        }
    }
)

const productSlice = createSlice({
    name: "product",
    initialState: {
        isLoading: false,
        data: [],
        isError: false,
    },
    extraReducers: (builder)=>{
        builder.addCase(fetchprod.pending, (state,action)=>{
            state.isLoading = true;
        });
        builder.addCase(fetchprod.fulfilled, (state,action)=>{
            state.isLoading = false;
            state.data = action.payload;
        });
        builder.addCase(fetchprod.rejected,(state,action)=>{
            state.isLoading = false;
            console.log("error",action.payload);
            state.isError = true;
        })
    }
})

export default productSlice.reducer;