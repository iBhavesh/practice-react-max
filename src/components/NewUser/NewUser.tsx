import React, { useState, useRef } from "react";
import { User } from "../../helpers/helpers";
import Overlay from "../Overlay/Overlay";

type Props = {
  onAddUser: (user: User) => void;
};

const NewUser = (props: Props) => {
  const [showOverlay, setShowOverlay] = useState(false);
  const [message, setMessage] = useState("initialState");
  const nameRef = useRef<HTMLInputElement>(null);
  const ageRef = useRef<HTMLInputElement>(null);

  const formSubmitHandler: React.FormEventHandler<HTMLFormElement> = (
    event
  ) => {
    event.preventDefault();
    const enteredAge = ageRef.current!.value.trim();
    const enteredName = nameRef.current!.value.trim();
    if (+enteredAge < 0) {
      setMessage("Age should be greater than 0");
      setShowOverlay(true);
      return;
    }
    if (+enteredAge > 150) {
      setMessage("Age should be less than 150");
      setShowOverlay(true);
      return;
    }
    if (enteredName.length < 1) {
      setMessage("Enter Name");
      setShowOverlay(true);
      return;
    }
    const user = {
      name: enteredName,
      age: +enteredAge,
      id: new Date(Date()).toISOString(),
    };
    props.onAddUser(user);
    ageRef.current!.value = "";
    nameRef.current!.value = "";
    nameRef.current!.focus();
  };

  const turnOffOverlay = () => {
    setShowOverlay(false);
  };

  return (
    <div className="bg-purple-400 p-4 mx-auto my-4 rounded-2xl w-11/12 sm:w-96">
      {showOverlay && <Overlay message={message} onClick={turnOffOverlay} />}
      <form onSubmit={formSubmitHandler}>
        <div className="flex gap-4 mb-4 flex-wrap">
          <div>
            <label htmlFor="name" className="font-bold mb-2 block">
              Name:
            </label>
            <input
              type="text"
              required
              className="p-2 border-solid rounded border w-80 m-w-full"
              ref={nameRef}
            />
          </div>
          <div>
            <label htmlFor="age" className="font-bold mb-2 block">
              Age:
            </label>
            <input
              type="number"
              required
              step="1"
              max="150"
              className="p-2 border-solid rounded border w-80 m-w-full"
              ref={ageRef}
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
