export function TableRowSkeleton() {
  return (
    <tr className="animate-pulse w-full border-b shimmer border-gray-700 last-of-type:border-none [&:last-child>td:first-child]:rounded-bl-lg [&:last-child>td:last-child]:rounded-br-lg">
      <td className="relative overflow-hidden whitespace-nowrap py-3 pl-6 pr-3">
        <div className="flex items-center gap-3">
          <div className="h-6 w-44 rounded bg-gray-600"></div>
        </div>
      </td>
      <td className="whitespace-nowrap px-3 py-3">
        <div className="h-6 w-12 rounded bg-gray-700"></div>
      </td>
      <td className="whitespace-nowrap px-3 py-3">
        <div className="h-6 w-12 rounded bg-gray-600"></div>
      </td>
      <td className="whitespace-nowrap px-3 py-3">
        <div className="h-6 w-12 rounded bg-gray-700"></div>
      </td>
      <td className="whitespace-nowrap px-3 py-3">
        <div className="h-6 w-12 rounded bg-gray-600"></div>
      </td>
      <td className="whitespace-nowrap px-4 py-3">
        <div className="h-6 w-12 rounded bg-gray-700"></div>
      </td>
      <td className="whitespace-nowrap px-4 py-3">
        <div className="h-6 w-12 rounded bg-gray-600"></div>
      </td>
      <td className="whitespace-nowrap px-4 py-3">
        <div className="h-6 w-12 rounded bg-gray-700"></div>
      </td>
      <td className="whitespace-nowrap px-3 py-3">
        <div className="h-6 w-12 rounded bg-gray-600"></div>
      </td>
      <td className="whitespace-nowrap px-3 py-3">
        <div className="h-6 w-12 rounded bg-gray-700"></div>
      </td>
      <td className="whitespace-nowrap px-3 py-3">
        <div className="h-6 w-12 rounded bg-gray-600"></div>
      </td>
      <td className="whitespace-nowrap px-3 py-3">
        <div className="h-6 w-12 rounded bg-gray-700"></div>
      </td>
      <td className="whitespace-nowrap px-3 py-3">
        <div className="h-6 w-12 rounded bg-gray-600"></div>
      </td>
      <td className="whitespace-nowrap px-3 py-3">
        <div className="h-6 w-12 rounded bg-gray-700"></div>
      </td>
      <td className="whitespace-nowrap px-3 py-3">
        <div className="h-6 w-12 rounded bg-gray-600"></div>
      </td>
      <td className="whitespace-nowrap px-3 py-3">
        <div className="h-6 w-12 rounded bg-gray-700"></div>
      </td>
      <td className="whitespace-nowrap px-3 py-3">
        <div className="h-6 w-12 rounded bg-gray-600"></div>
      </td>
      <td className="whitespace-nowrap px-3 py-3">
        <div className="h-6 w-12 rounded bg-gray-700"></div>
      </td>
      <td className="whitespace-nowrap px-4 py-3">
        <div className="h-6 w-12 rounded bg-gray-600"></div>
      </td>
    </tr>
  );
}
export function PlayersMobileSkeleton() {
  return (
    <div className="mb-2 w-full rounded-md bg-white p-4">
      <div className="flex items-center justify-between border-b border-gray-700 pb-8">
        <div className="flex items-center">
          <div className="mr-2 h-8 w-8 rounded-full bg-gray-700"></div>
          <div className="h-6 w-16 rounded bg-gray-700"></div>
        </div>
        <div className="h-6 w-16 rounded bg-gray-700"></div>
      </div>
      <div className="flex w-full items-center justify-between pt-4">
        <div>
          <div className="h-6 w-16 rounded bg-gray-700"></div>
          <div className="mt-2 h-6 w-24 rounded bg-gray-700"></div>
        </div>
        <div className="flex justify-end gap-2">
          <div className="h-10 w-10 rounded bg-gray-700"></div>
          <div className="h-10 w-10 rounded bg-gray-700"></div>
        </div>
      </div>
    </div>
  );
}
export function PlayersTableSkeleton() {
  return (
    <div className="mt-2 flow-root font-[family-name:var(--font-geist-sans)]">
      <div className="inline-block min-w-full align-middle">
        <div className="rounded-lg bg-gray-50 dark:bg-gray-700 md:pt-0">
          <div className="md:hidden">
            <PlayersMobileSkeleton />
            <PlayersMobileSkeleton />
            <PlayersMobileSkeleton />
            <PlayersMobileSkeleton />
            <PlayersMobileSkeleton />
            <PlayersMobileSkeleton />
          </div>
          <table className="hidden min-w-full text-gray-400 md:table uppercase">
            <thead className="rounded-lg text-left text-xs font-normal ">
              <tr>
                <th scope="col" className="px-4 py-3 font-medium sm:pl-6">
                  Player
                </th>
                <th scope="col" className="px-4 py-3 font-medium text-center">
                  GP
                </th>
                <th scope="col" className="px-4 py-3 font-medium text-center">
                  GS
                </th>
                <th scope="col" className="px-4 py-3 font-medium text-center">
                  MIN
                </th>
                <th scope="col" className="px-4 py-3 font-medium text-center">
                  PTS
                </th>
                <th scope="col" className="px-4 py-3 font-medium text-center">
                  2P%
                </th>
                <th scope="col" className="px-4 py-3 font-medium text-center">
                  3P%
                </th>
                <th scope="col" className="px-4 py-3 font-medium text-center">
                  FT%
                </th>
                <th scope="col" className="px-4 py-3 font-medium text-center">
                  OR
                </th>
                <th scope="col" className="px-4 py-3 font-medium text-center">
                  DR
                </th>
                <th scope="col" className="px-4 py-3 font-medium text-center">
                  TR
                </th>
                <th scope="col" className="px-4 py-3 font-medium text-center">
                  AST
                </th>
                <th scope="col" className="px-4 py-3 font-medium text-center">
                  STL
                </th>
                <th scope="col" className="px-4 py-3 font-medium text-center">
                  TO
                </th>
                <th scope="col" className="px-4 py-3 font-medium text-center">
                  BLK
                </th>
                <th scope="col" className="px-4 py-3 font-medium text-center">
                  BLKA
                </th>
                <th scope="col" className="px-4 py-3 font-medium text-center">
                  FC
                </th>
                <th scope="col" className="px-4 py-3 font-medium text-center">
                  FD
                </th>
                <th scope="col" className="px-4 py-3 font-medium text-center">
                  PIR
                </th>
              </tr>
            </thead>
            <tbody className="bg-gray-800">
              <TableRowSkeleton />
              <TableRowSkeleton />
              <TableRowSkeleton />
              <TableRowSkeleton />
              <TableRowSkeleton />
              <TableRowSkeleton />
              <TableRowSkeleton />
              <TableRowSkeleton />
              <TableRowSkeleton />
              <TableRowSkeleton />
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
