import { Icon } from "@iconify/react";

interface ButtonProps {
  text?: string;
  icon?: string;
  color: string;
  widthIcon?: string;
  heightIcon?: string;
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
  heightIcon,
  className,
  onClick,
}: ButtonProps) => {

  const colorClass =
    color === "blue"
      ? "bg-white text-altBlue hover:text-white hover:bg-altBlue border-darkGray hover:border-altBlue rounded-lg p-2 px-4 font-semibold"
      : color === "blue2"
      ? "bg-white text-Blue hover:text-white hover:bg-Blue border-transparent rounded-lg p-2 px-4 gap-2 font-semibold text-base"
      : color === "orange"
      ? "bg-Orange text-white hover:bg-orange-300 shadow-xl border-transparent rounded-lg p-2 px-4 font-semibold"
      : color === "orangeIcon"
      ? "bg-white text-Orange hover:bg-Orange hover:text-white border-transparent rounded-lg p-2 px-10 font-semibold"
      : color === "orangeReverse"
      ? "bg-white text-Orange hover:bg-Orange hover:text-white border-transparent rounded-lg p-2 gap-4"
      : color === "emerald"
      ? "bg-Emerald text-darkBlue hover:text-Emerald hover:bg-darkBlue border-transparent rounded-lg p-2 px-4 font-semibold"
      : color === "emeraldIcon"
      ? "bg-Emerald text-darkBlue hover:text-Emerald hover:bg-darkBlue border-transparent rounded-lg p-2 px-10 font-semibold"
      : color === "roundedEmerald"
      ? "bg-Emerald text-darkBlue hover:text-Emerald hover:bg-darkBlue border-transparent p-2 rounded-full font-semibold"
      : color === "gray"
      ? "bg-gray text-black hover:text-gray-800 hover:bg-gray-300 border-transparent rounded-lg p-2 px-4 font-semibold"
      : "";


  return (
    <button onClick={onClick} className={`${className} ${colorClass} flex justify-center items-center border-2 hover:cursor-pointer`}>
      {icon && iconPosition !== "right" && (
        <Icon icon={icon} width={widthIcon} height={heightIcon}/>
      )}
      <span>{text}</span>
      {icon && iconPosition === "right" && (
        <Icon icon={icon} width={widthIcon} />
      )}
    </button>
  );
};

export default Button;
