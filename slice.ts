import {createSlice} from '@reduxjs/toolkit';

export const slice = createSlice({
  name: 'cart',
  initialState: {
    items: [{
        id: 1,
        name: 'movie 1'
      
        }, {
        id: 2,
        name: 'movie 2'
    }],  },
  reducers: {
    addItem: (state: { items: any[]; }, action: { payload: any; }) => {
        const addNew={id:state.items.length+1, name:action.payload}
      state.items.push(addNew);
    },
    removeItem: (state: { items: any[]; }, action: { payload: { id: any; }; }) => {
      state.items = state.items.filter(item => item.id !== action.payload.id);
    },
  },})
  export const { addItem, removeItem } = slice.actions;
  export default slice.reducer;