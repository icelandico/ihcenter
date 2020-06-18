import { Instance } from "mobx-state-tree"
import { ProfessionDetails } from "./articleDetails"

export type Profession = Instance<typeof ProfessionDetails>
