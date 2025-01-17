import { Suspense } from "react";
import Search from "../ui/search";
import PlayerDataTable from "../ui/table";
import { PlayersTableSkeleton } from "../ui/skeletons";
import LoadMoreButton from "../ui/loadmorebutton";

export default async function Page(props: {
  searchParams?: Promise<{
    query?: string;
    players?: string;
  }>;
}) {
  const searchParams = await props.searchParams;
  const query = searchParams?.query || ";";
  const players = searchParams?.players || "5";

  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <div className="font-semibold">
          Search for your player or enter substring of a players&apos; name.
        </div>
        <Search placeholder="Search players..." />
        {query != ";" && (
          <Suspense fallback={<PlayersTableSkeleton />}>
            <PlayerDataTable query={query} type="byName" players={players} />
          </Suspense>
        )}
        <LoadMoreButton players={players} />
      </main>
    </div>
  );
}
