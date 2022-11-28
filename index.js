class Polygon{
    constructor(shapeSides){
        this.shapeSides = shapeSides
    }
    get countSides(){
        return this.shapeSides.length
    }
    get perimeter(){
        return this.shapeSides.reduce((result, side)=> result + side, 0)
    }
}
class Triangle extends Polygon{
    get isValid(){
        let sum = this.perimeter
        let res = true
        this.shapeSides.map((side)=>{
            if((sum - side) < side) res = false
        })
        return res
    }
}
class Square extends Polygon{
    get isValid(){
        let value = this.shapeSides[0]
        let res = true
        for(let i = 1; i < 3; i++){
            if(this.shapeSides[i] !== value) res = false
        }
        return res
    }
    get area(){
        if(this.isValid){
            return this.shapeSides[0]**2
        }
    }
}