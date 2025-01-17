"use client";

import { usePathname, useRouter, useSearchParams } from "next/navigation";

export default function LoadMoreButton({ players }: { players: string }) {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();
  const handleClick = () => {
    const params = new URLSearchParams(searchParams);
    const current = parseInt(players);
    const newPlayerValue = current + 5;
    params.set("players", newPlayerValue.toString());
    replace(`${pathname}?${params.toString()}`);
  };

  return (
    <div>
      <button
        onClick={handleClick}
        className="px-4 py-2 bg-blue-500 text-white rounded"
      >
        Load More
      </button>
    </div>
  );
}
