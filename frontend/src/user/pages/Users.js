import React from "react";

import UsersList from "../components/UsersList";

const Users = (props) => {
  const USERS = [
    {
      id: "u1",
      name: "SC",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQLdJgEH6PwdiBBmfxyReKHb9NhHMpwJ9Zf85Tljsd-2KwyFkya&usqp=CAU",
      places: 3,
    },
  ];

  return <UsersList items={USERS} />;
};

export default Users;
