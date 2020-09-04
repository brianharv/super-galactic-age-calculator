# _Super Galactic Age Calculator_

#### _Application that determines your age according to a planet's solar year cycle, 9/04/20_

#### By _**Brian Harvey**_

## Description

_Each planet in the solar system has a different length solar year. This application will determine your age and life expectancy for Mars, Venus, Jupiter, and Mercury in relative solar years._

## Setup/Installation Requirements

* _Clone repo [from GitHub](https://github.com/brianharv/super-galactic-age-calculator)._
* _Open project folder in VS Code or other code editor._
* _Drag index.html to web browser or copy file URL and past in web browser URL bar._

__

## Specs
Spec 1: <br>
Describe: class User <br>
Test: User class constructor creates User with age and gender properties. <br>
Code: let newUser = new User(age, gender);
Expect: (newUser).toBeInstanceOf(User). <br>
<hr>
Spec 2: <br>
Describe: ageMercury <br>
Test: Method will calculate user's age in plant years. <br>
Code: let newUser = new User(age, gender); <br>
            newUser.ageMercury(); <br>
Expect: (newUser.age).toBe(newUser.age / 0.24); <br>
<hr>
Spec 3: <br>
Describe: ageVenus <br>
Test: Method will calculate user's age in plant years. <br>
Code: let newUser = new User(age, gender); <br>
            newUser.ageVenus(); <br>
Expect: (newUser.age).toBe(newUser.age / .62); <br>
<hr>
Spec 4: <br>
Describe: ageMars <br>
Test: Method will calculate user's age in plant years. <br>
Code: let newUser = new User(age, gender); <br>
            newUser.ageMars(); <br>
Expect: (newUser.age).toBe(newUser.age / 1.88); <br>
<hr>
Spec 5: <br>
Describe: ageJupiter <br>
Test: Method will calculate user's age in plant years. <br>
Code: let newUser = new User(age, gender); <br>
            newUser.ageJupiter(); <br>
Expect: (newUser.age).toBe(newUser.age / 11.86); <br>
<hr>





## Known Bugs

_No known bugs_

## Support and contact details

_For any questions or feedback, feel free to [contact me](mailto:brian.harv3y@gmail.com)._

## Technologies Used

_{Tell me about the languages and tools you used to create this app. Assume that I know you probably used HTML and CSS. If you did something really cool using only HTML, point that out.}_

### License

*_This application operates under the GPL license._*

Copyright (c) 2016 **_Brian Harvey_**