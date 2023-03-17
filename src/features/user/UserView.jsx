import React, { useEffect } from "react";
import { fetchUsers } from "./userSlice";

import { useSelector, useDispatch } from "react-redux";

export const UserView = () => {
  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchUsers());
  }, []);
  const fetchUser = useSelector((state) => state.user.fetchUser);

  return (
    <div>
      <h2>List Of Users </h2>
      {user.loading && <div>loading...</div>}
      {!user.loading && user.error ? <div>{user.error}</div> : null}
      {!user.loading && user.users.length > 0 ? (
        <ul>
          {user.users.map((u) => (
            <li key={u.id}>{u.name}</li>
          ))}
        </ul>
      ) : null}
    </div>
  );
};
