// let a = 654;
// console.log(typeof a);
// if (5 < 4) {
//   console.log('true');
// } else {
//   console.log('false');
// }
// for (let i = 1; i <= 10; i++) {
//     console.log(i);
// }
// let name = prompt('hello')
// let age = +prompt('сколько тебе лет?')
// let city = prompt('где ты живешь?')
// alert('привет ' + name + ',' + ' ТЕБЕ ' + age + '  лет, ты живешь в ' + city)
// alert(`hello ${name}, тебе ${age} лет,  ты живешь в ${city}`)
// const fn = (name) => {
//     alert(`hello ${name}`)
// }
// fn('daniyar')

// let user = {
//     name: 'daniyar',
//     surname: 'shakirov',

// }
// user.age = 22
// delete user.name

// console.log(user);

// let num1 = +prompt('введите первое число');
// let num2 = +prompt('введите второе число');

// if (num1 > num2) {
//   alert('первое число большо второго ');
// } else if (num1 < num2) {
//     alert('первое число менше второго')
// } else  {
//     alert('они равны')
// }

// let number = +prompt('введите число');

// if (number  == 0) {
//   alert('число равен нулю');
// } else if (number % 2 == 0) {
//   alert('число четное');
// } else {
//   alert('число нечетрое');
// }


let secretNumber = Math.floor(Math.random() * 11)
 let guess = +prompt('угадай число от 1 до 10')

if(guess == secretNumber) {
    alert ('ты угадал🤑🤑🤑 твое число ' + secretNumber)
} else {
    alert('ты не угадал 🤡🤡🤡')
}

// console.log(secretNumber);

// alert(secretNumber);