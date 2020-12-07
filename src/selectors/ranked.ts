import { LeagueEntry } from "../__generated__/types";

export const getSoloRanked = (ranked?: LeagueEntry[]) => {
  if (!ranked) return undefined;
  return ranked.find((r) => r.queueType === "RANKED_SOLO_5x5") || undefined;
};

export const getIcon = (tier: string) => {
  switch (tier) {
    case "UNRANKED":
      return require("../../assets/Ranked/Emblems/Unranked.png");
    case "IRON":
      return require("../../assets/Ranked/Emblems/Iron.png");
    case "BRONZE":
      return require("../../assets/Ranked/Emblems/Bronze.png");
    case "SILVER":
      return require("../../assets/Ranked/Emblems/Silver.png");
    case "GOLD":
      return require("../../assets/Ranked/Emblems/Gold.png");
    case "PLATINUM":
      return require("../../assets/Ranked/Emblems/Platinum.png");
    case "DIAMOND":
      return require("../../assets/Ranked/Emblems/Diamond.png");
    case "MASTER":
      return require("../../assets/Ranked/Emblems/Master.png");
    case "GRANDMASTER":
      return require("../../assets/Ranked/Emblems/Grandmaster.png");
    case "CHALLENGER":
      return require("../../assets/Ranked/Emblems/Challenger.png");
    default:
      return require("../../assets/Ranked/Emblems/Unranked.png");
  }
};
