import { AllSurvivorSkillsEnum, ITEMS, SurvivorUnlocksEnum } from "./app/flag-options"
import { SaveFile } from "./app/validation/save-file-schema"

type UnlockOptions = {
  abilityUnlocks: AllSurvivorSkillsEnum[],
  survivorUnlocks: SurvivorUnlocksEnum[],
}

const formatFlags = (unlockOptions: UnlockOptions, originalUserFlags: SaveFile): SaveFile => {
  const itemFlags = Object.values(ITEMS).map((itemProps) => {
    const itemFlag = [];

    if ('unlock' in itemProps) {
      itemFlag.push(...itemProps.unlock)
    }

    if ('achievement' in itemProps) {
      itemFlag.push(...itemProps.achievement)
    }

    return itemFlag;
  }).flatMap(itemFlag => itemFlag)

  return {
    ...originalUserFlags,
    flags: Array.from(
      new Set(
        [
          ...originalUserFlags.flags,
          ...unlockOptions.survivorUnlocks,
          ...unlockOptions.abilityUnlocks,
          ...itemFlags
        ].sort()
      )
    )
  }
}

export { formatFlags }