export default class User {
  constructor(age, gender, extraLife) {
    this.age = age;
    this.gender = gender;
    this.mercuryAge = 0;
    this.venusAge = 0;
    this.marsAge = 0;
    this.jupiterAge = 0;
    this.extraLife = extraLife;
    this.earthExp = 0;
    
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

  lifeExpect() {
    let lifeEx;
    if ((this.gender === "male") && (this.age > 76)) {
      this.extraLife = this.age - 76;
    } else if ((this.gender === "female") && (this.age > 81)) {
      this.extraLife = this.age - 81;
    } else if (this.gender === "male") {
      lifeEx = 76 - this.age;
    } else if (this.gender === "female") {
      lifeEx = 81 - this.age;
    } 
    return lifeEx += this.earthExp;
  }
}

/*
let solarArray = [.24, .62, 1.88, 11.86];
    if (this.earthExp > 0) {
      solarArray.forEach(function(element) {
        this.earthExp / element;
      });
    } else if (this.extraLife > 0) {
      solarArray.forEach(function(element) {
        this.extraLife / element;
      });
    } else {
      return false;
    }
    return solarArray;
    // let solarArray = [.24, .62, 1.88, 11.86];
    */