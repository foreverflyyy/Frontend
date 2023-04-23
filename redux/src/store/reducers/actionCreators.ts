import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { IUser } from "../../models/IUser";
import { AppDispatch } from "../store";
import {userSlice} from "./UserSlice";

export const fetchUsers = createAsyncThunk(
   'user/fetchAll',
   async(_, thunkAPI) => {
      try{
         const response = await axios.get<IUser[]>('https://jsonplaceholder.typicode.com/users')
         return response.data
      } catch(e) {
         return thunkAPI.rejectWithValue("Failed to load users")
      }
   }
)