import Button from "../atoms/button";

interface HeaderProps {
    onLogoClick: () => void;
}

export default function Header ({ onLogoClick }: HeaderProps) {
    return (
        <div className="flex flex-row justify-center items-center h-full py-3 gap-8 relative border-b-2 border-Gray">
            <img src="/logos/logoVM.png" alt="VivaMedellín" width={181} className="top-1 left-8 absolute hover:cursor-pointer" onClick={onLogoClick}/>
            <Button icon="mdi:home-outline" color="orangeIcon" widthIcon="55"></Button>
            <Button icon="mdi:calendar-month-outline" color="orangeIcon" widthIcon="55"></Button>
            <Button icon="mdi:map-outline" color="orangeIcon" widthIcon="55"></Button>
            <Button icon="material-symbols:groups" color="emeraldIcon" widthIcon="55"></Button>
            <Button icon="mdi:bell-outline" color="orangeIcon" widthIcon="55"></Button>
            <div className="flex flex-row items-center gap-4 absolute right-8">
                <h1 className="text-2xl text-Blue font-semibold">Username</h1>
                <Button icon="mdi:person-outline" iconPosition="right" color="roundedEmerald" widthIcon="65"></Button>
            </div>

        </div>
    )
}