/**
 * index.ts — Type definition + registry for all side quests.
 *
 * To add a new side quest:
 *   1. Create src/data/sideQuests/yourquest.ts
 *   2. Import and add it to the array below — order = display order on site
 */

export interface SideQuestLink {
  label: string;
  url:   string;
}

export interface SideQuest {
  id:           number;
  title:        string;
  slug:         string;
  category:     string;
  highlight:    string;
  description:  string;
  image:        string;
  technologies: string;
  longDesc?:    string;
  links?:       SideQuestLink[];
  awards?:      string[];
  team?:        string[];
  period?:      string;
  status?:      "Ongoing" | "Completed" | "Archived";
  gallery?:     string[];
}

import raptures from "./raptures";
import nft      from "./nft";

export const sideQuests: SideQuest[] = [raptures, nft];
