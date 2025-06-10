export const groupsData = [
  // 3 originales (ejemplo)
  {
    id: 1,
    title: "Amantes de la Historia",
    topic: "Cultura",
    members: 120,
    isPrivate: true,
    image: "https://media.meer.com/attachments/442db45254e74ff4f507ab54fc04d61133dfcf74/store/fill/690/388/356bd0b729a6f5afd9e9fd34e8467d1e127aba92f55b2d47891724beaff5/Los-Amantes-de-Teruel-Escultura-de-Juan-de-Avalos-con-las-dos-figuras-de-Diego-de-Marcilla-e.jpg",
  },
  {
    id: 2,
    title: "Viajeros del Mundo",
    topic: "Turismo",
    members: 95,
    isPrivate: false,
    image: "https://republicanaradio.com/wp-content/uploads/2016/07/especialistas-en-crear-sueños-un-viaje-foto-vía-viatgesrovira-800x520-1024x585.jpg",
  },
  {
    id: 3,
    title: "Cine Independiente",
    topic: "Entretenimiento",
    members: 210,
    isPrivate: false,
    image: "https://source.unsplash.com/featured/?cinema",
  },

  // 47 nuevos generados (se pueden extender con más variedad visual)
  ...Array.from({ length: 47 }, (_, i) => {
    const categories = ["Cultura", "Entretenimiento", "Turismo"];
    const category = categories[i % 3];
    return {
      id: i + 4,
      title: `${category} Grupo ${i + 4}`,
      topic: category,
      members: Math.floor(Math.random() * 500) + 50,
      isPrivate: Math.random() > 0.5,
      image: `https://source.unsplash.com/featured/?${category.toLowerCase()}&sig=${i}`,
    };
  }),
];
