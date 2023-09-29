class Freelancer {

    constructor(firstName,occupation,price) {
        this.firstName = firstName;
        this.occupation = occupation;
        this.price = price;
    }
    
}

const users = [
    new Freelancer(`Bob`, `Teacher`,50),
    new Freelancer(`Carol`,`Programmer`,70)
]

const addUserIntervalId = setInterval(addFreelancer, 1000);


// const avgPrice = document.querySelector(#averagePrice);
// function calculateAveragePrice() {

// }

function render() {
    // Render the squares
    console.log(users);
    const userName = document.querySelector(".name");
    const nameElements = users.map((user)=> {
        const element = document.createElement("p");
        element.textContent = user.firstName;
        return element;
    });
    userName.replaceChildren(...nameElements);

    console.log(users);
    const userOccupation = document.querySelector(".occupation");
    const occupationElements = users.map((user)=> {
        const element = document.createElement("p");
        element.textContent = user.occupation;
        return element;
    });
    userOccupation.replaceChildren(...occupationElements);

    console.log(users);
    const userPrice = document.querySelector(".price");
    const priceElements = users.map((user)=> {
        const element = document.createElement("p");
        element.textContent = user.price;
        return element;
    });
    userPrice.replaceChildren(...priceElements);
  }
render();

// TODO: add new user to list every few seconds
function addFreelancer() {
    const userBob = new Freelancer(`Bob`, `Teacher`,50);
    users.push(userBob);
    render();

    if (users.length >= 1) {
        clearInterval(addUserIntervalId);
        return;
      }
}

// TODO: make a function to change average price depending on user
function calculateAveragePrice(){
    const sumPrice = users.reduce((total, user) =>{
        return total + user.price;
    },0)
    
    const averagePrice = sumPrice / users.length;
    console.log(averagePrice);

    const startingPrice = document.querySelector("#averagePrice");
    startingPrice.textContent = averagePrice;
    
}
calculateAveragePrice();