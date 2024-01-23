import { createSlice,PayloadAction} from "@reduxjs/toolkit"




interface State  {   
city_mpg?: number
class?:string
combination_mpg?: number
cylinders?: number
displacement?: number
drive?: string
fuel_type?: number
highway_mpg?: number
make?: string
model?: string
transmission?: string
year?: number
};
interface MyState {
  carDetails: State[];
} 
const initialState: MyState = {
  carDetails:[],
};

export const carSlice = createSlice({
  name: "car",
  initialState,
  reducers: {
    carData: (state, action: PayloadAction<State[]>) => {
      state.carDetails = action.payload;
    },
  },
});

export const {carData} =carSlice.actions;
export default carSlice.reducer