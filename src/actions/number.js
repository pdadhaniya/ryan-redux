export const NUMBER_CHANGED = 'NUMBER_CHANGED'
export const numberChanged = (newNumber) => {
  return {
    type: NUMBER_CHANGED,
    number: newNumber
  }
}