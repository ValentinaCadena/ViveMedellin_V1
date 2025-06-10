import CommentSection from "../molecules/commentSection";
import GroupCard from "../molecules/groupCard";
import ReactionBar from "../molecules/reactionBar";
import ReactionSection from "../molecules/reactionSection";

interface PublicationCardProps {
    groupImage: string;
    groupName: string;
    author: string;
    date: string;
    textPublication: React.ReactNode;
    commentAuthor: string;
    comment: string;
    onImageClick: () => void;
}

const PublicationCard = ({ groupImage, groupName, author, date, textPublication, commentAuthor, comment, onImageClick}: PublicationCardProps) => {
    return (
        <div className="bg-white border-2 w-full border-altGray shadow-lg space-y-4 p-4 px-6 pb-12 rounded-3xl">
            <GroupCard
                image={groupImage}
                title={groupName}
                text={`${author} - ${date}`}
                members={123}
                topic={"Tema no definido"}
                isPrivate={false}
                author={author}
                date={date}
                onImageClick={onImageClick} />
            <p className="text-2xl font-semibold text-darkBlue">{textPublication}</p>
            <ReactionSection></ReactionSection>
            <ReactionBar border="gray" color="orangeReverse" width="30" commentText="Comentar"></ReactionBar>
            <CommentSection author={commentAuthor} comment={comment}></CommentSection>
        </div>
    )
}

export default PublicationCard;