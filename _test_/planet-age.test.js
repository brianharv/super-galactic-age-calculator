import User from '../src/js/planet-age.js';

describe('User', () => {

  test('User class constructor creates User with age and gender properties', () => {
    const newUser = new User(32, "male");
    expect(newUser.age).toEqual(32);
    expect(newUser.gender).toBe("male");
  });  
});

describe('ageMercury', () => {

  test('Method will calculate user age on Mercury', () => {
    let newUser = new User(32, "male");
    expect(newUser.ageMercury()).toEqual(133)
  });
});

describe('ageVenus', () => {

  test('Method will calculate user age on Venus', () => {
    let newUser = new User(32, "male");
    expect(newUser.ageVenus()).toEqual(52);
  });
});

describe('ageMars', () => {

  test('Method will calculate user age on Mars', () => {
    let newUser = new User(32, "male");
    expect(newUser.ageMars()).toEqual(17);
  });
});

describe('ageJupiter', () => {

  test('Method will calculate user age on Jupiter', () => {
    let newUser = new User(32, "male");
    expect(newUser.ageJupiter()).toEqual(3);
  });
});

describe('lifeExpect', () => {
  test('Method will calculate years let to live, in Earth years, for user', () => {
    let newUser = new User(32, "male");
    expect(newUser.lifeExpect()).toEqual(44);
  });
});

describe('lifeExpect', () => {
  test('Method will account for user age older than life expectancy', () => {
    let newUser = new User(85, "male", 9);
    let newUser2 = new User(92,"female", 11);
    expect(newUser.extraLife).toEqual(9);
    expect(newUser2.extraLife).toEqual(11);
  })
})

describe('lifeExpect', () => {
  test('Method will show life expectancy of user on various planets', () => {
    let newUser = new User(65, "male", 11);
    expect(newUser.lifeExpect(65).ageVenus(11)).toEqual(18);
  })
})