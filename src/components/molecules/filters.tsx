import { Icon } from "@iconify/react";
import CategoryButton from "../atoms/categoryButton";
import Switch from "../atoms/switch";

interface FiltersProps {
  selectedCategory: string;
  onCategoryClick: (category: string) => void;
  onlyPrivate: boolean;
  onPrivacyToggle: () => void;
}

export default function Filters({ selectedCategory, onCategoryClick, onlyPrivate, onPrivacyToggle }: FiltersProps) {
  const categories = ["Cultura", "Entretenimiento", "Turismo"];

  return (
    <div className="w-full flex justify-between text-Blue p-4">
      <h1 className="text-2xl font-semibold w-[30%]">Filtros</h1>
      <div className="mt-12 w-[70%] space-y-12 text-xl">
        <div className="flex justify-between">
          <p className="font-semibold">Grupo privado</p>
          <Switch isChecked={onlyPrivate} toggle={onPrivacyToggle} />
        </div>
        <div className="space-y-2">
          <div className="flex justify-between">
            <p>Categoría</p>
            <Icon icon="mdi:chevron-up-down" />
          </div>
          <div className="flex flex-col w-full gap-1">
            {categories.map((cat) => (
              <CategoryButton
                key={cat}
                text={cat}
                selected={selectedCategory === cat}
                onClick={() => onCategoryClick(cat)}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
