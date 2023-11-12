import { AllSurvivorSkillsEnum, SurvivorUnlocksAltPrimaryEnum, SurvivorUnlocksEnum } from "./app/flag-options"
import { SaveFile } from "./app/validation/save-file-schema"

type UnlockOptions = {
  abilityUnlocks: AllSurvivorSkillsEnum[],
  survivorUnlocks: SurvivorUnlocksEnum[]
}

const formatFlags = (unlockOptions: UnlockOptions, originalUserFlags: SaveFile): SaveFile => {
  return {
    ...originalUserFlags,
    flags: Array.from(
      new Set(
        [
          ...originalUserFlags.flags,
          ...unlockOptions.survivorUnlocks,
          ...unlockOptions.abilityUnlocks,
        ].sort()
      )
    )
  }
}

export { formatFlags }