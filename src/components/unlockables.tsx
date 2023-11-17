import { ITEMS, SURVIVORS, SURVIVOR_ALT_PRIMARY_SKILLS, SURVIVOR_ALT_SECONDARY_SKILLS, SURVIVOR_ALT_SPECIAL_SKILLS, SURVIVOR_ALT_UTILITY_SKILLS, SURVIVOR_UNLOCKS } from "@/app/flag-options";
import { SaveFile } from "@/app/validation/save-file-schema";

const UnlockablesList: React.FC<{ saveFile: SaveFile }> = ({ saveFile }) => {
  return (
    <>
      <div>
        <h2>Survivor Unlocks</h2>
        <ul className="m-4">
          {Object.entries(SURVIVOR_UNLOCKS).map(([description, value]) => {
            const userHasSurvivor = saveFile.flags.includes(value)

            return (
              <li className="m-4" key={value}>
                {description.split(' ')[1]}: <span className={`${userHasSurvivor ? 'text-green-400' : 'text-red-500'}`}>{userHasSurvivor ? 'true' : 'false'}</span>
              </li>
            )
          })}
        </ul>
      </div>

      <div>
        <h2>Survivor Alt Abilities</h2>
        {Object.entries(SURVIVORS).map(([survivor, survivorValue]) => (
          <>
            <h3 className="m-4" key={survivorValue}>{survivor}</h3>
            <ul className="m-4">
              {Object.entries({
                ...SURVIVOR_ALT_PRIMARY_SKILLS,
                ...SURVIVOR_ALT_SECONDARY_SKILLS,
                ...SURVIVOR_ALT_UTILITY_SKILLS,
                ...SURVIVOR_ALT_SPECIAL_SKILLS
              }).map(([description, skillValue]) => {
                if (skillValue.toLocaleLowerCase().includes(survivorValue.toLocaleLowerCase())) {
                  const userHasSkill = saveFile.flags.includes(skillValue)
                  return (
                    <li className="m-4" key={skillValue}>
                      {description}: <span className={`${userHasSkill ? 'text-green-400' : 'text-red-500'}`}>{userHasSkill ? 'true' : 'false'}</span>
                    </li>
                  )
                }
              })}
            </ul>
          </>
        ))}
      </div>
    </>
  );
};

export { UnlockablesList }