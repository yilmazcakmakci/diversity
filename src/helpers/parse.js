import calcRanges from './calc-ranges'
import frequency from './frequency'

export default function(records) {
    let dataSet = []
    let organizedData = []
    let parsedData = []

    // We extract the fields we want from the records
    records.forEach(record => {
        dataSet.push(record.fields)
    })

    // Given data is array of objects and we want to create key-value array
    // key=Column Name, value=Array of all values
    dataSet.forEach(userData => {
        for (const property in userData) {
            if (organizedData[property] === undefined) {
                organizedData[property] = []
                organizedData[property].push(userData[property])
            } else {
                organizedData[property].push(userData[property])
            }
        }
    })

    // According to data types we must different calculations
    // and then we are creating new object for each data column
    for (const [key, value] of Object.entries(organizedData)) {
        
        let data = []
        if (key !== 'Name') {
            if (Array.isArray(value[0])) {
                
                // If data type is array, flattened nested arrays and then calculate frequency
                const flattened = frequency(value.flat())
                
                // We must calculate each values percentage in all data
                // because these fields are multiselect
                Object.entries(flattened).forEach(el => {
                    data.push({
                        label: el[0],
                        value: (el[1] / value.length) * 100
                    })
                })
            }

            else if (typeof value[0] === 'number') {
                    
                // We are using a function for dynamicly initializing ranges
                calcRanges(value).forEach(el => {
                    data.push({
                        label : el[0],
                        value: el[1]
                    })
                })
            }

            else if (typeof value[0] === 'string') {
            
                // If data type is string, we just calc frequencies
                Object.entries(frequency(value)).forEach(el => {
                    data.push({
                        id: el[0], // For Maps
                        label: el[0], // For Strings
                        value: el[1],
                    })
                })
            }
            
            parsedData.push({
                title: key,
                data
            })
        }
    }
    return parsedData
}
