import React from "react";

const Rightcard = () => {
  return (
    <div className="h-full  w-2/5 bg-red-600 relative overflow-hidden rounded-4xl">
      <img
        className="h-full w-full object-fill "
        src="https://images.unsplash.com/photo-1755519024827-fd05075a7200?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8d29yayUyMHByb2ZpbGUlMjBwaWN8ZW58MHx8MHx8fDA%3D"
        alt=""
      />
      <div className="absolute top-0 left-0 h-full w-full p-6 flex flex-col justify-between">
        <h2 className="bg-white rounded-full w-8 p-2 ">1</h2>
        <div>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolore
            dignissimos, officia fugiat esse nemo praesentium.
          </p>
          <div>
            <button>Satisfied</button>
            <button>
             
              <i className="ri-arrow-right-line"></i>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Rightcard;
