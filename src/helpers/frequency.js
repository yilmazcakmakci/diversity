export default function(value) {
    return value.reduce((acc, curr) => {
        acc[curr] ? acc[curr]++ : (acc[curr] = 1)
        return acc
    }, {})
}
