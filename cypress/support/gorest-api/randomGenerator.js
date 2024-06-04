class Random { 
     randomEmail() {
        const characters = 'abcdefghijklmnopqrstuvwxyz';
        let result = '';
        const length = 10;
        for (let i = 0; i < length; i++) {
          result += characters.charAt(Math.floor(Math.random() * characters.length));
        }
        return result + '@gmail.com';
      }

      randomGender(){
        const gender = ['male','female']
        let randomGender = gender[Math.floor(Math.random()*gender.length)]
        return randomGender
      }

      randomNameUpdate(){
        const nameLength = 10
        const characters = 'abcdefghijklmnopqrstuvwxyz';
        let randomName = ''
        for (let i = 0; i < nameLength.length; i++) {
            randomName += characters.charAt(Math.floor(Math.random() * characters.length));
          }
      }
      
}

export const random = new Random()