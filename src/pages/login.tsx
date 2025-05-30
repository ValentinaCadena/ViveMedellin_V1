import LoginBottom from "@/components/molecules/loginBottom";
import LoginTop from "@/components/molecules/loginTop";

export default function Login() {
  return (
    <div className="flex flex-col h-screen gap-12 justify-center items-center">
      <LoginTop />
      <LoginBottom />
    </div>
  );
}
