export const get = (elem, prop) => parseFloat(getComputedStyle(elem).getPropertyValue(prop)) || 0

export const set = (elem, prop, val) => elem.style.setProperty(prop, val)

export const update = (elem, prop, inc) => set(elem, prop, get(elem, prop) + inc)
