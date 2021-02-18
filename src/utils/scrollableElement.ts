export const checkIfScrollable = (el: HTMLElement) => {
  return el && el.scrollHeight > el.offsetHeight
}
