let room = {
  number: 23,
};

let meetup = {
  title: "Совещание",
  occupiedBy: [{ name: "Иванов" }, { name: "Петров" }],
  place: room,
};

// цикличные ссылки
room.occupiedBy = meetup;
meetup.self = meetup;

/* Функция replacer будет вызвана для каждой пары (key, value), и в первом вызове будет передан специальный «объект-обёртка»: {"": meetup}.

Если мы реализуем только проверку value == meetup, то в результате получим undefined. Чтобы в первом вызове replacer не было удалено свойство, ссылающееся на meetup, нам также нужно добавить проверку key != "". */

let result = JSON.stringify(meetup, function replacer(key, value) {
  return key != "" && value == meetup ? undefined : value;
});

console.log(result);
