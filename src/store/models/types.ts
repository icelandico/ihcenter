import { Instance } from "mobx-state-tree"
import { BaseInfoDetails, WritingsDetails } from "./articleDetails"

export type BaseInfo = Instance<typeof BaseInfoDetails>
export type Writing = Instance<typeof WritingsDetails>
