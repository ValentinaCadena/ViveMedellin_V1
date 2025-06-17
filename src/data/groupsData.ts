export interface Group {
  id: number;
  groupName: string;
  description: string;
  groupState: "enCreacion" | "creado" | "default" | "unido";
  topic: string;
  members: number;
  isPrivate: boolean;
  image: string;
}

const groupsData: Group[] = [
  {
    id: 1,
    groupName: "Aventureros",
    description: "Grupo para explorar rutas naturales",
    topic: "Turismo",
    members: 10,
    isPrivate: false,
    image: "/equipo.jpg",
    groupState: "default",
  },
  {
    id: 2,
    groupName: "Cultura Viva",
    description: "Espacio para compartir eventos culturales",
    topic: "Cultura",
    members: 15,
    isPrivate: true,
    image: "/equipo.jpg",
    groupState: "default",
  },
  // 👇 Añadimos groupState: "default" aquí también
  ...Array.from({ length: 47 }, (_, i) => {
    const categories = ["Cultura", "Entretenimiento", "Turismo"];
    const category = categories[i % 3];
    return {
      id: i + 4,
      groupName: `${category} Grupo ${i + 4}`,
      description: `Grupo dedicado a ${category} y todo lo relacionado con este tema`,
      topic: category,
      members: Math.floor(Math.random() * 500) + 50,
      isPrivate: Math.random() > 0.5,
      image: "/equipo.jpg",
      groupState: "default", // ✅ aquí lo agregamos
    };
  }),
];

export { groupsData };
