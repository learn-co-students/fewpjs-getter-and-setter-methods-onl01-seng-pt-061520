// Add your Circle class here
class Circle {
    constructor(radius) {
        this.radius = radius
    }

    get diameter() {
        return `${this.radius}`* 2
    }

    get circumference() {
        return Math.PI * `${this.diameter}`
    }

    get area() {
        return Math.PI * (`${this.radius}` ** 2)
    }

    set diameter(radius) {
        return this.radius = radius / 2
    }

    set circumference(radius) {
        return this.radius = (radius / 2) /  Math.PI 
    }
}