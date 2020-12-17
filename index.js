let flag = true;

let user = prompt("Ваше имя?:", "");

// let user = +prompt("Введите ваш возраст:");
for (let index = 0; index < data.length; index++) {
  //   debugger;
  if (
    user === data[index].firstName.toUpperCase() ||
    user === data[index].firstName.toLowerCase() ||
    user === data[index].firstName.codePointAt()
  ) {
    flag = false;
    alert(`Ваше имя: ${data[index].firstName}
Ваша фамилия: ${data[index].lastName}
Ваш возраст: ${data[index].age}`);
  } else {
    // alert(`Ваше имя: ${data[index].firstName}`);
    // alert("error");
  }
}
if (flag === true) {
  alert("error");
}
