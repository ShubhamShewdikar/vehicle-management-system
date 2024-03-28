// reducer.js
import { ADD_VEHICLE } from './action';
import vehiclesData from './data';

const initialState = {
  vehicles: vehiclesData,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_VEHICLE:
      return {
        ...state,
        vehicles: [...state.vehicles, action.payload],
      };
    default:
      return state;
  }
};

export default reducer;
