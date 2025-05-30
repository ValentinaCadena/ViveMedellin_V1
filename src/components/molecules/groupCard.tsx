interface GroupCardProps {
    image: string;
    group: string;
    activity: string;
}

const GroupCard = ({ image, group, activity}: GroupCardProps) => {
    return (
        <div className="flex flex-row bg-gray-200 gap-8 max-w-100 rounded-2xl p-4">
            <img src={image} alt={group} width={85} className="rounded-xl"/>
            <div className="flex flex-col justify-evenly items-start text-Blue">
                <h1 className="font-bold text-xl">{group}</h1>
                <p className="text-lg">{activity}</p>
            </div>
        </div>
    )
}

export default GroupCard;