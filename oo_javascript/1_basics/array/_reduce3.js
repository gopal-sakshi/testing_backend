let queryOpts = {
    labels: [
        { name: 'state', value: 'Tamil Nadu' },
        { name: 'city', value: 'Madurai' },
        { name: 'domain', value: '' }
    ],
    group_by: 'coe_name'
}

let op = queryOpts.labels.reduce((acc, row) => {
    acc[row.name] = row.value;
    return acc;
}, {});

console.log(op);