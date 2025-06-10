import Button from "./button";

interface AuthorCardProps {
    name: string;
    date: string;
}

const AuthorCard = ({ name, date }: AuthorCardProps) => {
    return (
        <div className="border-1 border-altGray rounded-3xl w-full">
            <div className="bg-Gray2 m-3 rounded-2xl p-2 flex flex-row gap-6 items-center">
                <Button icon="mdi:person-outline" color="roundedEmerald" widthIcon="48"></Button>
                <div className="text-darkBlue flex flex-col gap-2">
                    <p className="font-semibold text-xl">{name}</p>
                    <p className="text-lg">{date}</p>
                </div>
            </div>
        </div>
    )
}

export default AuthorCard;