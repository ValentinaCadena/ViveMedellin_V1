import Button from "./button";

interface CreateGroupTopProps {
  username: string;
  handleOnClick?: () => void;
}

const CreateGroupTop = ({ username, handleOnClick }: CreateGroupTopProps) => {
  return (
    <div className="w-full p-2 px-4 text-darkBlue flex flex-col gap-4 border-b-2 border-altGray pb-6">
      <div className="flex justify-between items-center">
        <h1 className="font-semibold text-3xl">Crear Grupo</h1>
        <p
          className="text-2xl hover:cursor-pointer hover:opacity-50"
          onClick={handleOnClick}
        >
          Volver
        </p>
      </div>
      <div className="flex items-center gap-12 text-2xl">
        <Button color="roundedEmerald" icon="mdi:person-outline" widthIcon="65" />
        <div className="flex flex-col items-start gap-2">
          <p className="font-semibold">{username}</p>
          <p>Administrador</p>
        </div>
      </div>
    </div>
  );
};

export default CreateGroupTop;
