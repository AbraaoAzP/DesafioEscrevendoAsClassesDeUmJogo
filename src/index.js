class hero{
    constructor(name, age, job) {
        this.name = name
        this.age = age
        this.job = job
    }

    attack() {
        if (this.job === "Mago") {
            console.log(`O ${this.job} de nome ${this.name} e que possui ${this.age} anos, atacou usando magia`)
        } else if (this.job === "Guerreiro") {
            console.log(`O ${this.job} de nome ${this.name} e que possui ${this.age} anos, atacou usando a espada`)
        } else if (this.job === "Monge") {
            console.log(`O ${this.job} de nome ${this.name} e que possui ${this.age} anos, atacou usando artes marciais`)
        } else {
            console.log(`O ${this.job} de nome ${this.name} e que possui ${this.age} anos, atacou usando a shuriken`)
        }
    }
}

let character1 = new hero("Frederico", 28, "Guerreiro")
let character2 = new hero("Francesca", 31, "Ninja")
let character3 = new hero("Miguel", 19, "Mago")
let character4 = new hero("Gael", 25, "Monge")

character1.attack()
character2.attack()
character3.attack()
character4.attack()