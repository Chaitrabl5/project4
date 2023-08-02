import Shape from './shape'
class triangle extends Shape{
    constructor(public width:number,public height: number){
   super(width,height)
    }
    calculateArea():number{
        return .5*this.width*this.height
    }
}
export default triangle