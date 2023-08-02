import Shape from './shape';
import rectangle from './rectangle';
import triangle from './triangle';
class main{
    static display(shape:Shape){
        console.log(`Area of ${shape} is ${shape.calculateArea()}`)
    }
}
main.display(new rectangle (23.4 ,5))
main.display(new triangle (23.4 ,5))