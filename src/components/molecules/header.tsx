import Button from "../atoms/button";

export default function Header () {
    return (
        <div className="flex flex-row justify-center mt-5 gap-8 relative pb-5 border-b-2 border-Gray">
            <img src="/logos/logoVM.png" alt="VivaMedellín" width={181} className="top-0 left-8 absolute"/>
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