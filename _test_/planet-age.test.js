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
    expect(newUser.ageVenus()).toEqual(52)
  })
})