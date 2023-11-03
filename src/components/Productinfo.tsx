import React from "react";

const Productinfo = () => {
  return (
    <div className="py-8 px-4 sm:px-8 lg:px-16 shadow-2xl shadow-white grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6 relative">
      <div className="col-span-2 sm:col-span-1 lg:col-span-1">
        <h1 className="font-bold text-3xl pt-4">Product Information</h1>
        <div className="border-b-2 mt-6 border-gray-300"></div>
        <div className="mt-6">
          <div className="flex flex-col sm:flex-row lg:flex-row gap-4">
            <div>
              <h1 className="text-2xl font-bold text-stone-600">PRODUCT</h1>
              <h1 className="text-2xl font-bold text-stone-600">DETAILS</h1>
            </div>
            <div className="">
              <p className="text-base">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
              </p>
            </div>
          </div>
          <div className="mt-10 flex flex-col sm:flex-row lg:flex-row gap-4">
            <h1 className="text-2xl font-bold text-stone-600">PRODUCT CARE</h1>
            <ul className="list-disc font-bold">
              <li>Hand wash using cold water.</li>
              <li>Do not using bleach.</li>
              <li>Hang it to dry.</li>
              <li>Iron on low temperature.</li>
            </ul>
          </div>
          <div className="absolute top-0 right-2 left-16 opacity-5">
            <h1 className="font-bold text-[90px]">OVERVIEW</h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Productinfo;
