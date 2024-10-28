class Circle {
    constructor(radius) {
        this.radius = radius;
        this.draw = function () {
            console.log("Radius: " + this.radius);
        };
    }
}

const obj = new Circle(23);
obj.draw();
console.log(obj);

const objSecond = new Circle(5);
objSecond.draw();