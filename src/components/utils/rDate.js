export const rDate = () => {
    const start = new Date(2000, 0o0, 0o1)
    const now = new Date()
    const startTime = start.getTime()
    const nowTime = now.getTime()
    const date = new Date(startTime + Math.random() * (nowTime - startTime))

    const options = {
        year: "numeric",
        month: "long",
        day: "numeric"
    }

    return date.toLocaleDateString("en-SG", options).toString()

}

