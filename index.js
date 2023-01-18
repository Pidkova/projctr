//Прототипна реалізація
//
//
//Предок для всіх
function StarWarsLover(character) {
  this.character = character;
}
StarWarsLover.prototype.tellUrFavoriteSWCharacter = function () {
  return `My favorite Star Wars character is ${this.character}`;
};
//
//Предок для двох
//
function teamYoda(character, favoriteThing) {
  StarWarsLover.call(this, character);
  this.favoriteThing = favoriteThing;
}
teamYoda.prototype = Object.create(StarWarsLover.prototype);
teamYoda.prototype.setUrFavoriteThing = function (favoriteThing) {
  this.favoriteThing = favoriteThing;
};
teamYoda.prototype.tellWhatULikeTheMostInYoda = function () {
  return `Well, I really like his ${this.favoriteThing}`;
};
//
//
function VeganVampire(name, phrase, lover, power, character, favoriteThing) {
  teamYoda.call(this, character, favoriteThing);
  this.name = name;
  this.phrase = phrase;
  this.species = "vampire";
  this.lover = lover;
  this.power = power;
}
VeganVampire.prototype = Object.create(teamYoda.prototype);
VeganVampire.prototype.introduceYourself = function () {
  return `🧛🏽‍♂️ I am ${this.name}`;
};
VeganVampire.prototype.hunt = function () {
  return this.phrase;
};
VeganVampire.prototype.love = function () {
  return this.lover;
};
VeganVampire.prototype.useASuperpower = function () {
  return this.power;
};
//
let guy2 = new VeganVampire(
  "Edward Cullen",
  "I will just go to the forest and find some 🐰🐰🐰🐰!",
  "I'm so in love with Bella that I want to marry her 👰🏻‍♀️",
  "I can read your mind. You totally want to take a nap right now 😴",
  "Yooooodaaaaa",
  "way to talk. It's so cute."
);
//
//console.log(guy2.introduceYourself());
//console.log(guy2.useASuperpower());
//
function Human(name, phrase, lover, hobby, favoriteThing, character) {
  teamYoda.call(this, character, favoriteThing);
  this.name = name;
  this.phrase = phrase;
  this.species = "still a human";
  this.lover = lover;
  this.hobby = hobby;
}
Human.prototype = Object.create(teamYoda.prototype);
Human.prototype.introduceYourself = function () {
  return `👩🏻 I am ${this.name}`;
};
Human.prototype.hunt = function () {
  return this.phrase;
};
Human.prototype.love = function () {
  return this.lover;
};
Human.prototype.tellYourFavoriteHobby = function () {
  return this.hobby;
};
Human.prototype.tellUrFavoriteSWCharacter = function () {
  return `I'm not a fan actually. But everyone loves ${this.character}, right?`;
};
//
let girl = new Human(
  "Bella Swan",
  "What am I to you? A Vampire??? I will just go to McDonald's 🍔🍟🥤.",
  "Everyone thinks that I am in love with Edward 🧛🏻‍♂️, but honestly I just want to become a vampire too 🧛🏻‍♀️",
  "I like to torture Jakob 🧑🏽 emotionally by givig him hope that we can be together, knowing, that is all 💩💩💩",
  "ears, so funny.",
  "Yoda"
);
//
//console.log(girl.introduceYourself());
//console.log(girl.tellUrFavoriteSWCharacter());
//
function Werewolf(name, phrase, lover, creature, character) {
  Werewolf.prototype = Object.create(StarWarsLover.prototype);
  StarWarsLover.call(this, character);
  this.name = name;
  this.phrase = phrase;
  this.species = "werewolf";
  this.lover = lover;
  this.creature = creature;
}
Werewolf.prototype.introduceYourself = function () {
  return `🧑🏽 I am ${this.name}`;
};
Werewolf.prototype.hunt = function () {
  return this.phrase;
};
Werewolf.prototype.love = function () {
  return this.lover;
};
Werewolf.prototype.transform = function () {
  return this.creature;
};
Werewolf.prototype.tellUrFavoriteSWCharacter = function () {
  return `Definetely ${this.character} is the best in Star Wars.`;
};
//
let guy1 = new Werewolf(
  "Jakob.",
  "Oh, yeah! Finally! Let's go get some blood 🩸",
  "I am so f**king in love with Bella 👩🏻. But I think her daughter 👧🏻 will be even better ",
  "Oh, noo! Not again - 🐺. I just put on the new cloths....",
  "Han Solo"
);
//
//console.log(guy1.introduceYourself());
//console.log(guy1.transform());
//
function Vampire(name, phrase, lover, punch, character) {
  StarWarsLover.call(this, character);
  this.name = name;
  this.phrase = phrase;
  this.species = "werewolf";
  this.lover = lover;
  this.punch = punch;
}
Vampire.prototype = Object.create(StarWarsLover.prototype);
Vampire.prototype.introduceYourself = function () {
  `🧑🏽 I am ${this.name}`;
};
Vampire.prototype.hunt = function () {
  return this.phrase;
};
Vampire.prototype.love = function () {
  return this.lover;
};
Vampire.prototype.attack = function () {
  return this.punch;
};
const Volturi = new Vampire(
  `It doesn't matter who I am. I will kill you anyways 🔪🩸`,
  "Mhm, yammy 🤤 ",
  "The only one who really deserves my love is me😍, myself😍 and I😍!!!",
  "BAAAMM 💥",
  "Darth Vader"
);
//
//console.log(Volturi.tellUrFavoriteSWCharacter());
//console.log(Volturi.attack());
//
