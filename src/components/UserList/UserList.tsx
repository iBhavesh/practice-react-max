import React from "react";
import { User } from "../../helpers/helpers";

type Props = {
  userList: User[];
  onDeleteItem: (id: string) => void;
};

const UserList = (props: Props) => {
  const onClickCross = (id: string) => {
    props.onDeleteItem(id);
  };
  if (props.userList.length < 1) {
    return (
      <div className="mt-8 mx-auto justify-center flex py-4 w-11/12 sm:w-96 bg-purple-400 rounded-2xl">
        <h3>No user found! Add a user</h3>
      </div>
    );
  }
  return (
    <div className="mt-8 mx-auto flex-col flex p-4 w-11/12 sm:w-96 bg-purple-400 rounded-2xl">
      <ul>
        {props.userList.map((user) => (
          <UserItem
            onClickCross={onClickCross}
            key={user.id}
            id={user.id}
            name={user.name}
            age={user.age}
          />
        ))}
      </ul>
    </div>
  );
};

type UserItemProps = {
  name: string;
  age: number;
  id: string;
  onClickCross: (id: string) => void;
};
const UserItem = (props: UserItemProps) => {
  const onClickCross: React.MouseEventHandler<HTMLSpanElement> = (event) => {
    props.onClickCross(props.id);
  };
  return (
    <li className="flex flex-row justify-between border-solid border border-black rounded-xl p-4 w-full mb-4">
      <div>
        <h2 className="mr-4">{props.name}</h2>
        <h3 className="mr-4">{props.age}</h3>
      </div>
      <span
        onClick={onClickCross}
        className="cursor-pointer pt-1 text-3xl text-red-700"
      >
        x
      </span>
    </li>
  );
};

export default UserList;
