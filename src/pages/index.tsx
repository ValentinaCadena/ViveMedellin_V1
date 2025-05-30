import Button from "@/components/atoms/button";
import { useRouter } from "next/router";

export default function Home () {
  const router = useRouter();
  return (
    <div className="flex flex-col gap-12 h-screen justify-center items-center">
      <img src="/logos/logoVM.png" alt="ViveMedellin" width={1000}/>
      <h1 className="text-9xl text-Orange font-bold">ViveMedellín</h1>
      <Button text="Ingresar a la plataforma" icon="material-symbols:groups" color="blue" className="text-5xl gap-8" widthIcon="96" onClick={() => router.push('/login')}></Button>
    </div>
  )
}