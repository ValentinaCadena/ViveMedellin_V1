interface SwitchProps {
  isChecked: boolean;
  toggle: () => void;
}

export default function Switch({ isChecked, toggle }: SwitchProps) {
  return (
    <div
      onClick={toggle}
      className={`w-12 h-7 flex items-center rounded-full cursor-pointer p-1 transition-colors duration-300 ${
        isChecked ? "bg-Emerald" : "bg-gray-300"
      }`}
    >
      <div
        className={`w-5 h-5 bg-white rounded-full shadow-md transform transition-transform duration-300 ${
          isChecked ? "translate-x-5" : "translate-x-0"
        }`}
      ></div>
    </div>
  );
}
