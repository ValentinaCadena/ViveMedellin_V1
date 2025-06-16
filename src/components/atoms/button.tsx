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
      ? "bg-white text-altBlue hover:text-white hover:bg-altBlue border-darkGray hover:border-altBlue rounded-lg p-2 px-4 gap-4 font-semibold  justify-center"
      : color === "blue2"
      ? "bg-white text-darkBlue hover:text-white hover:bg-darkBlue border-transparent rounded-lg p-2 px-4 gap-2 font-semibold text-base  justify-center"
      : color === "blue3"
      ? "bg-white text-darkBlue hover:text-white hover:bg-darkBlue border-altGray  rounded-lg p-2 gap-2 justify-start"
      : color === "roundedBlue"
      ? "bg-white text-darkBlue hover:text-white hover:bg-darkBlue border-transparent rounded-full font-semibold text-base  justify-center"
      : color === "orange"
      ? "bg-Orange text-white hover:bg-orange-300 shadow-xl border-transparent rounded-lg p-2 px-4 font-semibold  justify-center"
      : color === "orangeIcon"
      ? "bg-white text-Orange hover:bg-Orange hover:text-white border-transparent rounded-lg p-2 px-10 font-semibold  justify-center"
      : color === "orangeReverse"
      ? "bg-white text-Orange hover:bg-Orange hover:text-white border-transparent rounded-lg p-2 gap-4  justify-center"
      : color === "emerald"
      ? "bg-Emerald text-darkBlue hover:text-Emerald hover:bg-darkBlue border-transparent rounded-lg p-2 px-4 font-semibold  justify-center"
      : color === "emeraldIcon"
      ? "bg-Emerald text-darkBlue hover:text-Emerald hover:bg-darkBlue border-transparent rounded-lg p-2 px-10 font-semibold  justify-center"
      : color === "roundedEmerald"
      ? "bg-Emerald text-darkBlue hover:text-Emerald hover:bg-darkBlue border-transparent p-2 rounded-full font-semibold  justify-center"
      : color === "gray"
      ? "bg-Gray2 text-black hover:text-gray-800 hover:bg-gray-300 border-transparent rounded-lg p-2 px-4 font-semibold  justify-center"
      : "";


  return (
    <button onClick={onClick} className={`${className} ${colorClass} flex items-center border-2 hover:cursor-pointer`}>
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
