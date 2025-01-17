import { Suspense } from "react";
import PlayerDataTable from "../ui/table";
import { PlayersTableSkeleton } from "../ui/skeletons";
import teamData from "../teams/_data/teams.json";

export default async function Page({
  searchParams,
}: {
  searchParams: Promise<{
    team: string;
  }>;
}) {
  const params = await searchParams;
  const teamValue = params.team || "Default Team";
  const team = teamData.teams.find((t) => t.title === teamValue);
  const teamImage = team?.cover;

  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <div className="text-image-container flex justify-between items-center w-full">
          <div className="text-container flex flex-col justify-center items-center flex-grow">
            <div className="text-3xl font-bold w-full">
              <p className="text-center">{teamValue}</p>
            </div>
            <div className="w-full">
              <p className="text-center">Player Data</p>
            </div>
          </div>
          <div className="max-w-36 max-h-36 mb-6">
            <img src={teamImage} alt="Team Cover" className="object-contain" />
          </div>
        </div>

        <Suspense fallback={<PlayersTableSkeleton />}>
          <PlayerDataTable query={teamValue} type="all" />
        </Suspense>
      </main>
    </div>
  );
}
