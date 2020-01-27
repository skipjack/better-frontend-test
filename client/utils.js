/**
 * Color scheme
 * 
 * @type {object}
 */
export const colors = {
    lightgrey: 'rgb(244, 244, 244)',
    grey: 'rgb(161, 177, 177)',
    green: 'rgb(0, 195, 151)',
    purple: 'rgb(30, 17, 51)'
}

/**
 * Get a formatted date based on the given `date` instance
 * 
 * @see https://muffinman.io/javascript-time-ago-function/
 * @param  {object}  date         - A JavaScript `Date` instance
 * @param  {string}  preformatted - A string to replace month, day and year (optional)
 * @param  {boolean} hideYear     - Hide the year (optional)
 * @param  {boolean} hideTime     - Hide the time of day (optional)
 * @return {string}               - A formatted date string
 */
export function getFormattedDate(date, preformatted, hideYear = false, hideTime = false) {
    const day = date.getDate()
    const month = date.toLocaleString('default', { month: 'long' })
    const year = date.getFullYear()
    const hours = date.getHours()
    let minutes = date.getMinutes()

    if (minutes < 10) {
        minutes = `0${minutes}`
    }

    if (preformatted) {
        return `${preformatted} at ${hours}:${minutes}`
    }

    if (hideYear) {
        return `${month} ${day} at ${hours}:${minutes}`
    }

    if (hideTime) {
        return `${month} ${day}, ${year}`
    }

    return `${month} ${day}, ${year} at ${hours}:${minutes}`
}


/**
 * Get a relative date string or formatted date
 *
 * @see https://muffinman.io/javascript-time-ago-function/
 * @param  {number} timestamp - A unix epoch timestamp (seconds)
 * @return {string}           - A representation of the given `timestamp`
 */
export function timeAgo(timestamp) {
    if (!timestamp) return null

    const DAY_IN_MS = 86400000 // 24 * 60 * 60 * 1000
    const date = new Date(timestamp * 1000)
    const today = new Date()
    const yesterday = new Date(today - DAY_IN_MS)
    const seconds = Math.round((today - date) / 1000)
    const minutes = Math.round(seconds / 60)
    const isToday = today.toDateString() === date.toDateString()
    const isYesterday = yesterday.toDateString() === date.toDateString()
    const isThisYear = today.getFullYear() === date.getFullYear()

    if (seconds < 5) {
        return 'now'
    } else if (seconds < 60) {
        return `${ seconds } seconds ago`
    } else if (seconds < 90) {
        return 'about a minute ago'
    } else if (minutes < 60) {
        return `${ minutes } minutes ago`
    } else if (isToday) {
        return getFormattedDate(date, 'Today')
    } else if (isYesterday) {
        return getFormattedDate(date, 'Yesterday')
    } else if (isThisYear) {
        return getFormattedDate(date, false, true)
    }

    return getFormattedDate(date)
}

/**
 * Split out any URLs in the given content
 * 
 * @param  {string} content - ...
 * @return {array}          - ...
 */
export function splitURLs(content) {
    const parts = content.split(urlRegex)

    return parts
}