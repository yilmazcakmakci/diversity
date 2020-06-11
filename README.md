# Diversity

> :rocket: This project is being developed using Vue.js and FusionCharts.

> :point_right: Project is live at https://diversityapp.netlify.app/

### Parsing Data
#### Input

Array of all single records.
```javascript
[
    {
        id: "someId",
        createdTime: "2020-06-07T13:00:19.000Z",
        fields: {
            Age: 25,
            Ethnicity: "Hispanic or Latino",
            Gender: "Man",
            Language: ["English", "Turkish"],
            Location:"NA"
        }
    },
    {...},
    {...}
]
```

#### Output



```javascript
[
    {
        title: "Gender",
        data: [
            {
                label: "Man",
                value: 4
            },
            {
                label: "Woman",
                value: 5
            },
            {...}
        ]
    },
    {...},
    {...}
]
```