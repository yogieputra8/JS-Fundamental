// const FilmTitle = "Star Wars" // String
// const Rating = 8 // Number

// const IsShowing = false // Boolean
// const Statement = IsShowing
//   ? "Yes! Film ini sedang tayang di bioskop!"
//   : "Wait! Film ini akan tampil bulan depan." // Ternary Operator
// let Categories // Undefined

// console.log(FilmTitle)
// console.log(Rating)
// console.log(IsShowing)
// console.log(Categories)
// console.log(Statement)

// const profileData = {
//   // consists of 1 or more params
//   name: "Abc", //  param consist of key-value pair
//   phone: "0812",
//   age: 17,
//   isHandsome: true,
//   nationality: "ID"
// } // Object

// console.log(profileData.name)
// console.log(profileData.phone)
// console.log(profileData.name + " " + profileData.phone) // Concat

// Array of Objects
const CarsData = [
  {
    Brand: "Toyota",
    Year: 2015,
    Type: "Avanza",
    Category: "MPV",
    Wheels: {
      FrontWheels: "Bridgestone",
      RearWheels: "Dunloop"
    }
  },
  {
    Brand: "Honda",
    Year: 2016,
    Type: "Jazz",
    Category: "Hatchback",
    Wheels: {
      FrontWheels: "Dunloop",
      RearWheels: "Bridgestone"
    }
  },
  {
    Brand: "Mitsubishi",
    Year: 2018,
    Type: "Pajero",
    Category: "SUV",
    Wheels: {
      FrontWheels: "Bridgestone",
      RearWheels: "Dunloop"
    }
  }
] // Array // Square brackets

// console.log(CarsData)
// console.log(CarsData[0])

// console.log(CarsData[2].Wheels.FrontWheels)
// Dunloop

const { Brand, Type, Category, Wheels } = CarsData[1] // Destructuring

console.log(`${Brand} ${Type} is a ${Category} that uses ${Wheels.RearWheels} as RearWheels`)
// Honda Jazz is a Hatchback that uses Bridgestone as RearWheels
