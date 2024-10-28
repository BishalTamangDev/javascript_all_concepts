//  also called constructor
// factory function
function createCircle(radius, coordinateX, coordinateY) {
    return {
        radius, // radius: radius,
        coordinate: {
            x: coordinateX,
            y: coordinateY
        },

        draw: function () {
            console.log("Radius: " + this.radius + ", X : " + this.coordinate.x + ", Y : " + this.coordinate.y);
        }
    }
}


// object 1
const circle1 = createCircle(5,1,1);
circle1.draw();

// object 2
const circle2 = createCircle(75,6,50);
circle2.draw();