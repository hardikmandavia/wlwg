import { Match, Participant } from "../__generated__/types";

export const getPlayerData = (name: string, match: Match) => {
  const { participantIdentities, participants } = match;
  const participantIdentity = participantIdentities.find(
    (p) => p.player.summonerName === name
  );

  const participant = participants.find(
    (p) => p.participantId === participantIdentity!.participantId
  );

  return participant!;
};

export const getOpponentData = (match: Match, player: Participant) => {
  const { participants } = match;
  const { teamId, timeline } = player;
  const { lane, role } = timeline;

  const enemyTeam = participants.filter((p) => {
    return p.teamId !== teamId;
  });

  const opponent = enemyTeam.find((p) => {
    return p.timeline.lane === lane && p.timeline.role === role;
  });

  return opponent || enemyTeam[0];
};
