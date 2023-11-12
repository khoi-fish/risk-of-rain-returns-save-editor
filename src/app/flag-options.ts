import z from 'zod'

const SURVIVORS = {
  "Acrid": "acrid",
  "Artificer": "arti",
  "Bandit": "bandit",
  "Chef": "chef",
  "Drifter": "drifter",
  "Engineer": "engi",
  "Enforcer": "enforcer",
  "Han-D": "hand",
  "Loader": "loader",
  "Mercenary": "mercenary",
  "Miner": "miner",
  "Pilot": "pilot",
  "Sniper": "sniper",
} as const;


const SURVIVOR_UNLOCKS = {
  "Unlock Engineer": "challenge_unlock_engineer_completed",
  "Unlock Enforcer": "challenge_unlock_enforcer_completed",
  "Unlock Bandit": "challenge_unlock_bandit_completed",
  "Unlock Han-D": "challenge_unlock_hand_completed",
  "Unlock Miner": "challenge_unlock_miner_completed",
  "Unlock Sniper": "challenge_unlock_sniper_completed",
  "Unlock Acrid": "challenge_unlock_acrid_completed",
  "Unlock Mercenary": "challenge_unlock_mercenary_completed",
  "Unlock Loader": "challenge_unlock_loader_completed",
  "Unlock Chef": "challenge_unlock_chef_completed",
  "Unlock Pilot": "challenge_unlock_pilot_completed",
  "Unlock Drifter": "challenge_unlock_drifter_completed",
  "Unlock Artificer": "challenge_unlock_arti_completed",
} as const;

const SURVIVOR_ALT_UTILITY_SKILLS = {
  "Acrid Utility Alt": "challenge_unlock_acrid_c2_completed",
  "Artificer Utility Alt": "challenge_unlock_arti_c2_completed",
  "Bandit Utility Alt": "challenge_unlock_bandit_c2_completed",
  "Chef Utility Alt": "challenge_unlock_chef_c2_completed",
  "Commando Utility Alt": "challenge_unlock_commando_c2_completed",
  "Drifter Utility Alt": "challenge_unlock_drifter_c2_completed",
  "Enforcer Utility Alt": "challenge_unlock_enforcer_c2_completed",
  "Engineer Utility Alt": "challenge_unlock_engi_c2_completed",
  "Huntress Utility Alt": "challenge_unlock_huntress_c2_completed",
  "Mercenary Utility Alt": "challenge_unlock_mercenary_c2_completed",
  "Miner Utility Alt": "challenge_unlock_miner_c2_completed",
  "Pilot Utility Alt": "challenge_unlock_pilot_c2_completed",
  "Sniper Utility Alt": "challenge_unlock_sniper_c2_completed",
} as const

const SURVIVOR_ALT_PRIMARY_SKILLS = {
  "Acrid Primary Alt": "challenge_unlock_acrid_z2_completed",
  "Bandit Primary Alt": "challenge_unlock_bandit_z2_completed",
  "Chef Primary Alt": "challenge_unlock_chef_z2_completed",
  "Enforcer Primary Alt": "challenge_unlock_enforcer_z2_completed",
  "Engineer Primary Alt": "challenge_unlock_engi_z2_completed",
  "Huntress Primary Alt": "challenge_unlock_huntress_z2_completed",
  "Loader Primary Alt": "challenge_unlock_loader_z2_completed",
  "Miner Primary Alt": "challenge_unlock_miner_z2_completed",
  "Pilot Primary Alt": "challenge_unlock_pilot_z2_completed",
  "Sniper Primary Alt": "challenge_unlock_sniper_z2_completed",
} as const

const SURVIVOR_ALT_SECONDARY_SKILLS = {
  "Artificer Secondary Alt": "challenge_unlock_arti_x2_completed",
  "Commando Secondary Alt": "challenge_unlock_commando_x2_completed",
  "Drifter Secondary Alt": "challenge_unlock_drifter_x2_completed",
  "Enforcer Secondary Alt": "challenge_unlock_enforcer_x2_completed",
  "Han-D Secondary Alt": "challenge_unlock_hand_x2_completed",
  "Huntress Secondary Alt": "challenge_unlock_huntress_x2_completed",
  "Loader Secondary Alt": "challenge_unlock_loader_x2_completed",
  "Mercenary Secondary Alt": "challenge_unlock_mercenary_x2_completed",
  "Miner Secondary Alt": "challenge_unlock_miner_x2_completed",
  "Sniper Secondary Alt": "challenge_unlock_sniper_x2_completed",
} as const;

