/**
 * index.ts — Combines all individual side quest files into one exported array.
 *
 * To add a new side quest:
 *   1. Create src/data/sideQuests/yourquest.ts
 *   2. Import and add it to the array below — order = display order on site
 */

import raptures from "./raptures";
import nft      from "./nft";

export const sideQuests = [raptures, nft];
