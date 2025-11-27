const Welcome = () => {  //arrow function
    console.log("Node.js says Hello");
}

const Cat =() =>{
    console.log("Meow Meow!.....111");
}

const Dog =() =>{
    console.log("Bark Bark");
}
  module.exports = {Welcome, Cat, Dog} //exporting the function to be used in other files like in react export default function at last line