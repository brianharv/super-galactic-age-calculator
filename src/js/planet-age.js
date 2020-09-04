export default class User {
  constructor(age, gender) {
    this.age = age;
    this.gender = gender
    this.mercuryAge = 0;
    this.venusAge = 0;
    this.marsAge = 0
  }

  ageMercury() {
  let ageConvert = Math.round(this.age / .24);
    return ageConvert += this.mercuryAge;
  }

  ageVenus() {
    let ageConvert = Math.round(this.age / .62);
    return ageConvert += this.venusAge;  
  }

  ageMars() {
    let ageConvert = Math.round(this.age / 1.88);
    return ageConvert += this.marsAge; 
  }

  ageJupiter() {
    let ageConvert = Math.round(this.age / 11.86);
    return ageConvert += this.jupiterAge; 
  }  
}