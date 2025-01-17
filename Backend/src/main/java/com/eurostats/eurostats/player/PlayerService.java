package com.eurostats.eurostats.player;

import jakarta.transaction.Transactional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

@Component
public class PlayerService {
    private final PlayerRepository playerRepository;

    @Autowired
    public PlayerService(PlayerRepository playerRepository) {
        this.playerRepository = playerRepository;
    }

    public List<Player> getPlayers() {
        return playerRepository.findAll();
    }

    public List<Player> getPlayersFromTeam(String teamName) {
        return playerRepository.findAll().stream()
                .filter(player -> teamName.equalsIgnoreCase(player.getTeam_name()))
                .filter(player -> !player.getName().toLowerCase().contains(teamName.toLowerCase()))
                .collect(Collectors.toList());
    }

    public List<Player> getPlayersByName(String searchText) {
        return playerRepository.findAll().stream()
                .filter(player -> player.getName().toLowerCase().contains(searchText.toLowerCase()))
                .filter(player -> !player.getName().toLowerCase().contains(player.getTeam_name().toLowerCase()))
                .collect(Collectors.toList());
    }

    //TODO: Change CSV file to contain player position (1-5 or position name) and change this.
    public List<Player> getPlayersByMinutesPlayed(String searchText) {
        return playerRepository.findAll().stream()
                .filter(player -> player.getMinutes_played().toLowerCase().contains(searchText.toLowerCase()))
                .collect(Collectors.toList());
    }

    //TODO: Change CSV file to contain player position (1-5 or position name) and change this.
    public List<Player> getPlayersByTeamAndPoints(String team, String points) {
        return playerRepository.findAll().stream()
                .filter(player -> team.equals(player.getTeam_name()) && points.equals(String.valueOf(player.getPoints())))
                .collect(Collectors.toList());
    }

    public Player addPlayer(Player player) {
        playerRepository.save(player);
        return player;
    }

    public Player updatePlayer(Player updatedPlayer) {
        Optional<Player> existingPlayer = playerRepository.findByName(updatedPlayer.getName());

        if (existingPlayer.isPresent()) {
            Player playerToUpdate = existingPlayer.get();
            playerToUpdate.setName(updatedPlayer.getName());
            playerToUpdate.setTeam_name(updatedPlayer.getTeam_name());

            playerRepository.save(playerToUpdate);
            return playerToUpdate;
        }
        return null;
    }

    @Transactional
    public void deletePlayer(String playerName) {
        playerRepository.deleteByName(playerName);
    }
}
