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
    const newUser = new User(32, "male");
    expect(newUser.ageMercury()).toEqual(133)
  });
});

describe('ageVenus', () => {

  test('Method will calculate user age on Venus', () => {
    const newUser = new User(32, "male");
    expect(newUser.ageVenus()).toEqual(52);
  });
});

describe('ageMars', () => {

  test('Method will calculate user age on Mars', () => {
    const newUser = new User(32, "male");
    expect(newUser.ageMars()).toEqual(17);
  });
});

describe('ageJupiter', () => {

  test('Method will calculate user age on Jupiter', () => {
    const newUser = new User(32, "male");
    expect(newUser.ageJupiter()).toEqual(3);
  });
});

describe('lifeExpect', () => {
  test('Method will calculate years let to live, in Earth years, for user', () => {
    const newUser = new User(32, "male");
    expect(newUser.lifeExpect()).toBeGreaterThanOrEqualTo(0);
  })
})