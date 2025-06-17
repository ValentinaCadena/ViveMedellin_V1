import { Icon } from "@iconify/react";
import Button from "../atoms/button";

interface AlertModalProps {
  message: string;
  type: "error" | "success";
  onClose: () => void;
}

const AlertModal = ({ message, type, onClose }: AlertModalProps) => {
  const isError = type === "error";

  return (
    <div className="fixed inset-0 bg-black/60 flex justify-center items-center z-50 h-full">
      <div className="bg-white p-14 rounded-2xl shadow-xl max-w-160 text-center space-y-14 px-10 sm:px-28 w-full relative">
        <div
          className={`font-semibold flex w-full gap-4 items-center justify-center ${
            isError ? "text-Red" : "text-green-600"
          }`}
        >
          <Icon
            icon={isError ? "tabler:alert-circle" : "tabler:circle-check"}
            width={64}
            className="w-30"
          />
          <p className="text-left text-xl">{message}</p>
        </div>
        <div className="flex flex-col gap-2">
          <Button text="Aceptar" color="orange" onClick={onClose} className="text-xl py-3"/>
        </div>
      </div>
    </div>
  );
};

export default AlertModal;
