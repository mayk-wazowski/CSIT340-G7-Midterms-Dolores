import Navbar from "./Navbar";
import Profile from "./Profile";
import RepoCard from "./RepoCard";
import Footer from "./Footer";

function App() {
  return (
    <div className="flex min-h-screen flex-col bg-[#FAF3E1] text-[#222222]">
      <Navbar />

      <Profile />

      <main className="grid grid-cols-3 gap-8 px-20 pt-8">
        <RepoCard
          name="portfolio"
          description="My personal page built with React."
          language="JavaScript"
          commits={48}
        />
        <RepoCard
          name="todo-api"
          description="A small REST API for a to-do list."
          language="Java"
          commits={31}
        />
        <RepoCard
          name="dotfiles"
          description="My terminal and editor settings."
          language="Shell"
          commits={12}
        />
      </main>

      <Footer />
    </div>
  );
}

export default App;