import React from "react";
import ReactDOM from "react-dom";
import "./Overlay.css";

type BackDropProps = {
  onClick: () => void;
};
const Backdrop = (props: BackDropProps) => {
  return (
    <div
      onClick={props.onClick}
      className="h-full fixed inset-0 w-full bg-b bg-black bg-opacity-80"
    />
  );
};

type ModalProps = {
  onClick: () => void;
  message: string;
};
const OverlayModal = (props: ModalProps) => {
  return (
    <div className="overlay-content-div">
      <span
        onClick={props.onClick}
        className="absolute top-1 right-1 text-3xl cursor-pointer text-red-700"
      >
        x
      </span>
      <h2>{props.message}</h2>
    </div>
  );
};

type Props = {
  message?: string;
  onClick: () => void;
};
const Overlay = ({
  message = "Age should be greater than 0",
  onClick,
}: Props) => {
  return (
    <>
      {ReactDOM.createPortal(
        <Backdrop onClick={onClick} />,
        document.getElementById("backdrop-root")!
      )}
      {ReactDOM.createPortal(
        <OverlayModal message={message} onClick={onClick} />,
        document.getElementById("overlay-root")!
      )}
    </>
  );
};

export default Overlay;
