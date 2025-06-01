interface GroupCardProps {
    image?: string;
    title: string;
    text: string;
}

const GroupCard = ({ image, title, text}: GroupCardProps) => {
    return (
        <div className="flex flex-row bg-Gray2 gap-8 w-full rounded-2xl p-4">
            {image && (<img src={image} alt={title} width={85}  className="rounded-xl"/>)}
            <div className="flex flex-col justify-evenly items-start text-Blue">
                <h1 className="font-bold text-xl">{title}</h1>
                <p className="text-lg">{text}</p>
            </div>
        </div>
    )
}

export default GroupCard;