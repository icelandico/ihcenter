export interface ICheckbox {
  name: string
}

const currentSet = ["Art", "Politics", "Sociology", "Teology"]

export const getFiltersCheckboxSet = (type: string): string[] => {
  switch(type) {
    case "current":
      return currentSet
    default:
      return currentSet
  }

}