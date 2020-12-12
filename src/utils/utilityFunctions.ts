export const getStrInitials = (booleanValue: boolean, str: string) => {
  // booleanValue is by default not provided. Please always pass in a false boolean value
  var glue
  if (typeof booleanValue == 'undefined') {
    glue = true
  }

  var initials: RegExpMatchArray | null = str
    .replace(/[^a-zA-Z- ]/g, '')
    .match(/\b\w/g) // gives you an array

  if (glue && initials !== null) {
    return initials.join('')
  }

  if (initials !== null && initials.length === 3) {
    const finalInitials = `${initials[0]}${initials[2]}`
    return finalInitials
  } else if (initials !== null && initials.length === 2) {
    const finalInitials = `${initials[0]}${initials[1]}`
    return finalInitials
  }
}
