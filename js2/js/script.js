var namesArr = [];

for (i=0; i<5; i++){
  var names = prompt('Введите имя');
  namesArr.push(names);
}

console.log(namesArr);

var result = 0;
var userName = prompt('Введите имя пользователя ');

for ( var i = 0; i < namesArr.length; i++) {
  if (namesArr[i] == userName) { 
  	++result;
  }
}

if (result > 0) { 
 alert (userName + ', вы успешно вошли');
} else {
 alert ('ошибка');
}







