import Button from "../atoms/button";

export default function Header () {
    return (
        <div className="flex flex-row justify-center mt-4 gap-8 relative pb-8 border-b-2 border-[#d9d9d9]">
            <img src="/logos/logoVM.png" alt="VivaMedellín" width={181} className="top-0 left-2 absolute"/>
            <Button icon="mdi:home-outline" color="emerald" widthIcon="55"></Button>
            <Button icon="mdi:calendar-month-outline" color="emerald" widthIcon="55"></Button>
            <Button icon="mdi:map-outline" color="emerald" widthIcon="55"></Button>
            <Button icon="material-symbols:groups" color="emerald" widthIcon="55"></Button>
            <Button icon="mdi:bell-outline" color="emerald" widthIcon="55"></Button>
            <Button text="Username" icon="mdi:person-outline" iconPosition="right" color="emerald" widthIcon="55" className="right-4 absolute"></Button>

        </div>
    )
}