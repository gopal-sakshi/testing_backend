let a: string = 'Sankete'
let b = a.split('')
let c = [...new Set(a)]
for (let i of c) {
  console.log(i)
}
