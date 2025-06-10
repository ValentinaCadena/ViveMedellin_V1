import AuthorCard from "@/components/atoms/authorCard"
import GroupDataItems from "@/components/atoms/groupDataItems"
import GroupDescription from "@/components/atoms/groupDescription"
import GroupBasicInfo from "@/components/molecules/groupBasicInfo"

export default function Testing () {
    return (
        <div className="bg-white rounded-2xl flex flex-col justify-center items-center gap-4 w-full border-2 border-altGray">
            <GroupBasicInfo image="https://static7.depositphotos.com/1005979/765/i/450/depositphotos_7653842-stock-photo-info-word-on-green-round.jpg"
            members={150}
            groupName="grupo info"
            isPrivate></GroupBasicInfo>
            <GroupDataItems></GroupDataItems>
            <GroupDescription topic="Entretenimiento"></GroupDescription>
            <AuthorCard name="Santiago" date="12/05/2025"></AuthorCard>
        </div>
    )
}