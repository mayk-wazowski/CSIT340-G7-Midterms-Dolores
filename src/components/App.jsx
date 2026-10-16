import { useState } from "react";
import Navbar from "./Navbar";
import Bio from "./Bio";
import StatCard from "./StatCard";
import RepoCard from "./RepoCard";

function App() {
  const [followers, setFollowers] = useState(0);
  const [rate, setRate] = useState(500);

  function handleFollow() {
    setFollowers(followers + 1);
  }

  function handleAddRate() {
    setRate(rate + 100);
  }

  function handleReset() {
    setFollowers(0);
    setRate(500);
  }

  return (
    <div className="flex min-h-screen flex-col bg-[#FAF3E1] text-[#222222]">
      <Navbar />

      <div className="flex items-end justify-between bg-[#F5E7C6] px-20 py-10">
        <div>
          <Bio />

          <div className="mt-6 flex gap-6">
            <StatCard value={followers} label="Followers" />
            <StatCard value={rate} label="PHP per hour" />
          </div>
        </div>

        <div className="flex gap-4">
          <button
            className="cursor-pointer rounded-lg bg-[#FA8112] px-8 py-3 text-xl font-bold text-[#222222]"
            onClick={handleFollow}
          >
            Follow
          </button>
          <button
            className="cursor-pointer rounded-lg bg-[#222222] px-8 py-3 text-xl font-bold text-[#FAF3E1]"
            onClick={handleAddRate}
          >
            Add rate
          </button>
          <button
            className="cursor-pointer rounded-lg border-2 border-[#222222] px-8 py-3 text-xl font-bold"
            onClick={handleReset}
          >
            Reset
          </button>
        </div>
      </div>

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

      <footer className="mt-auto bg-[#222222] px-20 py-6 text-center text-xl text-[#FAF3E1]">
        <p>Every profile on DevHub is public.</p>
      </footer>
    </div>
  );
}

export default App;