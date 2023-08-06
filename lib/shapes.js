
class Shape {
    constructor(text,logoShape,color,textColor){
        this.text = text;
        this.logoShape = logoShape;
        this.color = color;
        this.textColor = textColor;
    }


}

class Circle extends Shape {
    constructor(text,logoShape,color,textColor){
        super(text,logoShape,color,textColor);
    }

    setShapeColor(){
        return `<circle cx="150" cy="100" r="80" fill="${this.color}"/>

        <text x="150" y="125" font-size="60" text-anchor="middle" fill="${this.textColor}">${this.text}</text>`
    }

    render(){
        return `<svg version="1.1"
        width="300" height="200"
        xmlns="http://www.w3.org/2000/svg">
    ${this.setShapeColor()}</svg>`
    }
}

class Rectangle extends Shape {
    constructor(text,logoShape,color,textColor){
        super(text,logoShape,color,textColor);
    }

    setShapeColor(){
        return `<rect x="0" y="0" width="300" height="200" fill="${this.color}"/>

        <text x="150" y="125" font-size="60" text-anchor="middle" fill="${this.textColor}">${this.text}</text>`
    }

    render(){
        return `<svg version="1.1"
        width="300" height="200"
        xmlns="http://www.w3.org/2000/svg">
    ${this.setShapeColor()}</svg>`
    }
}

class Triangle extends Shape {
    constructor(text,logoShape,color,textColor){
        super(text,logoShape,color,textColor);
    }

    setShapeColor(){
        return `<polygon points="150, 18 244, 182 56, 182" fill="${this.color}"/>

        <text x="150" y="125" font-size="40" text-anchor="middle" fill="${this.textColor}">${this.text}</text>`
    }

    render(){
        return `<svg version="1.1"
        width="300" height="200"
        xmlns="http://www.w3.org/2000/svg">
    ${this.setShapeColor()}</svg>`
    }
}


module.exports = { Circle,Rectangle, Triangle };