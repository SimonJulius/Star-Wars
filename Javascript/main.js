import { User } from "./modules/user.js";

const url = 'https://swapi.dev/api/people/';
const body = document.getElementsByTagName("body")[0];
const list = document.getElementsByTagName("ul")[0];
const fetchl = () => {
    fetch(url)
        .then(res => res.json())
        .then(({results}) => {
            body.addEventListener("load", createList(results));
        })
}
fetchl();
const createList = data => {
    for (let element of data) {
        let listItem = document.createElement('li');
        let button = document.createElement('button');
        button.classList.add('btn');
        button.textContent = "Profile";
        listItem.textContent = `${element['name']}`;
        listItem.appendChild(button);
        list.appendChild(listItem);
    }
}

// Button click event
