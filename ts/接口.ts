interface IAnimal {
    name: string,
    junmp(): void,
    run: () => void
}

interface IF1 {
    name: string
    age: number
}

let person1: IF1 = { name: '', age: 4 }

function iffunc(p: IF1) {

}
let pp = { name: '', age: 3, heigh: 3 }
iffunc({ name: '', age: 10 })
iffunc(<IF1>{ name: '', age: 10, height: 30 })