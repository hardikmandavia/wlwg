import { Match } from "../__generated__/types";

export const getPlayerData = (name: string, match: Match) => {
  const { participantIdentities, participants } = match;
  const participantIdentity = participantIdentities.find(
    (p) => p.player.summonerName === name
  );
  if (!participantIdentity) return;

  const participant = participants.find(
    (p) => p.participantId === participantIdentity.participantId
  );
  if (!participant) return;

  return participant;
};
