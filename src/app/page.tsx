import MainContent from "./components/MainContent";
import Sidebar from "./components/Sidebar";
import "./globals.css"

export default function Home() {
  return (
    <main className="mainApp">
      <div className="flex gap-2">
        <Sidebar />
        <MainContent />
      </div>
    </main>
  );
}
