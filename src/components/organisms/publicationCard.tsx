import CommentSection from "../molecules/commentSection";
import GroupCard from "../molecules/groupCard";
import ReactionBar from "../molecules/reactionBar";
import ReactionSection from "../molecules/reactionSection";

interface PublicationCardProps {
    groupImage: string;
    groupName: string;
    author_date: string;
    textPublication: React.ReactNode;
    commentAuthor: string;
    comment: string;
}

const PublicationCard = ({ groupImage, groupName, author_date, textPublication, commentAuthor, comment}: PublicationCardProps) => {
    return (
        <div className="bg-white border-2 w-full border-altGray shadow-lg space-y-4 p-4 px-6 pb-12 rounded-3xl">
            <GroupCard image={groupImage} title={groupName} text={author_date}></GroupCard>
            <p className="text-2xl font-semibold text-Blue">{textPublication}</p>
            <ReactionSection></ReactionSection>
            <ReactionBar border="gray" color="orangeReverse" width="30" commentText="Comentar"></ReactionBar>
            <CommentSection author={commentAuthor} comment={comment}></CommentSection>
        </div>
    )
}

export default PublicationCard;