const SURVIVOR_ALT_SPECIAL_SKILLS = {
  "Artificer Special Alt": "challenge_unlock_arti_v2_completed",
  "Bandit Special Alt": "challenge_unlock_bandit_v2_completed",
  "Chef Special Alt": "challenge_unlock_chef_v2_completed",
  "Commando Special Alt": "challenge_unlock_commando_v2_completed",
  "Drifter Special Alt": "challenge_unlock_drifter_v2_completed",
  "Enforcer Special Alt": "challenge_unlock_enforcer_v2_completed",
  "Engineer Special Alt": "challenge_unlock_engi_v2_completed",
  "Han-D Special Alt": "challenge_unlock_hand_v2_completed",
  "Loader Special Alt": "challenge_unlock_loader_v2_completed",
  "Mercenary Special Alt": "challenge_unlock_mercenary_v2_completed",
  "Pilot Special Alt": "challenge_unlock_pilot_v2_completed",
} as const;

const SurvivorsEnum = z.nativeEnum(SURVIVORS)
type SurvivorsEnum = z.infer<typeof SurvivorsEnum>

const SurvivorUnlocksEnum = z.nativeEnum(SURVIVOR_UNLOCKS)
type SurvivorUnlocksEnum = z.infer<typeof SurvivorUnlocksEnum>

const SurvivorUnlocksAltPrimaryEnum = z.nativeEnum(SURVIVOR_ALT_PRIMARY_SKILLS)
type SurvivorUnlocksAltPrimaryEnum = z.infer<typeof SurvivorUnlocksAltPrimaryEnum>

const SurvivorUnlocksAltSecondaryEnum = z.nativeEnum(SURVIVOR_ALT_SECONDARY_SKILLS)
type SurvivorUnlocksAltSecondaryEnum = z.infer<typeof SurvivorUnlocksAltSecondaryEnum>

const SurvivorUnlocksAltUtilityEnum = z.nativeEnum(SURVIVOR_ALT_UTILITY_SKILLS)
type SurvivorUnlocksAltUtilityEnum = z.infer<typeof SurvivorUnlocksAltUtilityEnum>

const SurvivorUnlocksAltSpecialEnum = z.nativeEnum(SURVIVOR_ALT_SPECIAL_SKILLS)
type SurvivorUnlocksAltSpecialEnum = z.infer<typeof SurvivorUnlocksAltSpecialEnum>


const ALL_SURVIVOR_SKILLS = {
  ...SURVIVOR_ALT_PRIMARY_SKILLS,
  ...SURVIVOR_ALT_SECONDARY_SKILLS,
  ...SURVIVOR_ALT_UTILITY_SKILLS,
  ...SURVIVOR_ALT_SPECIAL_SKILLS,
}
const AllSurvivorSkillsEnum = z.nativeEnum(ALL_SURVIVOR_SKILLS)
type AllSurvivorSkillsEnum = z.infer<typeof AllSurvivorSkillsEnum>

export {
  ALL_SURVIVOR_SKILLS,
  SURVIVORS,
  SURVIVOR_UNLOCKS,
  SURVIVOR_ALT_PRIMARY_SKILLS,
  SURVIVOR_ALT_SECONDARY_SKILLS,
  SURVIVOR_ALT_UTILITY_SKILLS,
  SURVIVOR_ALT_SPECIAL_SKILLS
}

export type {
  AllSurvivorSkillsEnum,
  SurvivorsEnum,
  SurvivorUnlocksEnum,
  SurvivorUnlocksAltPrimaryEnum,
  SurvivorUnlocksAltSecondaryEnum,
  SurvivorUnlocksAltUtilityEnum,
  SurvivorUnlocksAltSpecialEnum
}