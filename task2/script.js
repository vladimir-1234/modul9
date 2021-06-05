const consoleLog = document.querySelector('#consoleLog');

consoleLog.addEventListener('click', () => {
	alert('Метод для вывода сообщений в веб-консоль');
})
const consoleLog1 = document.querySelector('#consoleLog1');
consoleLog1.innerHTML = 'Пример использования команды console.log';

const alert1 = document.querySelector('#alert1');
alert1.innerHTML = 'Пример использования команды alert';

const prompt1 = document.querySelector('#prompt1');
prompt1.innerHTML = 'Пример использования команды prompt';