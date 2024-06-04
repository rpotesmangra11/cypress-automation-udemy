function randomNameUpdate(){
  const nameLength = 10
  const characters = 'abcdefghijklmnopqrstuvwxyz';
  let randomName = ''
  for (let i = 0; i < nameLength; i++) {
      randomName += characters.charAt(Math.floor(Math.random() * characters.length));
    }
    console.log(randomName)
}

randomNameUpdate()