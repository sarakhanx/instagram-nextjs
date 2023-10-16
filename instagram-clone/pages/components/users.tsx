import React from "react";
import { GetServerSideProps } from "next";

interface User {
  id: number;
  firstName: string;
  // Add more properties based on your API response
}

interface UsersProps {
  users: User[];
}

export const getServerSideProps: GetServerSideProps<UsersProps> = async () => {
    try {
      const response = await fetch("https://dummyjson.com/users");
      const users: User[] = (await response.json()).users
      return {
        props: {
          users,
        },
      };
    } catch (error) {
      console.error("Error fetching users:", error);
      return {
        props: {
          users: [],
        },
      };
    }
  };

const Users: React.FC<UsersProps> = ({ users }): React.JSX.Element => {
  return (
    <div>
      <h1>Users</h1>
      <div>
        {users.map((user) => (
          <p key={user.id}>{user.firstName}</p>
        ))}
      </div>
    </div>
  );
};

export default Users;

