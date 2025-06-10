import AuthorCard from "@/components/atoms/authorCard"
import GroupDataItems from "@/components/atoms/groupDataItems"
import GroupDescription from "@/components/atoms/groupDescription"
import GroupBasicInfo from "@/components/molecules/groupBasicInfo"

interface GroupInfoProps {
    image: string;
    members: number;
    groupName: string;
    isPrivate: boolean;
    topic: string;
    author: string;
    date: string;
}

export default function GroupInfo ({ image, members, groupName, isPrivate, topic, author, date }: GroupInfoProps) {
    return (
        <div className="bg-white rounded-2xl flex flex-col justify-center items-center gap-4 p-4 w-full border-2 border-altGray relative">
            <GroupBasicInfo image={image}
            members={members}
            groupName={groupName}
            isPrivate={isPrivate}></GroupBasicInfo>
            <GroupDataItems></GroupDataItems>
            <GroupDescription topic={topic}></GroupDescription>
            <AuthorCard name={author} date={date}></AuthorCard>
        </div>
    )
}