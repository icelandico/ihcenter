export const checkIfScrollable = (el: HTMLElement) => {
  const elementScrollable = el && el.scrollHeight > el.offsetHeight
  return elementScrollable
}