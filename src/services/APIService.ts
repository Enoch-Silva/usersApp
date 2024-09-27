import { api } from "@/api/api";

type UserType = {
  name: string;
  email: string;
  role: string;
};

export async function getUsers() {
  const response = await api.get("/users");
  return response.data;
}

export async function addUser({ name, email, role }: UserType) {
  const response = await api.post("/user", {
    name: name,
    email: email,
    role: role,
  });
  return response.data;
}

export async function deleteUser(id: string) {
  const response = await api.delete(`/user/${id}`, {
    params: {
      id: id,
    },
  });
  return response.data;
}

export async function updateUser(id: string, { name, email, role }: UserType) {
  const response = await api.put(`/user/${id}`, {
    name: name,
    email: email,
    role: role,
  });
  return response.data;
}
