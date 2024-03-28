export const ADD_VEHICLE = 'ADD_VEHICLE';

export const addVehicle = (vehicle) => ({
  type: ADD_VEHICLE,
  payload: vehicle,
});