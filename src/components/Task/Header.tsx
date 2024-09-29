import { Rocket } from "lucide-react";

export default function Header() {
  return (
    <header className="flex justify-center items-center gap-2">
      <Rocket className="text-blue-400" size={24} />
      <h1 className="text-3xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 text-transparent bg-clip-text">
        Task App
      </h1>
    </header>
  );
}
