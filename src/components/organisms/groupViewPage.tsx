import { useState } from "react";
import PublicationSection from "./publicationSection";
import Scrollbar from "../molecules/scrollbar";
import { GroupInfoProps } from "@/pages/busquedaGrupos";

export default function GroupViewPage() {
  const [selectedGroup, setSelectedGroup] = useState<GroupInfoProps | null>(null);

  return (
    <div className="flex flex-row w-full gap-6">
      <div className="w-1/4">
        <Scrollbar onGroupSelect={setSelectedGroup} />
      </div>
      <div className="w-3/4">
        <PublicationSection selectedGroup={selectedGroup} setSelectedGroup={setSelectedGroup} />
      </div>
    </div>
  );
}
