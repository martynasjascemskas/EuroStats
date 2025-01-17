//All data fetches go here

export async function fetchPlayers(query: string) {
  try {
    //await new Promise((resolve) => setTimeout(resolve, 3000));
    const response = await fetch(
      `http://localhost:8080/api/v1/player?teamName=${query}`
    );
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Database Error:", error);
    throw new Error("Failed to fetch player data.");
  }
}
export async function fetchPlayersByName(query: string) {
  try {
    //await new Promise((resolve) => setTimeout(resolve, 3000));
    const response = await fetch(
      `http://localhost:8080/api/v1/player?name=${query}`
    );
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Database error", error);
    throw new Error("Failed to fetch player data.");
  }
}
