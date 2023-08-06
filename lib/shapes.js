
class Shape {
    constructor(text,color,logoShape,textColor){
        this.text = text;
        this.color = color;
        this.logoShape = logoShape;
        this.textColor = textColor;
    }
}

class Circle extends Shape {
    constructor(text,color,logoShape,textColor){
        super(text,color,logoShape,textColor);
    }
}

class Rectangle extends Shape {
    constructor(text,color,logoShape,textColor){
        super(text,color,logoShape,textColor);
    }
}

class Triangle extends Shape {
    constructor(text,color,logoShape,textColor){
        super(text,color,logoShape,textColor);
    }
}