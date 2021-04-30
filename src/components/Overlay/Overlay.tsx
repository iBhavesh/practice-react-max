import React from "react";
import "./Overlay.css";

type Props = {
  message?: string;
  onClick: () => void;
};

const Overlay = ({
  message = "Age should be greater than 0",
  onClick,
}: Props) => {
  return (
    <div>
      <div
        onClick={onClick}
        className="h-full fixed inset-0 w-full bg-b bg-black bg-opacity-80"
      ></div>
      <div className="overlay-content-div">
        <span
          onClick={onClick}
          className="absolute top-1 right-1 text-3xl cursor-pointer text-red-700"
        >
          x
        </span>
        <h2>{message}</h2>
      </div>
    </div>
  );
};

export default Overlay;
