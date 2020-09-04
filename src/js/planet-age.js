export default class User {
  constructor(age, gender) {
    this.age = age;
    this.gender = gender
    this.mercuryAge = 0;
  }
  ageMercury() {
  let ageConvert = this.age / .24;
  System.out.println(Math.round(ageConvert));
    return ageConvert += this.mercuryAge;
  }
}