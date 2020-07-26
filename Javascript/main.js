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
        listItem.classList.add('character');
        let button = document.createElement('button');
        button.classList.add('btn');
        button.textContent = "Profile";
        listItem.textContent = `${element['name']}`;
        listItem.appendChild(button);
        list.appendChild(listItem);
        let closedButton = 'close-button';
        const span = document.createElement('span')
        let user = new User(element.name, element.gender, element.height);
        button.addEventListener('click', ()=>{
            const div1 = document.createElement('div');
            // div1.style.width = 100%
            const div2 = document.createElement('div');
            const ul = document.createElement('ul');
            const li1 = document.createElement('li');
            const li2 = document.createElement('li');
            const li3 = document.createElement('li');
            let modal;
            li1.textContent = "Name: " + user.name;
            li2.textContent = "Gender: " + user.gender;
            li3.textContent = "Height: " + user.height;
            ul.appendChild(li1);
            ul.appendChild(li2);
            ul.appendChild(li3);
            div1.classList.add('modal');
            div1.style.display = 'block';
            div1.id = 'modal-id';
            div1.appendChild(div2);
            div2.classList.add('modal-content');
            div2.appendChild(span);

            //create and append image div

            const imageDiv = document.createElement('div')
            imageDiv.classList = "image-div";
            const profileDive = document.createElement('div');
            profileDive.classList = "profile-div";
            div2.appendChild(imageDiv);
            div2.appendChild(profileDive);
            const profileHeader = document.createElement("h4");
            profileDive.textContent = "PROFILE";
            profileDive.appendChild(profileHeader);
            profileDive.appendChild(ul);
            const maleImage = document.createElement('img');
            maleImage.src = "../media/male-dummy.png";
            maleImage.classList = "image";
            const femaleImage = document.createElement('img');
            femaleImage.src = "../media/female-dummy.png";
            maleImage.classList = "image";
            const notAvailable = document.createElement('img');
            notAvailable.src = "../media/no-gender.png"
            notAvailable.classList = "image";
            if(user.gender === "female") {
                imageDiv.appendChild(femaleImage);
            }else if(user.gender === "male") {
                imageDiv.appendChild(maleImage);
            }else {
                imageDiv.appendChild(notAvailable)
            }
            span.classList.add(closedButton);
            span.textContent = 'x';
            button.parentElement.appendChild(div1);
            span.addEventListener('click', () => {
                listItem.removeChild(div1);
            })
        })
    }
}

// Button click event
