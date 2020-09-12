import User from '../src/js/planet-age.js';

describe('User', () => {
  let newUser = new User(32, "male");

  test('User class constructor creates User with age and gender properties', () => {
    expect(newUser.age).toEqual(32);
    expect(newUser.gender).toBe("male");
  });  


  test('Method will calculate user age on Mercury', () => {
    expect(newUser.ageMercury()).toEqual(133)
  });


  test('Method will calculate user age on Venus', () => {
    expect(newUser.ageVenus()).toEqual(52);
  });


  test('Method will calculate user age on Mars', () => {
    expect(newUser.ageMars()).toEqual(17);
  });


  test('Method will calculate user age on Jupiter', () => {
    expect(newUser.ageJupiter()).toEqual(3);
  });


  test('Method will calculate years let to live, in Earth years, for user', () => {
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
    let newUser2 = new User(92, "female");
    newUser.lifeExpect();
    newUser2.lifeExpect();
    expect(newUser.solarLifeExpect()).toEqual([46, 18, 6, 1]);
    expect(newUser2.solarLifeExpect()).toEqual([46, 18, 6, 1]);
  });
});