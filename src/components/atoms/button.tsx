import { Icon } from "@iconify/react";

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
      ? "bg-white text-altBlue hover:text-white hover:bg-altBlue border-darkGray hover:border-altBlue rounded-lg p-2 px-4"
      : color === "orange"
      ? "bg-Orange text-white hover:bg-orange-300 shadow-xl border-transparent rounded-lg p-2 px-4"
      : color === "orangeIcon"
      ? "bg-white text-Orange hover:bg-Orange hover:text-white border-transparent rounded-lg p-2 px-10"
      : color === "emerald"
      ? "bg-Emerald text-darkBlue hover:text-Emerald hover:bg-darkBlue border-transparent rounded-lg p-2 px-4"
      : color === "emeraldIcon"
      ? "bg-Emerald text-darkBlue hover:text-Emerald hover:bg-darkBlue border-transparent rounded-lg p-2 px-10"
      : color === "roundedEmerald"
      ? "bg-Emerald text-darkBlue hover:text-Emerald hover:bg-darkBlue border-transparent rounded-full"
      : color === "gray"
      ? "bg-gray text-black hover:text-gray-800 hover:bg-gray-300 border-transparent rounded-lg p-2 px-4"
      : "";


  return (
    <button onClick={onClick} className={`${className} ${colorClass} font-semibold flex justify-center items-center border-2 hover:cursor-pointer`}>
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
