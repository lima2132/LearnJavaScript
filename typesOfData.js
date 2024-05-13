'use strict';

alert("Здравстувуйте! Я вывожу ваши данные, которые вы напишите! Нажмите ОК :)");
const username = prompt("Напишите ваше имя: ", "Сюда имя!!!");
const role = prompt(`Привет, ${username}. Напиши теперь свою роль в компании: `, "admin");
alert(`Ваше имя: ${username}\nВаша роль: ${role}\nОднако постой! Нажми ОК :)`);
const isBoss = confirm("Ты босс?");
if (isBoss) {
alert(`Вау, мистер ${username} босс, я вас слушаюсь!!!`);
} else {
alert("НУУУУУУ...ЛОХАПЕД");
}
