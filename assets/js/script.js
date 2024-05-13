import { robots } from './robots.js';


//console.log(robots[0].id , robots[0].name , robots[0].weapon);

//Desestructuración
const { id , name ,  weapon , series ,  avatar , sprite1 } = robots[0];

//Array function
const getRobotById = ( id = "000" ) => {
    return robots.find( ( robot ) => {
        return robot.id === id;
    })
}

console.log(getRobotById());

const getRobotsBySeries = ( series = 1 ) => {
    return robots.filter( ( robot ) => {
        return robot.series === series;
    })
}

console.log(getRobotsBySeries(2));

//Literal Strings
const getRobots = () => {
    return robots.map ( ( robot ) => {
        console.log(` El robot es: ${JSON.stringify(robot)}`);
    });
}

console.log(getRobots());

//Cards
const getRobotsCards = () => {

    const megamanRow = document.getElementById("megamanRow");
    robots.map( ( robot )  => {
        const cardCol = document.createElement('div');
        cardCol.classList.add("col-sm-4");

        const card = document.createElement('div');
        card.classList.add("card");
        card.classList.add("mt-2");
        card.classList.add("mb-2");

        const cardImg = document.createElement('img');
        cardImg.classList.add('card-img-top');
        cardImg.src = robot.avatar;

        const cardBody = document.createElement('div');
        cardBody.classList.add('card-body');

        const cardTitle = document.createElement('h5');
        cardTitle.classList.add('card-title');
        cardTitle.textContent = robot.name;

        const cardText = document.createElement('p');
        cardText.classList.add('card-text');
        cardText.textContent = `Arma: ${robot.weapon}`;

        cardBody.appendChild(cardTitle);
        cardBody.appendChild(cardText);

        card.appendChild(cardImg);
        card.appendChild(cardBody);

        cardCol.appendChild(card);
        megamanRow.appendChild(cardCol);
    } )
}

getRobotsCards();