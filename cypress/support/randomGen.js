export class Random2 {
  randomEmail() {
    const characters = 'abcdefghijklmnopqrstuvwxyz'
    let result = ''
    const length = 10
    for (let i = 0; i <= length; i++) {
      result += characters.charAt(Math.floor(Math.random() * characters.length))
    }
    return result + '@gmail.com'
  }

  randomGender() {
    const gender = ['male','female'];
    let result = gender[Math.floor(Math.random() * gender.length)];
    return result;
  }
}

export const random = new Random2()
