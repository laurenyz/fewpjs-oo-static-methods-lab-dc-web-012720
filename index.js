class Formatter {
  static capitalize(string) {
    let array = string.split("")
    array[0].toUpperCase()
    array.join("")
    return array
  }
}

console.log(Formatter.capitalize("hello"))