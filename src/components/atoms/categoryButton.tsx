interface CategoryButtonProps {
  text: string;
  selected: boolean;
  onClick: () => void;
}

const CategoryButton = ({ text, selected, onClick }: CategoryButtonProps) => {
  return (
    <button
      onClick={onClick}
      className={`border p-2 w-full text-start text-lg hover:cursor-pointer rounded-lg transition-colors duration-200 ${
        selected
          ? "bg-Blue text-white border-Blue"
          : "border-gray-200 hover:bg-Blue hover:text-white"
      }`}
    >
      {text}
    </button>
  );
};

export default CategoryButton;
