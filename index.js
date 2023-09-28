class Freelancer {

    constructor(firstName,occupation,price) {
        this.firstName = firstName;
        this.occupation = occupation;
        this.startingPrice = price;
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
    userName.append(...nameElements);

    console.log(users);
    const userOccupation = document.querySelector(".occupation");
    const occupationElements = users.map((user)=> {
        const element = document.createElement("p");
        element.textContent = user.occupation;
        return element;
    });
    userOccupation.append(...occupationElements);

    console.log(users);
    const userPrice = document.querySelector(".price");
    const priceElements = users.map((user)=> {
        const element = document.createElement("p");
        element.textContent = user.price;
        return element;
    });
    userPrice.append(...priceElements);
  }
render();

// TODO: add new user to list every few seconds
function addFreelancer() {
    const userBob = new Freelancer(`Bob`, `Teacher`,50);
    users.push(userBob);
    // render();

    if (users.length >= 2) {
        clearInterval(addFreelancer);
        return;
      }
}

// TODO: make a function to change average price depending on user
// function calculateAveragePrice(){
//     const price 
// }
