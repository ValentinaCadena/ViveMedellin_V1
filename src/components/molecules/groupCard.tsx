import Button from "../atoms/button";

interface GroupCardProps {
    image?: string;
    title: string;
    activity?: string;
    text?: string;
    text2?:string;
    button?: string;
    variant?: string;
    onImageClick?: (info: GroupInfoProps) => void;
    members?: number;
    topic?: string;
    isPrivate?: boolean;
    author?: string;
    date?: string;
}

interface GroupInfoProps {
  image: string;
  members: number;
  groupName: string;
  isPrivate: boolean;
  topic: string;
  author: string;
  date: string;
}

const GroupCard = ({ image, title, activity, text, text2, button, variant, onImageClick, members, topic, isPrivate, author, date }: GroupCardProps) => {
const cardClass =
    variant === "search"
    ? "shadow-xl border-2 border-altGray"
    : "";

    return (
        <div className={`flex flex-row bg-Gray2 gap-8 ${cardClass} w-full rounded-2xl p-4`}>
            <div className="flex flex-row gap-8 w-full">
                {image && (<img src={image} alt={title} width={85}  className="rounded-xl hover:cursor-pointer" onClick={() => onImageClick?.({
                image,
                members: members ?? 0,
                groupName: title,
                isPrivate: isPrivate ?? false,
                topic: topic ?? "",
                author: author ?? "",
                date: date ?? "",
            })}/>)}
                <div className="flex flex-col justify-evenly items-start text-darkBlue">
                    <h1 className="font-bold text-xl">{title}</h1>
                    <p className="text-lg">{text}</p>
                    <p className="text-lg">{text2}</p>
                    <p className="text-lg">{activity}</p>
                </div>
            </div>
            {button && (
            <Button color="orange" text={button} className="my-4"/>
)}

        </div>
    )
}

export default GroupCard;