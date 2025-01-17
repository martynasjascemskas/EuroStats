"use client";

import { SetStateAction, useEffect, useState } from "react";
import teamData from "./_data/teams.json";
import { TeamData } from "../lib/definitions";
import Link from "next/link";

export default function Page() {
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredTeams, setFilteredTeams] = useState(teamData.teams);

  useEffect(() => {
    setFilteredTeams(
      teamData.teams.filter((team) =>
        team.title.toLowerCase().includes(searchQuery.toLowerCase())
      )
    );
  }, [searchQuery]);

  const handleSearch = (e: { target: { value: SetStateAction<string> } }) => {
    setSearchQuery(e.target.value);
  };

  return (
    <div className="min-h-screen p-8 pb-20 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <div className="w-full flex justify-center">
          <div className="w-full max-w-md">
            <input
              type="text"
              placeholder="Search for teams..."
              value={searchQuery}
              onChange={handleSearch}
              className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-800"
            />
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full">
          {filteredTeams.map((team: TeamData, index: number) => (
            <div
              key={index}
              className="bg-gray-800 shadow-md rounded-lg overflow-hidden"
            >
              <img
                src={team.cover}
                alt="teams"
                className="w-full h-52 object-contain"
              />
              <div className="p-4 text-center">
                <p className="text-lg font-semibold">{team.title}</p>
                <Link
                  className="text-blue-500 hover:underline mt-2 inline-block"
                  href={`/data?team=${encodeURIComponent(team.title)}`}
                >
                  View Team
                </Link>
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}
