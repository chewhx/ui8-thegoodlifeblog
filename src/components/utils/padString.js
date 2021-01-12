export const pad = (string, n) => {    
    let end = string.length
    let append = "..."
    
    if (n > 0) {
      end = n
    }
    
    const newString = string.slice(0, end).trim()
    
    const lastChar = newString[newString.length-1]
    
    if ( lastChar === ".") {
      append = ".."
    }
       
    return newString + append
  
  }