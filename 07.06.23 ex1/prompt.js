// function imya(name) {
//     return new Promise((good, bad) => {
//       if (typeof name !== 'string') {
//         bad(new Error('Имя должно быть строкой'));
//       } else {
//         good(`Привет, ${name}!`);
//       }
//     });
//   }
  

//   imya("Абай")
//     .then((message) => {
//       console.log(message);
//     })
//     .catch((error) => {
//       console.error(error);
//     });

const readline = require('readline');
const fs = require('fs');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// Запрашиваем у пользователя имя, фамилию и дату рождения
rl.question('Введите ваше имя: ', (firstName) => {
  rl.question('Введите вашу фамилию: ', (lastName) => {
    rl.question('Введите вашу дату рождения (в формате ДД-ММ-ГГГГ): ', (birthdate) => {
      rl.question('Введите имя файла для сохранения информации: ', (filename) => {
        // Создаем объект с данными пользователя
        const userInfo = {
          firstName,
          lastName,
          birthdate
        };

        // Преобразуем данные пользователя в формат JSON
        const jsonData = JSON.stringify(userInfo);

        // Записываем данные в указанный файл
        fs.writeFile(filename, jsonData, (err) => {
          if (err) {
            console.error('Ошибка при записи файла:', err);
          } else {
            console.log('Данные успешно записаны в файл', filename);
          }

          // Закрываем интерфейс чтения/записи
          rl.close();
        });
      });
    });
  });
});