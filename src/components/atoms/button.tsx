import { Icon } from "@iconify/react/dist/iconify.js";

interface ButtonProps {
  text?: string;
  icon?: string;
  color: string;
  widthIcon?: string;
  iconPosition?: "left" | "right";
  className?: string;
  onClick?: () => void;
}

const Button = ({
  text,
  icon,
  iconPosition,
  color,
  widthIcon,
  className,
  onClick,
}: ButtonProps) => {

  const colorClass =
    color === "blue"
      ? "bg-white text-altBlue hover:text-white hover:bg-altBlue border-darkGray"
      : color === "orange"
      ? "bg-Orange text-white hover:text-Orange hover:bg-white shadow-xl border-transparent hover:border-gray-300"
      : color === "emerald"
      ? "bg-Emerald text-darkBlue hover:text-Emerald hover:bg-darkBlue border-transparent"
      : color === "gray"
      ? "bg-gray text-black hover:text-gray-800 hover:bg-gray-300"
      : "";


  return (
    <button onClick={onClick} className={`${className} ${colorClass} rounded-xl flex justify-center items-center border-2 p-2 gap-2 px-4 hover:cursor-pointer`}>
      {icon && iconPosition !== "right" && (
        <Icon icon={icon} width={widthIcon}/>
      )}
      <span>{text}</span>
      {icon && iconPosition === "right" && (
        <Icon icon={icon} width={widthIcon} />
      )}
    </button>
  );
};

export default Button;
