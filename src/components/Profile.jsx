import { useState } from "react";
import Bio from "./Bio";
import StatCard from "./StatCard";
import Controls from "./Controls";
import Hire from "./Hire";

function Profile() {
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
    <>
      <div className="flex items-end justify-between bg-[#F5E7C6] px-20 py-10">
        <div>
          <Bio name="MIKE JUNEIL DOLORES" username="@mayk-wazowski" />

          <div className="mt-6 flex gap-6">
            <StatCard value={followers} label="Followers" />
            <StatCard value={rate} label="PHP per hour" />
          </div>
        </div>

        <Controls
          onFollow={handleFollow}
          onAddRate={handleAddRate}
          onReset={handleReset}
        />
      </div>

      <Hire rate={rate} />
    </>
  );
}

export default Profile;