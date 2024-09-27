import { usersApi } from "@/features/api/apiSlice";

type UserType = {
  id: string;
  name: string;
  email: string;
  role: string;
};

interface ModalProps {
  user: UserType;
  isVisible?: boolean;
  onClose: () => void;
}

export function DeleteModal({ user, isVisible, onClose }: ModalProps) {
  if (!isVisible) return null;

  const handleClose = (e: any) => {
    if (e.target.id === "wrapper") onClose();
  };

  const [deleteUser] = usersApi.endpoints.deleteUser.useMutation();

  function handleDelete(id: any) {
    deleteUser(id);
  }

  return (
    <div
      id="wrapper"
      className="fixed inset-0 bg-black bg-opacity-25 backdrop-blur-sm flex justify-center items-center"
      onClick={handleClose}
    >
      <div className="w-[500px] flex flex-col">
        <div className="bg-zinc-900 rounded text-white">
          <div className="w-full h-auto bg-zinc-900">
            <h1 className="text-2xl m-2">Deseja apagar o Usuário?</h1>
            <hr />
            <div className="w-full flex gap-4 items-center justify-end px-4 py-2">
              <button onClick={onClose} className="bg-blue-600 p-2 rounded-lg">
                Cancelar
              </button>
              <button
                onClick={() => handleDelete(user.id)}
                className="bg-green-600 p-2 rounded-lg"
              >
                Apagar
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
