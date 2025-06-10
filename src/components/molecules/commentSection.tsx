import GroupCard from "./groupCard";
import Button from "../atoms/button";
import ReactionBar from "./reactionBar";

interface CommentSectionProps {
    author: string;
    comment: string;
}

const CommentSection = ({ author, comment }: CommentSectionProps) => {
    return (
        <div className="flex flex-row items-start gap-4 relative">
            <Button icon="mdi:person-outline" color="roundedEmerald" widthIcon="30"></Button>
            <div className=" fle flex-col w-full ">
                <GroupCard title={author} text={comment}></GroupCard>
                <ReactionBar color="blue2" width="20" commentText="Responder"></ReactionBar>
            </div>
            <p className="text-darkBlue left-18 bottom-2.5 absolute">15 h</p>

        </div>
    )
}

export default CommentSection;