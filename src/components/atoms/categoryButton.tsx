interface CategoryButtonProps {
    text: string;
}

const CategoryButton = ({ text }: CategoryButtonProps) => {
    return (
        <button className="border-1 border-gray-200 p-2 w-full text-start text-lg hover:cursor-pointer hover:bg-Blue hover:text-white rounded-lg">{text}</button>
    )
}

export default CategoryButton;