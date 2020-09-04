import User from '../src/js/planet-age.js';

describe('User', () => {

  test('User class constructor creates User with age and gender properties', () => {
    const newUser = new User(32, "male");
    expect(newUser.age).toEqual(32);
  });
});