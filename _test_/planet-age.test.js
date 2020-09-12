import User from '../src/js/planet-age.js';

describe('User', () => {

  test('User class constructor creates User with age and gender properties', () => {
    const newUser = new User(32, "male");
    expect(newUser.age).toEqual(32);
    expect(newUser.gender).toBe("male");
  });  


  test('Method will calculate user age on Mercury', () => {
    let newUser = new User(32, "male");
    expect(newUser.ageMercury()).toEqual(133)
  });


  test('Method will calculate user age on Venus', () => {
    let newUser = new User(32, "male");
    expect(newUser.ageVenus()).toEqual(52);
  });


  test('Method will calculate user age on Mars', () => {
    let newUser = new User(32, "male");
    expect(newUser.ageMars()).toEqual(17);
  });


  test('Method will calculate user age on Jupiter', () => {
    let newUser = new User(32, "male");
    expect(newUser.ageJupiter()).toEqual(3);
  });


  test('Method will calculate years let to live, in Earth years, for user', () => {
    let newUser = new User(32, "male");
    expect(newUser.lifeExpect()).toEqual(44);
  });


  test('Method will account for user age older than life expectancy', () => {
    let newUser = new User(85, "male");
    let newUser2 = new User(92,"female");
    newUser.lifeExpect();
    newUser2.lifeExpect();
    expect(newUser.extraLife).toEqual(9);
    expect(newUser2.extraLife).toEqual(11);
  })

  test('Method will return array with life expectancy of user on other planet', () => {
    let newUser = new User(65, "male");
    newUser.lifeExpect();
    expect(newUser.solarLifeExpect()).toEqual([46, 18, 6, 1]);
  });
});