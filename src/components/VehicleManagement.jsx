import React, { useState } from "react";
import { connect } from "react-redux";
import { addVehicle } from "./redux/action";
import AddVehicleForm from "./AddVehicleModal";
import { useNavigate } from "react-router";

function VehicleManagement({ vehicles }) {
  const navigate = useNavigate();
  const openModal = () => {
    navigate("/add-vehicle")
  };

  return (
    <>
    <section className="bg-white">
      <div className="container px-5 mt-10 mx-auto">
        <div className="flex justify-end mx-auto mb-5">
          <button onClick={openModal} className="text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg">
            Add Vehicle
          </button>
        </div>

        <div className="flex flex-wrap -m-4">
          {vehicles.map((vehicle, index) => (
            <div className="xl:w-1/4 md:w-1/2 p-4" key={index}>
              <div className="border border-gray-700 border-opacity-75 p-6 rounded-lg">
                <h2 className="text-lg text-gray-700 font-medium title-font mb-2">
                  {vehicle.brand}
                </h2>
                <p className="leading-relaxed text-base">{vehicle.model}</p>
              </div>
            </div>
          ))}
        </div>
        
      </div>
    </section>
    </>
  );
}
const mapStateToProps = (state) => ({
  vehicles: state.vehicles,
});

export default connect(mapStateToProps)(VehicleManagement);