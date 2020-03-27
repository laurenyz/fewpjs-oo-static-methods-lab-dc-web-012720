class Formatter {
  static capitalize(string) {
    let array = string.split("")
    array[0] = array[0].toUpperCase()
    let newArray = array.join("")
    return newArray
  }
  
  static sanitize(string) {
    return string.replace( /[^A-Za-z0-9 '-]/g, '' )
  }
  
  static titleize(string) {
    let array = string.split(" ")
    let newArray = array.map(word => word.charAt(0).toUpperCase())
    return newArray.join(" ")
  }
}

console.log(Formatter.titleize("i am hungry"))

// console.log(Formatter.capitalize("hello"))