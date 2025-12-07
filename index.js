import { loadData } from "./js/backend/loadData.js";
import { Users } from "./js/frontend/class.js";

const users = await loadData(),
  usersList = document.querySelector(".users__list");

console.log(users);

users.forEach((user, index) => {
  const userObj = new Users(user),
    usersListItem = document.createElement("li"); usersListItem.classList.add('users__list-item')

  usersListItem.innerHTML = userObj.DrowCard();
  usersList.append(usersListItem);

  const userCard = document.querySelectorAll('.user-card')[index],
    userCardList = userCard.querySelector('.user-card__list');

  userObj['userHobbies'].forEach(userHobby => userCardList.innerHTML += userObj.DrowCardList(userHobby));
});