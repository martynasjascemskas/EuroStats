package com.eurostats.eurostats.player;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name = "player_statistic")
public class Player {
    @Id
    @Column(name = "id", unique = true)
    private Integer id;
    @Column(name = "player_name")
    private String name;
    private Integer num_in_team;
    private Integer games_played;
    private Integer games_started;
    private String minutes_played;
    private Double points;
    private String two_point_percentage;
    private String three_point_percentage;
    private String free_throw_percentage;
    private Double offensive_rebounds;
    private Double defensive_rebounds;
    private Double total_rebounds;
    private Double assists;
    private Double steals;
    private Double turnover;
    private Double blocks;
    private Double blocks_against;
    private Double fouls_commited;
    private Double fouls_received;
    private Double performance_index_rating;
    private String team_name;

    public Player() {
    }

    public Player(String name, Integer num_in_team, Integer games_played, Integer games_started, String minutes_played, Double points, String two_point_percentage, String three_point_percentage, String free_throw_percentage, Double offensive_rebounds, Double defensive_rebounds, Double total_rebounds, Double assists, Double steals, Double turnover, Double blocks, Double blocks_against, Double fouls_commited, Double fouls_received, Double performance_index_rating, String team_name, Integer id) {
        this.name = name;
        this.num_in_team = num_in_team;
        this.games_played = games_played;
        this.games_started = games_started;
        this.minutes_played = minutes_played;
        this.points = points;
        this.two_point_percentage = two_point_percentage;
        this.three_point_percentage = three_point_percentage;
        this.free_throw_percentage = free_throw_percentage;
        this.offensive_rebounds = offensive_rebounds;
        this.defensive_rebounds = defensive_rebounds;
        this.total_rebounds = total_rebounds;
        this.assists = assists;
        this.steals = steals;
        this.turnover = turnover;
        this.blocks = blocks;
        this.blocks_against = blocks_against;
        this.fouls_commited = fouls_commited;
        this.fouls_received = fouls_received;
        this.performance_index_rating = performance_index_rating;
        this.team_name = team_name;
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public Integer getNum_in_team() {
        return num_in_team;
    }

    public void setNum_in_team(Integer num_in_team) {
        this.num_in_team = num_in_team;
    }

    public Integer getGames_played() {
        return games_played;
    }

    public void setGames_played(Integer games_played) {
        this.games_played = games_played;
    }

    public Integer getGames_started() {
        return games_started;
    }

    public void setGames_started(Integer games_started) {
        this.games_started = games_started;
    }

    public String getMinutes_played() {
        return minutes_played;
    }

    public void setMinutes_played(String minutes_played) {
        this.minutes_played = minutes_played;
    }

    public Double getPoints() {
        return points;
    }

    public void setPoints(Double points) {
        this.points = points;
    }

    public String getTwo_point_percentage() {
        return two_point_percentage;
    }

    public void setTwo_point_percentage(String two_point_percentage) {
        this.two_point_percentage = two_point_percentage;
    }

    public String getThree_point_percentage() {
        return three_point_percentage;
    }

    public void setThree_point_percentage(String three_point_percentage) {
        this.three_point_percentage = three_point_percentage;
    }

    public String getFree_throw_percentage() {
        return free_throw_percentage;
    }

    public void setFree_throw_percentage(String free_throw_percentage) {
        this.free_throw_percentage = free_throw_percentage;
    }

    public Double getOffensive_rebounds() {
        return offensive_rebounds;
    }

    public void setOffensive_rebounds(Double offensive_rebounds) {
        this.offensive_rebounds = offensive_rebounds;
    }

    public Double getDefensive_rebounds() {
        return defensive_rebounds;
    }

    public void setDefensive_rebounds(Double defensive_rebounds) {
        this.defensive_rebounds = defensive_rebounds;
    }

    public Double getTotal_rebounds() {
        return total_rebounds;
    }

    public void setTotal_rebounds(Double total_rebounds) {
        this.total_rebounds = total_rebounds;
    }

    public Double getAssists() {
        return assists;
    }

    public void setAssists(Double assists) {
        this.assists = assists;
    }

    public Double getSteals() {
        return steals;
    }

    public void setSteals(Double steals) {
        this.steals = steals;
    }

    public Double getTurnover() {
        return turnover;
    }

    public void setTurnover(Double turnover) {
        this.turnover = turnover;
    }

    public Double getBlocks() {
        return blocks;
    }

    public void setBlocks(Double blocks) {
        this.blocks = blocks;
    }

    public Double getBlocks_against() {
        return blocks_against;
    }

    public void setBlocks_against(Double blocks_against) {
        this.blocks_against = blocks_against;
    }

    public Double getFouls_commited() {
        return fouls_commited;
    }

    public void setFouls_commited(Double fouls_commited) {
        this.fouls_commited = fouls_commited;
    }

    public Double getFouls_received() {
        return fouls_received;
    }

    public void setFouls_received(Double fouls_received) {
        this.fouls_received = fouls_received;
    }

    public Double getPerformance_index_rating() {
        return performance_index_rating;
    }

    public void setPerformance_index_rating(Double performance_index_rating) {
        this.performance_index_rating = performance_index_rating;
    }

    public String getTeam_name() {
        return team_name;
    }

    public void setTeam_name(String team_name) {
        this.team_name = team_name;
    }

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }
}
