// Add your Circle class here
class Circle{
    constructor(radius){
        this.radius=radius
    }

    //calculate each value using this.radius and pi
    get diameter(){
        return this.radius*2
    }

    get circumference() {
        return Math.PI * this.diameter
    }
    
    get area() {
        return Math.PI * (this.radius * this.radius)
    }
    
    //will accept values for each calculation, calculate the radius based on the input value and set this.radius accordingly
    set diameter(diameter) {
        this.radius = diameter / 2
    }
    
    set circumference(circumference) {
        this.radius = (circumference / Math.PI) / 2
    }
    
    set area(area) {
        this.radius = Math.sqrt(area / Math.PI)
    }
}