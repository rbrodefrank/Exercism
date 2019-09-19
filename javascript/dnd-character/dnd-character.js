//
// This is only a SKELETON file for the 'DnD Character' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const abilityModifier = (num) => {
  if (num < 3) throw Error('Ability scores must be at least 3');
  if (num > 18) throw Error('Ability scores can be at most 18')
  return Math.floor((num - 10) / 2)
};

export class Character {
  static d6() {
    return Math.floor(Math.random() * 6 + 1);
  }

  static rollAbility() {
    let roll1 = Character.d6();
    let roll2 = Character.d6();
    let roll3 = Character.d6();
    let lest = Character.d6();

    let findLesser = (roll) => {
      if (lest > roll) {
        let temp = lest;
        lest = roll;
        return temp;
      }
      return roll;
    }

    roll1 = findLesser(roll1);
    roll2 = findLesser(roll2);
    roll3 = findLesser(roll3);

    let ability = roll1 + roll2 + roll3;
    return ability;
  }

  constructor() {
    this.strength = Character.rollAbility();
    this.dexterity = Character.rollAbility();
    this.constitution = Character.rollAbility();
    this.intelligence = Character.rollAbility();
    this.wisdom = Character.rollAbility();
    this.charisma = Character.rollAbility();
    this.hitpoints = 10 + abilityModifier(this.constitution);
  }
}
