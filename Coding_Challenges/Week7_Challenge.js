class Person {
	constructor(name, age) {
		this.name = name;
		this.age = age;
	}

	compareAge(other) {
		
        let ageDifference = this.age - other.age;

        if (ageDifference < 0) return other.name + " is older than me."
        if (ageDifference === 0) return other.name + " is the same age as me."
        if (ageDifference > 0) return other.name + " is younger than me."

	}
}

p1 = Person("Samuel", 24)
p2 = Person("Joel", 36)
p3 = Person("Lily", 24)

console.log(p1.compareAge(p2))
console.log(p2.compareAge(p1))
console.log(p1.compareAge(p3))