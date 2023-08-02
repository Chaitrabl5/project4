import Shape from './shape'
class rectangle extends Shape{
    constructor(public width:number,public height: number){
   super(width,height)
    }
    calculateArea():number{
        return this.width*this.height
    }
}
export default rectangle