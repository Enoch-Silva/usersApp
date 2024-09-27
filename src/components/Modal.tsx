
interface ModalProps {
  isVisible?: boolean;
  onClose: () => void;
  children?: React.ReactNode;
}

const Modal = ({ isVisible, onClose }: ModalProps) => {
  if (!isVisible) return null;

  const handleClose = (e: any) => {
    if (e.target.id === "wrapper") onClose();
  };

  return (
    <div
      id="wrapper"
      className="fixed inset-0 bg-black bg-opacity-25 backdrop-blur-sm flex justify-center items-center"
      onClick={handleClose}
    >
      <div className="w-[500px] flex flex-col">
        <button onClick={onClose} className="text-white text-xl place-self-end">
          x
        </button>
        <div className="bg-white p-2 rounded"></div>
      </div>
    </div>
  );
};

export default Modal;
