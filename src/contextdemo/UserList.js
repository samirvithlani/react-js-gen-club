import React, { useContext } from "react";
import { appContext } from "./context";
import { User } from "./User";

export const UserList = () => {
  const { user,dispatachUserEvent } = useContext(appContext);
  console.log(user);
  return (
    <div>
      <h2>AVAIALBLE USERS</h2>
      {user.map((u) => {
        return (
          <>
            <User user={u}></User>
            <button onClick={()=>{dispatachUserEvent('DELETE_USER',u)}}>DELETE</button>
          </>
        );
      })}
    </div>
  );
};
