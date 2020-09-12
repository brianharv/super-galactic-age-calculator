export default class User {
  constructor(age, gender) {
    this.age = age;
    this.gender = gender;
    this.mercuryAge = 0;
    this.venusAge = 0;
    this.marsAge = 0;
    this.jupiterAge = 0;
    this.extraLife = 0;
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
    if ((this.gender === "male") && (this.age > 76)) {
      return this.extraLife = this.age - 76;
    } else if ((this.gender === "female") && (this.age > 81)) {
       return this.extraLife = this.age - 81;
    } else if (this.gender === "male") {
      return this.earthExp = 76 - this.age;
    } else if (this.gender === "female") {
      return this.earthExp = 81 - this.age;
    } else {
      return this.earthExp; 
    }
  }


  solarLifeExpect() {
  let solarArray = [.24, .62, 1.88, 11.86];
  let solarExpect = [];
  const that = this;
    if (that.earthExp > 0) {
      solarArray.forEach(function(element) {
           solarExpect.push(Math.round(that.earthExp / element));
      }); return solarExpect;     
      } else if (that.extraLife > 0) {
         solarArray.forEach(function(element) {
           solarExpect.push(Math.round(that.extraLife / element));
         }); return solarExpect;
       } else {
         return false;
       }     
  }
}      
 // solarArray.forEach(function(element) {
     //   Math.round(that.earthExp / element);

//    } else if (that.extraLife > 0) {
//      solarArray.forEach(function(element) {
//        Math.round(that.extraLife / element);
//      });
//    } else {
//      return false;
//   
//