export default function(chartData) {
    const types = {
        bar: 'bar2d',
        column: 'column2d',
        pie: 'pie3d',
        geo: 'world'
    }

    // If we want Map Chart column name must contain 'location' keyword
    if (chartData.title.toLowerCase().includes('Location'.toLowerCase())) return types.geo
    else {
        if (chartData.data.length < 3) return types.pie
        else if (chartData.data.length >= 6) return types.bar
    }
    return types.column
}
