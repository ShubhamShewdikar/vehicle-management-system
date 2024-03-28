// AddVehicleForm.js
import React, { useState } from "react";
import { connect } from "react-redux";
import { addVehicle } from "./redux/action";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

function AddVehicleForm({ addVehicle, history }) {
  const [brand, setBrand] = useState("");
  const [model, setModel] = useState("");
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    addVehicle({ brand, model });
    navigate("/vehicle-management");
  };

  return (
    <>
      <section class="text-gray-600 body-font relative">
        <div class="container mt-10 mx-auto">
          <div class="flex flex-col text-center w-full mb-12">
            <h1 class="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">
              Add Vehical
            </h1>
          </div>
          <form onSubmit={handleSubmit}>
            <div class="lg:w-1/2 md:w-2/3 mx-auto">
              <div class="flex flex-wrap -m-2">
                <div class="p-2 w-1/2">
                  <div class="relative">
                    <label for="brand" class="leading-7 text-sm text-gray-600">
                      Brand
                    </label>
                    <input
                      type="text"
                      id="brand"
                      name="brand"
                      value={brand}
                      onChange={(e) => setBrand(e.target.value)}
                      class="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                    />
                  </div>
                </div>
                <div class="p-2 w-1/2">
                  <div class="relative">
                    <label for="model" class="leading-7 text-sm text-gray-600">
                      Model
                    </label>
                    <input
                      type="text"
                      id="model"
                      name="model"
                      value={model}
                      onChange={(e) => setModel(e.target.value)}
                      class="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                    />
                  </div>
                </div>

                <div className="p-2 w-full flex justify-center">
                <button
                  type="submit"
                  className="flex text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg mr-4"
                >
                  Submit
                </button>
                <Link to="/vehicle-management">
                  <button
                    type="button"
                    className="flex text-white bg-gray-500 border-0 py-2 px-8 focus:outline-none hover:bg-gray-600 rounded text-lg"
                  >
                    Cancel
                  </button>
                </Link>
              </div>
              </div>
            </div>
          </form>
        </div>
      </section>
    </>
  );
}

const mapDispatchToProps = {
  addVehicle,
};

export default connect(null, mapDispatchToProps)(AddVehicleForm);
