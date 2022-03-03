const messages = [
  "Juan",
  "Alejandro",
  "Laura",
  "Diego",
  "cesar",
  "Freddy",
  "Alex",
];

const randomMsg = () =>{
  const message = messages[Math.floor(Math.random() * messages.length)];
  console.log(message);
}

module.exports = {randomMsg}