import Button from "../atoms/button";

interface GroupCardProps {
    image?: string;
    title: string;
    text: string;
    text2?:string;
    button?: string;
    variant?: string;
}

const GroupCard = ({ image, title, text, text2, button, variant }: GroupCardProps) => {
const cardClass =
    variant === "search"
    ? "shadow-xl border-2 border-altGray"
    : "";

    return (
        <div className={`flex flex-row bg-Gray2 gap-8 ${cardClass} w-full rounded-2xl p-4`}>
            <div className="flex flex-row gap-8 w-full">
                {image && (<img src={image} alt={title} width={85}  className="rounded-xl"/>)}
                <div className="flex flex-col justify-evenly items-start text-Blue">
                    <h1 className="font-bold text-xl">{title}</h1>
                    <p className="text-lg">{text}</p>
                    <p className="text-lg">{text2}</p>
                </div>
            </div>
            {button && (
            <Button color="orange" text={button} className="my-4"/>
)}

        </div>
    )
}

export default GroupCard;