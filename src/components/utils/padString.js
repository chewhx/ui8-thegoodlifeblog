export const pad = (string, length) => {
    if (typeof string === "string" && string.length > length) {
        return string.slice(0, length) + "..."
    } else {
        return string
    }
  }