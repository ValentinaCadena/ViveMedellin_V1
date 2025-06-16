import { useState, useEffect } from "react";
import { Icon } from "@iconify/react";
import Button from "../atoms/button";
import { GroupInfoProps } from "@/pages/busquedaGrupos";
import AlertModal from "./alertModal";

interface GroupCreationBarProps {
  nextGroupId: number; // ✅ nuevo
  onPreviewChange: (data: GroupInfoProps) => void;
  onGroupCreated: (data: GroupInfoProps) => void;
  onCreationConfirmed: (data: GroupInfoProps) => void;
}

export default function GroupCreationBar({
  nextGroupId,
  onPreviewChange,
  onGroupCreated,
  onCreationConfirmed,
}: GroupCreationBarProps) {
  const [groupName, setGroupName] = useState("");
  const [description, setDescription] = useState("");
  const [selectedTopic, setSelectedTopic] = useState("");
  const [showTopics, setShowTopics] = useState(false);
  const [privacy, setPrivacy] = useState("publico");
  const [showAlert, setShowAlert] = useState(false);
  const [alertMessage, setAlertMessage] = useState("");
  const [alertType, setAlertType] = useState<"error" | "success">("error");

  const maxDescriptionLength = 50;
  const topics = ["Cultura", "Entretenimiento", "Turismo"];
  const existingGroups = ["Aventureros", "Cultura Viva", "Turismo X"];

  const isNameInvalid = groupName.trim().length === 0;
  const isDescriptionTooLong = description.length > maxDescriptionLength;
  const isTopicInvalid = selectedTopic === "";

  useEffect(() => {
    onPreviewChange({
      id: nextGroupId, // ✅ se usa nextGroupId
      image: "/imagenPortada.png",
      members: 1,
      groupName: groupName || "Sin nombre",
      description: description || "Sin descripción",
      isPrivate: privacy === "privado",
      topic: selectedTopic || "Sin tema",
      author: "Username",
      date: new Date().toLocaleDateString(),
      groupState: "enCreacion",
    });
  }, [nextGroupId, groupName, description, selectedTopic, privacy, onPreviewChange]);

  const [createdGroup, setCreatedGroup] = useState<GroupInfoProps | null>(null);
  const handleCreateGroup = () => {
    if (isNameInvalid) {
      setAlertType("error");
      setAlertMessage("Debe escribir un nombre adecuado");
      setShowAlert(true);
      return;
    }
    if (isDescriptionTooLong) {
      setAlertType("error");
      setAlertMessage("La descripción es demasiado larga, por favor ingrese una descripción de máximo 50 caracteres");
      setShowAlert(true);
      return;
    }
    if (isTopicInvalid) {
      setAlertType("error");
      setAlertMessage("No ha seleccionado un tema válido");
      setShowAlert(true);
      return;
    }
    if (existingGroups.includes(groupName.trim())) {
      setAlertType("error");
      setAlertMessage(`Ya existe un equipo con el nombre "${groupName.trim()}", por favor elija otro`);
      setShowAlert(true);
      return;
    }

    const newGroup: GroupInfoProps = {
      id: nextGroupId, // ✅ id fijo
      image: "/imagenPortada.png",
      members: 1,
      groupName: groupName.trim(),
      description: description.trim(),
      isPrivate: privacy === "privado",
      groupState: "creado",
      topic: selectedTopic,
      author: "Username",
      date: new Date().toLocaleDateString(),
    };

    setCreatedGroup(newGroup);

    setAlertType("success");
    setAlertMessage(`Se ha creado el grupo "${newGroup.groupName}" con éxito`);
    setShowAlert(true);
  };

  return (
    <div className="w-full space-y-6 p-2 px-4 overflow-auto max-h-200">
      {showAlert && (
        <AlertModal
          message={alertMessage}
          type={alertType}
          onClose={() => {
            setShowAlert(false);
            if (alertType === "success" && createdGroup) {
              onGroupCreated(createdGroup);
              onCreationConfirmed(createdGroup); // ✅ se notifica
              setCreatedGroup(null);
            }
          }}
        />
      )}

      <form className="text-darkBlue text-xl flex flex-col gap-4">
        <input
          type="text"
          placeholder="Nombre del Grupo"
          value={groupName}
          onChange={(e) => setGroupName(e.target.value)}
          className={`border rounded-lg p-2 ${
            isNameInvalid ? "border-red-500" : "border-altGray"
          }`}
        />
        {isNameInvalid && (
          <div className="flex items-center gap-4 text-red-500 text-lg">
            <Icon icon="mdi:alert-circle-outline" width={28} />
            <p>Debe escribir un nombre adecuado</p>
          </div>
        )}

        <input
          type="text"
          placeholder="Descripción"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          className={`border rounded-lg p-2 ${
            isDescriptionTooLong ? "border-red-500" : "border-altGray"
          }`}
        />
        <p
          className={`text-lg -mt-4 ${
            isDescriptionTooLong ? "text-red-500" : "text-[#686868]"
          }`}
        >
          {description.length}/{maxDescriptionLength} Caracteres
        </p>
      </form>

      <div
        className={`flex flex-col border-2 rounded-lg ${
          isTopicInvalid ? "border-red-500" : "border-[#e4e4e7]"
        } text-darkBlue text-xl relative`}
      >
        <div
          className="flex justify-between items-center p-2 cursor-pointer"
          onClick={() => setShowTopics((prev) => !prev)}
        >
          <p className="font-semibold">{selectedTopic || "Tema"}</p>
          <Icon
            icon="material-symbols:keyboard-double-arrow-down"
            className={`transform transition-transform duration-300 ${
              showTopics ? "rotate-180" : ""
            }`}
          />
        </div>

        {showTopics && (
          <div className="flex flex-col w-full px-2 pb-2 gap-2">
            {topics.map((topic) => (
              <Button
                text={topic}
                key={topic}
                color="blue3"
                onClick={() => {
                  setSelectedTopic(topic);
                  setShowTopics(false);
                }}
              />
            ))}
          </div>
        )}
      </div>

      <div className="flex flex-row justify-around text-darkBlue">
        <p className="font-semibold text-xl">Privacidad</p>
        <div className="flex flex-row gap-12 text-lg">
          <label className="flex gap-2">
            <input
              type="radio"
              name="privacidad"
              value="publico"
              checked={privacy === "publico"}
              onChange={() => setPrivacy("publico")}
            />
            Público
          </label>
          <label className="flex gap-2">
            <input
              type="radio"
              name="privacidad"
              value="privado"
              checked={privacy === "privado"}
              onChange={() => setPrivacy("privado")}
            />
            Privado
          </label>
        </div>
      </div>

      <Button
        color="orange"
        text="Crear grupo"
        className="w-full text-2xl p-3"
        onClick={handleCreateGroup}
      />

      <div className="text-xl text-darkBlue">
        <input
          type="text"
          placeholder="Reglas"
          className="border border-altGray rounded-lg p-2"
        />
      </div>
    </div>
  );
}
