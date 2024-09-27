"use client";

import UserItem from "./UserItem";

import { usersApi, useGetAllUsersQuery } from "../features/api/apiSlice";

export default function UsersList() {
  const { data, isLoading } = useGetAllUsersQuery({});

  if (isLoading) return <h1 className="text-2xl m-8"> Carregando...</h1>;

  return (
    <main>
      <div className="container mx-auto">
        {data?.map((user: any) => (
          <UserItem key={user.id} user={user} />
        ))}
      </div>
    </main>
  );
}
