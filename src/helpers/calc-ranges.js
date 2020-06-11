import range from 'range-inclusive'

export default function(numbers) {
    let data = []
    const min = Math.min(...numbers)
    const max = Math.max(...numbers)
    const ranges = range(min, max, 10)

    for (let i = 0; i < ranges.length; i++) {
        const range =
            ranges[i] === ranges[ranges.length - 1]
                ? `${ranges[i]}+`
                : `${ranges[i]}-${ranges[i + 1]}`

        data.push([range, 0])
    }

    for (let i = 0; i < ranges.length; i++) {
        
        for (let j = 0; j < numbers.length; j++) {
            
            if (ranges[i] === ranges[ranges.length - 1]) {
                
                if (numbers[j] >= ranges[ranges.length - 1]) {
                    data[data.length - 1][1]++
                }
            }
            
            else {
                if (numbers[j] >= ranges[i] && numbers[j] < ranges[i + 1]) {
                    
                    const range = `${ranges[i]}-${ranges[i + 1]}`
                    
                    data.forEach(el => {
                        if (el[0] === range) el[1]++
                    })
                }
            }
        }
    }

    return data
}
