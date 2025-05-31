import GroupCard from "./groupCard";
import Button from "../atoms/button";
import ReactionBar from "./reactionBar";

interface CommentSectionProps {
    author: string;
    comment: string;
}

const CommentSection = ({ author, comment }: CommentSectionProps) => {
    return (
        <div className="flex flex-col items-center relative">
            <div className="relative flex flex-row w-150 pl-16">
                <Button icon="mdi:person-outline" color="roundedEmerald" widthIcon="30" className="top-0 left-0 absolute"></Button>
                <GroupCard title={author} text={comment}></GroupCard>
            </div>
            <div className="w-fit pl-14">
                <ReactionBar color="blue2" width="20" commentText="Responder"></ReactionBar>
            </div>
            <p className="text-Blue absolute bottom-2.5 left-17">15 h</p>
        </div>
    )
}

export default CommentSection;