import React from "react";
import { nonVegPizzaList } from "../Main/MenuLists";

const NonVegPizzas = () => {
  return (
    <div>
      <h3 className="text-center my-3  " style={{ color: "orange" }}>
        Non Veg Pizzas{" "}
      </h3>
      <div className="container">
        <div className="nonVegItems">
          {nonVegPizzaList.map((pizza, i) => (
            <div className="item border border-2 rounded rounded-3 " key={i}>
              <div className="p-3">
                <img src={pizza.image} alt="" className="nonvegPizza1 p-3" />
              </div>
              <div className="">
                <h3>{pizza.name}</h3>
              </div>
              <div className="">
                <table className="table">
                  <thead>
                    <tr>
                      <th>Size</th>
                      <th>Price</th>
                      <th>order</th>
                    </tr>
                  </thead>
                  <tbody className="text-center">
                    <tr>
                      <td>Regular </td>
                      <td> Rs.{pizza.price.Regular}</td>
                      <td>
                        <button
                          type="button"
                          className="OrderBtn"
                          data-bs-toggle="modal"
                          data-bs-target="#exampleModal"
                        >
                          Add 
                        </button>
                      </td>
                    </tr>
                    <tr>
                      <td>Medium</td>
                      <td> Rs.{pizza.price.Medium}</td>
                      <td>
                        <button
                          type="button"
                          className="OrderBtn"
                          data-bs-toggle="modal"
                          data-bs-target="#exampleModal"
                        >
                          Add 
                        </button>
                      </td>
                    </tr>
                    <tr>
                      <td>Large</td>
                      <td>Rs .{pizza.price.Large}</td>
                      <td>
                        <button
                          type="button"
                          className="OrderBtn"
                          data-bs-toggle="modal"
                          data-bs-target="#exampleModal"
                        >
                          Add 
                        </button>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
              
            </div>
          ))}
        </div>
      </div>
      <div className="">
        

        {/* <!-- Modal Start --> */}
        <div
          className="modal fade"
          id="exampleModal"
          tabIndex="-1"
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog modal-dialog-centered modal-dialog-scrollable">
            <div className="modal-content">
              <div className="modal-header ">
                <h1 className="modal-title fs-5 " id="exampleModalLabel">
                  Add Extra Toppings and Crusts
                </h1>
                <button
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                ></button>
              </div>
              <div className="modal-body">...</div>
              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-secondary"
                  data-bs-dismiss="modal"
                >
                  Close
                </button>
                <button type="button" className="btn btn-primary">
                  Save changes
                </button>
              </div>
            </div>
          </div>
        </div>
        {/* <!-- Modal Close --> */}

      </div>
    </div>
  );
};

export default NonVegPizzas;
