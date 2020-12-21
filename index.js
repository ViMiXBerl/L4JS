debugger;
const app = () => {
  let userName = prompt("Введите ваше имя?", "");
  let userLastName = prompt("Ваша фамилия?", "");
  let userLastLastName = prompt("Ваше отчество?", "");
  let userAge = +prompt("Введите ваш возраст?");
  let userAgeAddFive = addFive(userAge);
  let userAgeDays = ageDays(userAge);
  let mg = confirm("Ваш пол мужской?") ? "мужской" : "женский";
  let m = userAge >= 65 ? "да" : "нет";
  let g = userAge >= 55 ? "да" : "нет";

  print(
    userName,
    userLastName,
    userLastLastName,
    userAge,
    userAgeAddFive,
    userAgeDays,
    mg,
    m,
    g
  );
};

let addFive = (userAge) => {
  +userAge + 5;
};

let ageDays = (userAge) => {
  +userAge * 365;
};

const print = (
  userName,
  userLastName,
  userLastLastName,
  userAge,
  userAgeDays,
  userAgeAddFive,
  mg,
  m,
  g
) => {
  alert(`Ваше ФИО: ${userName + userLastName + userLastLastName}
  Ваш возраст: ${userAge}
  Ваш возраст в днях: ${userAgeDays}
  Через 5 лет Вам будет: ${userAgeAddFive}
  Ваш пол: ${mg}
  Вы на пенсии: ${m && g} `);
};
app();
