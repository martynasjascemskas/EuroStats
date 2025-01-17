//All data types go here

export type Player = {
  name: string;
  num_in_team: number;
  games_played: number;
  games_started: number;
  minutes_played: string;
  points: number;
  two_point_percentage: string;
  three_point_percentage: string;
  free_throw_percentage: string;
  offensive_rebounds: number;
  defensive_rebounds: number;
  total_rebounds: number;
  assists: number;
  steals: number;
  turnover: number;
  blocks: number;
  blocks_against: number;
  fouls_commited: number;
  fouls_received: number;
  performance_index_rating: number;
  team_name: string;
};
export type TeamData = {
  cover: string;
  title: string;
};

export type Team = {
  points: number;
  two_point_percentage: string;
  three_point_percentage: string;
  free_throw_percentage: string;
  offensive_rebounds: number;
  defensive_rebounds: number;
  total_rebounds: number;
  assists: number;
  steals: number;
  turnovers: number;
  blocks: number;
  blocks_against: number;
  fouls_commited: number;
  fouls_received: number;
  performance_index_rating: number;
};
