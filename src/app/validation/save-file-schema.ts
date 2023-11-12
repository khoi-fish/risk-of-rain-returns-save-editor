import z from 'zod'

// TODO: Maybe better validation 🤷‍♀️
const saveFileSchema = z.object({
  lobby_votes: z.any(),
  challenge: z.any(),
  last_stage_id: z.any(),
  stats: z.any(),
  trials: z.any(),
  survivor_choice: z.any(),
  lobby_votes_multi: z.any(),
  loadout_choice: z.any(),
  mod_data_string: z.any(),
  run_history: z.any(),
  flags: z.string().array(),
  lobby_settings: z.any(),
})

type SaveFile = z.infer<typeof saveFileSchema>

export type { SaveFile }
export { saveFileSchema }