"use client";
import { useState } from "react";
import { EditModal } from "./EditModal";
import { DeleteModal } from "./DeleteModal";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { usersApi } from "@/features/api/apiSlice";

type UserType = {
  id: string;
  name: string;
  email: string;
  role: string;
};

export default function UserItem({ user }: UserType | any) {
  const [showEditModal, setShowEditModal] = useState(false);
  const [showDeleteModal, setShowDeleteModal] = useState(false);

  return (
    <main className="flex gap-2 justify-start items-center lg:flex-row sm:flex-col sm:items-start p-4 m-4 bg-zinc-700 rounded-md ">
      <div className="w-full flex items-center gap-4 sm:justify-start">
        <i className="ph-bold ph-user text-3xl"></i>
        <div className="flex flex-1 items-center justify-between gap-2 sm:justify-start ">
          <div className=" sm:flex sm:flex-1 ">
            <h1 className="text-2xl">{user.name}</h1>
          </div>
          <div className="info flex flex-1 justify-between sm:flex-col">
            <div className="sm:w-full sm:mr-2 lg:flex lg:flex-1 ">
              <h2>{user.email}</h2>
            </div>
            <div className="sm:w-full">
              <h2>{user.role}</h2>
            </div>
          </div>
        </div>
      </div>
      <div className="actions flex itens-center gap-4 ">
        <button
          onClick={() => setShowEditModal(true)}
          className="flex items-center gap-2 bg-yellow-300 text-black p-2 rounded-lg"
        >
          <i className="ph-bold ph-pen"></i>
          <p>Editar</p>
        </button>
        <button
          onClick={() => setShowDeleteModal(true)}
          className="flex items-center gap-2 bg-red-600 p-2 rounded-lg"
        >
          <i className="ph-bold ph-trash"></i>
          <p>Apagar</p>
        </button>
      </div>
      <EditModal
        user={user}
        isVisible={showEditModal}
        onClose={() => setShowEditModal(false)}
      />
      <DeleteModal
        user={user}
        isVisible={showDeleteModal}
        onClose={() => setShowDeleteModal(false)}
      />
      <ToastContainer position="top-center" />
    </main>
  );
}
