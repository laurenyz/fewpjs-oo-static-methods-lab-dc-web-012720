class Formatter {
  static capitalize(string) {
    let array = string.split("")
    array[0] = array[0].toUpperCase()
    let newArray = array.join("")
    return newArray
  }
}

// console.log(Formatter.capitalize("hello"))