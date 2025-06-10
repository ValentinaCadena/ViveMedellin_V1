import Button from "../atoms/button";

export default function ReactionSection () {
    return (
        <div className="flex flex-row w-full justify-between items-center text-xl text-darkBlue">
            <div className="flex flex-row items-center gap-12">
                <div className="flex items-center gap-4">
                    <Button icon="mdi:like-outline" widthIcon="30" color="roundedEmerald"></Button>
                    <p>10</p>
                </div>
                <div className="flex items-center gap-4">
                    <Button icon="mdi:dislike-outline" widthIcon="30" color="roundedEmerald"></Button>
                    <p>8</p>
                </div>
            </div>
            <div className="flex gap-4">
                <p>15</p>
                <p>Comentarios</p>
            </div>
        </div>
    )
}