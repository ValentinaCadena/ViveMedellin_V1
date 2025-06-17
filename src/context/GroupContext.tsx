import { createContext, useContext, useEffect, useState } from "react";
import { fetchGroups, joinGroup, createGroup } from "@/services/groupService"

export interface GroupInfo {
  id: number;
  groupName: string;
  description: string;
  image: string;
  isPrivate: boolean;
  topic: string;
  author: string;
  date: string;
  members: number;
  groupState: "default" | "creado" | "unido" | "enCreacion";
}

interface GroupContextProps {
  groups: GroupInfo[];
  updateGroupState: (id: number, state: GroupInfo["groupState"]) => void;
  addGroup: (group: GroupInfo) => void;
  joinToGroup: (id: number) => Promise<void>;
  createNewGroup: (group: Partial<GroupInfo>) => Promise<void>;
}

const GroupContext = createContext<GroupContextProps | null>(null);

export const useGroupContext = () => {
  const context = useContext(GroupContext);
  if (!context) throw new Error("Debe usarse dentro de GroupProvider");
  return context;
};

export const GroupProvider = ({ children }: { children: React.ReactNode }) => {
  const [groups, setGroups] = useState<GroupInfo[]>([]);

  useEffect(() => {
    const load = async () => {
      try {
        const fromAPI = await fetchGroups();
        const persisted = JSON.parse(localStorage.getItem("groups") || "[]");

        const merged = fromAPI.map((group) => {
          const local = persisted.find((g: GroupInfo) => g.id === group.id);
          return local ? { ...group, groupState: local.groupState } : group;
        });

        setGroups(merged);
      } catch (e) {
        console.error("Error cargando grupos", e);
      }
    };

    load();
  }, []);

  useEffect(() => {
    localStorage.setItem("groups", JSON.stringify(groups));
  }, [groups]);

  const updateGroupState = (id: number, state: GroupInfo["groupState"]) => {
    setGroups((prev) =>
      prev.map((g) => (g.id === id ? { ...g, groupState: state } : g))
    );
  };

  const addGroup = (group: GroupInfo) => {
    setGroups((prev) => [...prev, group]);
  };

  const joinToGroup = async (id: number) => {
    await joinGroup(id);
    updateGroupState(id, "unido");
  };

  const createNewGroup = async (group: Partial<GroupInfo>) => {
    const newGroup = await createGroup(group);
    newGroup.groupState = "creado";
    addGroup(newGroup);
  };

  return (
    <GroupContext.Provider
      value={{ groups, updateGroupState, addGroup, joinToGroup, createNewGroup }}
    >
      {children}
    </GroupContext.Provider>
  );
};