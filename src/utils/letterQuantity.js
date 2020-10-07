export default function(value, maxLetters) {
    if(value.length > maxLetters) {
        return value.slice(0, maxLetters)
    }
    return value
}