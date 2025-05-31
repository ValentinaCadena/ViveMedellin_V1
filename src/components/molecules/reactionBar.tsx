import Button from "../atoms/button";

interface ReactionBarProps {
    border?: string;
    color: string;
    width?: string;
    commentText: string;
}

const ReactionBar = ({ border, color, width, commentText }: ReactionBarProps) => {
    const borderClass =
    border === "gray"
    ? "border-y-2 border-altGray"
    : "";
    return (
        <div className={`flex flex-row justify-evenly items-center w-full ${borderClass}`}>
            <Button icon="mdi:like-outline" text="Me gusta" iconPosition="left" color={color} widthIcon={width}></Button>
            <Button icon="mdi:dislike-outline" text="No me gusta" iconPosition="left" color={color} widthIcon={width}></Button>
            <Button icon="mdi:comment-outline" text={commentText} iconPosition="left" color={color} widthIcon={width}></Button>
        </div>
    )
}

export default ReactionBar;