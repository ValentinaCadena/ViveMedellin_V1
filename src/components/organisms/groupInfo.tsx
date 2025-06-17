import { useState } from "react";
import AuthorCard from "@/components/atoms/authorCard";
import GroupDataItems from "@/components/atoms/groupDataItems";
import GroupDescription from "@/components/atoms/groupDescription";
import GroupBasicInfo from "@/components/molecules/groupBasicInfo";
import AlertModal from "../molecules/alertModal";

interface GroupInfoProps {
  image: string;
  members: number;
  groupName: string;
  description: string;
  isPrivate: boolean;
  topic: string;
  author: string;
  date: string;
  groupState: "enCreacion" | "creado" | "default" | "unido";
}

export default function GroupInfo({
  image,
  members,
  groupName,
  description,
  isPrivate,
  topic,
  author,
  date,
  groupState: initialGroupState,
}: GroupInfoProps) {
  const [groupState, setGroupState] = useState(initialGroupState);
  const [showModal, setShowModal] = useState(false);

  const handleJoin = () => {
    setGroupState("unido");
    setShowModal(true);
  };

  return (
    <div className="bg-white rounded-2xl flex flex-col justify-center items-center gap-4 p-4 w-full border-2 border-altGray relative">
      <GroupBasicInfo
        image={image}
        members={members}
        groupName={groupName}
        groupState={groupState}
        isPrivate={isPrivate}
        onJoin={handleJoin}
      />
      <GroupDataItems />
      <GroupDescription topic={topic} description={description} />
      <AuthorCard name={author} date={date} />

      {showModal && (
        <AlertModal
          message={`Te has unido al grupo ${groupName} con éxito`}
          type="success"
          onClose={() => setShowModal(false)}
        />
      )}
    </div>
  );
}