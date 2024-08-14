// sort Array of objects

const emp = [
    { name: 'Av rao', salary: 9000 }, 
    { name: 'Subbarao', salary: 25000 },
    { name: 'Apparao', salary: 15000 },
    { name: 'Buchibabu', salary: 35000 },
    { name: 'verayya', salary: 45000 },
    { name: 'ramulu', salary: 66000 },
    { name: 'papa rao', salary: 36000 },
    { name: 'venkat rao', salary: 12000 },
]

let sorted_emp = emp.slice().sort((a,b) => {
    if(a.salary > b.salary) return 1;
})
console.log(sorted_emp);