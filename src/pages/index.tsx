import Button from "@/components/atoms/button";

export default function Home () {
  return (
    <div className="flex h-screen flex-col gap-20 justify-center items-center">
      <Button text="Iniciar sesión con Google" icon="devicon:google"  iconPosition="left" color="orange" widthIcon="24" className="space-x-2 px-2 font-semibold"></Button>
      <Button text="Iniciar sesión con Google" icon="devicon:google"  iconPosition="left" color="emerald" widthIcon="24" className="font-semibold"></Button>
    </div>
  )
}