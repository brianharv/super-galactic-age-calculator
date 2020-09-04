export default class User {
  constructor(age, gender) {
    this.age = age;
    this.gender = gender
    this.mercuryAge = 0;
  }

  ageMercury() {
  let ageConvert = Math.round(this.age / .24);
    return ageConvert += this.mercuryAge;
  }

  ageVenus() {
    
  }
}