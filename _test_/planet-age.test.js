import User from '../src/js/planet-age.js';
import { TestScheduler } from 'jest';

describe('User', () => {

  test('User class constructor creates User with age and gender properties', () => {
    let newUser = new User(age, gender);
    expect(newUser).toBeInstanceOf(User);
  });
});