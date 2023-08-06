const { Circle, Rectangle, Triangle } = require("./shapes")

describe ('Shapes', () =>{
    describe ('Circle', () =>{
        it('Circle should render correctly', () => {
            const circle = new Circle('AVN','Circle','black','white');
            expect(circle.render()).toEqual(`<svg version="1.1"
        width="300" height="200"
        xmlns="http://www.w3.org/2000/svg">
    <circle cx="150" cy="100" r="80" fill="black"/>

        <text x="150" y="125" font-size="60" text-anchor="middle" fill="white">AVN</text></svg>`);
        })

    })

    describe ('Rectangle', () =>{
        it('Rectangle should render correctly', () => {
            const rectangle = new Rectangle('AVN','Rectangle','black','white');
            expect(rectangle.render()).toEqual(`<svg version="1.1"
        width="300" height="200"
        xmlns="http://www.w3.org/2000/svg">
    <rect x="0" y="0" width="300" height="200" fill="black"/>

        <text x="150" y="125" font-size="60" text-anchor="middle" fill="white">AVN</text></svg>`);
        })

    })
    describe ('Triangle', () =>{
        it('Triangle should render correctly', () => {
            const triangle = new Triangle('AVN','Triangle','black','white');
            expect(triangle.render()).toEqual(`<svg version="1.1"
        width="300" height="200"
        xmlns="http://www.w3.org/2000/svg">
    <polygon points="150, 18 244, 182 56, 182" fill="black"/>

        <text x="150" y="125" font-size="40" text-anchor="middle" fill="white">AVN</text></svg>`);
        })

    })
})