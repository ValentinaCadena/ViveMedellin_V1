import { useState } from "react";
import CommentSection from "../molecules/commentSection";
import GroupCard from "../molecules/groupCard";
import ReactionBar from "../molecules/reactionBar";
import ReactionSection from "../molecules/reactionSection";
import GroupInfo from "./groupInfo";

// 👇 Coloca esto arriba del componente, fuera de PublicationCard.tsx
export interface GroupInfoProps {
  image: string;
  members: number;
  groupName: string;
  isPrivate: boolean;
  topic: string;
  author: string;
  date: string;
}


interface PublicationCardProps {
    groupImage: string;
    groupName: string;
    author: string;
    date: string;
    textPublication: React.ReactNode;
    commentAuthor: string;
    comment: string;
}

const PublicationCard = ({ groupImage, groupName, author, date, textPublication, commentAuthor, comment}: PublicationCardProps) => {

    const [selectedGroup, setSelectedGroup] = useState<GroupInfoProps | null>(null);

    if (selectedGroup) {
      return (
        <div className="p-8 w-full space-y-6 h-201">
          <GroupInfo
            image={selectedGroup.image}
            members={selectedGroup.members}
            groupName={selectedGroup.groupName}
            isPrivate={selectedGroup.isPrivate}
            topic={selectedGroup.topic}
            author={selectedGroup.author}
            date={selectedGroup.date}
          />
        </div>
      );
    }
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
                onImageClick={() => setSelectedGroup({
                    image: groupImage,
                    members: 123,
                    groupName,
                    isPrivate: false,
                    topic: "Tema no definido",
                    author,
                    date,
                    })} />
            <p className="text-2xl font-semibold text-darkBlue">{textPublication}</p>
            <ReactionSection></ReactionSection>
            <ReactionBar border="gray" color="orangeReverse" width="30" commentText="Comentar"></ReactionBar>
            <CommentSection author={commentAuthor} comment={comment}></CommentSection>
        </div>
    )
}

export default PublicationCard;