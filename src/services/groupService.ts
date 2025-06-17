import api from "./api";
import { GroupInfo } from "@/context/GroupContext";

interface BackendGroup {
  idGrupo: number;
  nombre: string;
  descripcion: string;
  idCategoria: number; // Corregido a number
  reglas: string;
  visibilidad: "publico" | "privado";
  administrador: number;
  fechaCreacion: string;
  estado: string;
}

export const fetchGroups = async (): Promise<GroupInfo[]> => {
  const res = await api.get("/grupos");
  return res.data;
};

export const joinGroup = async (groupId: number): Promise<string> => {
  const response = await api.post(`http://localhost:8080/grupos/${groupId}/unirse`);
  return response.data; // Podría ser un mensaje o un valor retornado por la función SQL
};

export const createGroup = async (group: Partial<GroupInfo>): Promise<GroupInfo> => {
  const res = await api.post("/grupos", group);
  return res.data;
};

export const fetchAllGroups = async (): Promise<BackendGroup[]> => {
  const response = await api.get<BackendGroup[]>("/grupos/todos");
  return response.data;
};