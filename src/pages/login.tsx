import LoginBottom from "@/components/molecules/loginBottom";
import LoginHeader from "@/components/molecules/loginHeader";

export default function Login() {
  return (
    <div className="flex flex-col h-screen gap-12 justify-center items-center">
      <LoginHeader />
      <LoginBottom />
    </div>
  );
}
