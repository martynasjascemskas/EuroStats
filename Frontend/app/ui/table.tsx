import { fetchPlayers, fetchPlayersByName } from "../lib/data";
import { Player } from "../lib/definitions";

export default async function PlayerDataTable({
  query,
  type,
  players,
}: {
  query: string;
  type: "all" | "byName";
  players?: string;
}) {
  const data =
    type === "byName"
      ? await fetchPlayersByName(query)
      : await fetchPlayers(query);

  return (
    <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
      <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
        {data.length > 0 && (
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="px-6 py-3">
                Player
              </th>
              <th scope="col" className="px-6 py-3">
                GP
              </th>
              <th scope="col" className="px-6 py-3">
                GS
              </th>
              <th scope="col" className="px-6 py-3">
                Min
              </th>
              <th scope="col" className="px-6 py-3">
                PTS
              </th>
              <th scope="col" className="px-6 py-3">
                2P%
              </th>
              <th scope="col" className="px-6 py-3">
                3P%
              </th>
              <th scope="col" className="px-6 py-3">
                FT%
              </th>
              <th scope="col" className="px-6 py-3">
                OR
              </th>
              <th scope="col" className="px-6 py-3">
                DR
              </th>
              <th scope="col" className="px-6 py-3">
                TR
              </th>
              <th scope="col" className="px-6 py-3">
                AST
              </th>
              <th scope="col" className="px-6 py-3">
                STL
              </th>
              <th scope="col" className="px-6 py-3">
                TO
              </th>
              <th scope="col" className="px-6 py-3">
                BLK
              </th>
              <th scope="col" className="px-6 py-3">
                BLKA
              </th>
              <th scope="col" className="px-6 py-3">
                FC
              </th>
              <th scope="col" className="px-6 py-3">
                FD
              </th>
              <th scope="col" className="px-6 py-3">
                PIR
              </th>
              {type === "byName" && (
                <th scope="col" className="px-6 py-4">
                  Team Name
                </th>
              )}
            </tr>
          </thead>
        )}
        <tbody>
          {data.slice(0, players).map((player: Player, index: number) => (
            <tr
              key={index}
              className="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700"
            >
              <th
                scope="row"
                className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
              >
                {player.name}
              </th>
              <td className="px-6 py-4">{player.games_played}</td>
              <td className="px-6 py-4">{player.games_started}</td>
              <td className="px-6 py-4">{player.minutes_played}</td>
              <td className="px-6 py-4">{player.points}</td>
              <td className="px-6 py-4">{player.two_point_percentage}</td>
              <td className="px-6 py-4">{player.three_point_percentage}</td>
              <td className="px-6 py-4">{player.free_throw_percentage}</td>
              <td className="px-6 py-4">{player.offensive_rebounds}</td>
              <td className="px-6 py-4">{player.defensive_rebounds}</td>
              <td className="px-6 py-4">{player.total_rebounds}</td>
              <td className="px-6 py-4">{player.assists}</td>
              <td className="px-6 py-4">{player.steals}</td>
              <td className="px-6 py-4">{player.turnover}</td>
              <td className="px-6 py-4">{player.blocks}</td>
              <td className="px-6 py-4">{player.blocks_against}</td>
              <td className="px-6 py-4">{player.fouls_commited}</td>
              <td className="px-6 py-4">{player.fouls_received}</td>
              <td className="px-6 py-4">{player.performance_index_rating}</td>
              {type === "byName" && (
                <td className="px-6 py-4">{player.team_name}</td>
              )}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
