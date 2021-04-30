import React from "react";

const NewUser = () => {
  return (
    <div className="bg-purple-400 p-4 mx-auto my-4 rounded-2xl w-11/12 sm:w-96">
      <form>
        <div className="flex gap-4 mb-4 flex-wrap">
          <div>
            <label htmlFor="name" className="font-bold mb-2 block">
              Name:
            </label>
            <input
              type="text"
              className="p-2 border-solid rounded border w-80 m-w-full"
            />
          </div>
          <div>
            <label htmlFor="age" className="font-bold mb-2 block">
              Age:
            </label>
            <input
              type="number"
              step="1"
              max="150"
              className="p-2 border-solid rounded border w-80 m-w-full"
            />
          </div>
        </div>
        <div className="flex justify-end">
          <button className="cursor-pointer py-4 px-8 border border-solid border-purple-900 bg-purple-900 rounded-xl text-white">
            Add
          </button>
        </div>
      </form>
    </div>
  );
};

export default NewUser;
