import GroupCreationBar from "../molecules/groupCreationBar";
import CreateGroupTop from "../atoms/createGroupTop";
import { GroupInfoProps } from "@/pages/busquedaGrupos";

interface CreateGroupSidebarProps {
  nextGroupId: number; // ✅ nuevo
  onPreviewChange: (data: GroupInfoProps) => void;
  onBack: () => void;
  onGroupCreated: (data: GroupInfoProps) => void;
  onCreationConfirmed: (data: GroupInfoProps) => void; // ✅ para alertModal
}

const CreateGroupSidebar = ({
  nextGroupId,
  onPreviewChange,
  onBack,
  onGroupCreated,
  onCreationConfirmed,
}: CreateGroupSidebarProps) => {
  return (
    <div className="w-full h-213 border-r-2 border-altGray overflow-auto">
      <CreateGroupTop username="Username" handleOnClick={onBack} />
      <GroupCreationBar
        nextGroupId={nextGroupId} // ✅ se pasa el id
        onPreviewChange={onPreviewChange}
        onGroupCreated={onGroupCreated}
        onCreationConfirmed={onCreationConfirmed} // ✅ alertModal
      />
    </div>
  );
};

export default CreateGroupSidebar;
