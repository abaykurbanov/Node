const readline = require('readline');
const fs = require('fs');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});


rl.question('Введите ваше имя: ', (firstName) => {
  rl.question('Введите вашу фамилию: ', (lastName) => {
    rl.question('Введите вашу дату рождения (в формате ДД-ММ-ГГГГ): ', (birthdate) => {
      rl.question('Введите имя файла для сохранения информации: ', (filename) => {
       
        const userInfo = {
          firstName,
          lastName,
          birthdate
        };

       
        const jsonData = JSON.stringify(userInfo);


        fs.writeFile(filename, jsonData, (err) => {
          if (err) {
            console.error('Ошибка при записи файла:', err);
          } else {
            console.log('Данные успешно записаны в файл', filename);
          }

          rl.close();
        });
      });
    });
  });
});