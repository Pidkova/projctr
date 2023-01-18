// Є предком для всіх класів

class StarWarsLover {
  constructor(character) {
    this.character = character;
  }
  tellUrFavoriteSWCharacter = () =>
    console.log(`My favorite Star Wars character is ${this.character}`);
}

//Є предком для двох класів
class teamYoda extends StarWarsLover {
  constructor(favoriteThing, character) {
    super(character);
    this.favoriteThing = favoriteThing;
  }
  tellWhatULikeTheMostinYoda = () =>
    console.log(`Well, I really like his ${this.favoriteThing}`);
}

class VeganVampire extends teamYoda {
  #age;
  constructor(name, phrase, lover, power, character, age, favoriteThing) {
    super(favoriteThing, character);

    this.name = name;
    this.phrase = phrase;
    this.species = "vampire";
    this.lover = lover;
    this.power = power;
    this.#age = age;
  }
  introduceYourself = () => console.log(`🧛🏽‍♂️ I am ${this.name}`);
  hunt = () => console.log(this.phrase);
  love = () => console.log(this.lover);
  useASuperpower = () => console.log(this.power);
  tellAge = () =>
    console.log(`I look like I'm 17, but actualy I am ....${this.#age}`);
}
const guy2 = new VeganVampire(
  "Edward Cullen",
  "I will just go to the forest and find some 🐰🐰🐰🐰!",
  "I'm so in love with Bella that I want to marry her 👰🏻‍♀️",
  "I can read your mind. You totally want to take a nap right now 😴",
  "Yooooodaaaaa",
  104,
  "way to talk. It's so cute."
);

class Human extends teamYoda {
  #religion;
  constructor(name, phrase, lover, hobby, favoriteThing, character, religion) {
    super(character, favoriteThing);
    this.name = name;
    this.phrase = phrase;
    this.species = "still a human";
    this.lover = lover;
    this.hobby = hobby;
    this.#religion = religion;
  }
  introduceYourself = () => console.log(`👩🏻 I am ${this.name}`);
  hunt = () => console.log(this.phrase);
  love = () => console.log(this.lover);
  tellYourFavoriteHobby = () => console.log(this.hobby);
  tellUrFavoriteSWCharacter = () =>
    console.log(
      `I'm not a fan actually. But everyone loves ${this.character}, right?`
    );
  tellUrReligion = () => console.log(`I am ${this.#religion}`);
}
const girl = new Human(
  "Bella Swan",
  "What am I to you? A vampire??? I will just go to McDonald's 🍔🍟🥤.",
  "Everyone thinks that I am in love with Edward 🧛🏻‍♂️, but honestly I just want to become a vampire too 🧛🏻‍♀️",
  "I like to torture Jakob 🧑🏽 emotionally by givig him hope that we can be together, knowing, that is all 💩💩💩",
  "ears, so funny.",
  "Yoda",
  "pastafarian 🍝"
);

class Werewolf extends StarWarsLover {
  #color;
  constructor(name, phrase, lover, creature, character, color) {
    super(character);
    this.name = name;
    this.phrase = phrase;
    this.species = "werewolf";
    this.lover = lover;
    this.creature = creature;
    this.#color = color;
  }
  introduceYourself = () => console.log(`🧑🏽 I am ${this.name}`);
  hunt = () => console.log(this.phrase);
  love = () => console.log(this.lover);
  transform = () => console.log(this.creature);
  tellUrFavoriteSWCharacter = () =>
    console.log(`Definitely ${this.character} is the best in Star Wars.`);
  tellUrFavoriteColor = () => console.log(this.#color);
}
const guy1 = new Werewolf(
  "Jakob.",
  "Oh, yeah! Finally! Let's go get some blood 🩸",
  "I am so f**king in love with Bella 👩🏻. But I think her daughter 👧🏻 will be even better ",
  "Oh, noo! Not again - 🐺. I just put on the new cloths....",
  "Han Solo",
  "I like pink 🌸 😌"
);

class Vampire extends StarWarsLover {
  #joke;
  constructor(name, phrase, lover, punch, character, joke) {
    super(character);
    this.name = name;
    this.phrase = phrase;
    this.species = "volturi vampire";
    this.lover = lover;
    this.punch = punch;
    this.#joke = joke;
  }
  introduceYourself = () => console.log(this.name);
  kill = () => console.log(this.phrase);
  love = () => console.log(this.lover);
  attack = () => console.log(this.punch);
  tellAJoke = () => console.log(this.#joke);
}

const volturi = new Vampire(
  `It doesn't matter who I am. I will kill you anyways 🔪🩸`,
  "Mhm, yammy 🤤 ",
  "The only one who really deserves my love is me😍, myself😍 and I😍!!!",
  "BAAAMM 💥",
  "Darth Vader",
  "What kind of witch 🧙🏻‍♀️ goes to the beach 🏝? A sandwich 🥪. HA-HA-HA"
);
/*
volturi.introduceYourself();
volturi.kill();
volturi.love();
volturi.attack();
volturi.tellAJoke();
*/
/*
guy1.introduceYourself();
guy1.hunt();
guy1.love();
guy1.transform();
guy1.tellUrFavoriteSWCharacter();
guy1.tellUrFavoriteColor();
*/
/*
girl.introduceYourself();
girl.hunt();
girl.love();
girl.tellYourFavoriteHobby();
girl.tellUrReligion();
girl.tellUrFavoriteSWCharacter();
girl.tellWhatULikeTheMostinYoda();
*/
/*
guy2.introduceYourself();
guy2.hunt();
guy2.love();
guy2.tellAge();
console.log(guy2.age);
guy2.useASuperpower();
guy2.tellUrFavoriteSWCharacter();
guy2.tellWhatULikeTheMostinYoda();
*/
