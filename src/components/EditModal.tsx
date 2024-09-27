import { useRef, useState } from "react";
import { updateUser } from "../services/APIService";

type UserType = {
  id: string;
  name: string;
  email: string;
  role: string;
};

interface ModalProps {
  isVisible?: boolean;
  onClose: () => void;
  user: UserType;
}

export function EditModal({ isVisible, onClose, user }: ModalProps) {
  const nameRef = useRef<HTMLInputElement | null>(null);
  const emailRef = useRef<HTMLInputElement | null>(null);
  const roleRef = useRef<HTMLInputElement | null>(null);

  if (!isVisible) return null;

  const handleClose = (e: any) => {
    if (e.target.id === "wrapper") onClose();
  };

  async function handleUpdate(id: any, user: UserType) {
    const newId = JSON.stringify(id);
    updateUser(newId, user)
      .then((response) => {
        console.log(response.message);
        setTimeout(() => {
          window.location.reload();
        }, 1500);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  return (
    <div
      id="wrapper"
      className="fixed inset-0 bg-black bg-opacity-25 backdrop-blur-sm flex justify-center items-center"
      onClick={handleClose}
    >
      <div className="w-[500px] flex flex-col">
        <button
          onClick={onClose}
          className="text-white text-xl place-self-end m-3"
        >
          x
        </button>
        <div className="w-full bg-zinc-900 rounded">
          <div className="w-full flex flex-col items-center">
            <h1 className="text-3xl text-gray-400 my-4">Editar Usuário</h1>
            <form
              className="w-full flex flex-col items-center p-6"
              action=""
            >
              <input
                ref={nameRef}
                className="w-full p-4 m-4 border-2 border-gray-500 bg-zinc-950 rounded"
                type="text"
                name="name"
                value={user.name}
              />
              <input
                ref={emailRef}
                className="w-full p-4 m-4 border-2 border-gray-500 bg-zinc-950 rounded"
                type="text"
                name="email"
                value={user.email}
              />
              <input
                ref={roleRef}
                className=" w-full p-4 m-4 border-2 border-gray-500 bg-zinc-950 rounded"
                type="text"
                name="role"
                value={user.role}
              />
              <input
                onClick={() => handleUpdate(user.id, user)}
                className="w-full p-4 m-4 bg-green-500 text-xl text-black rounded"
                type="submit"
                value="Salvar"
              />
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
