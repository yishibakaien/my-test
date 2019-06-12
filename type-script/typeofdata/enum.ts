enum Color {
    Red = 2,
    Green,
    Blue = 5
}

let c: Color = Color.Red

let colorName: string = Color[2]

console.log(colorName, typeof colorName, Color)