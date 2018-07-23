const assert = require("../assert.js");

// eslint-disable-next-line max-statements
(function main() {
  "use strict";

  const NOT_FOUND = -1;

  const me = {
    firstName: "Jane",
    lastName:  "Doe",
  };

  const friend = {
    firstName: "John",
    lastName:  "Smith",
  };

  const mother = {
    firstName: "Amber",
    lastName:  "Doe",
  };

  const father = {
    firstName: "Shane",
    lastName:  "Doe",
  };

  const brother = {
    firstName: "Scott",
    lastName:  "Doe",
  };

  const otherPerson = {
    firstName: "Pete",
    lastName:  "Hanson",
  };

  const people = {
    collection: [me, friend, mother, father],

    add: function(person) {
      if (this.isInvalidPerson(person)) {
        return;
      }

      this.collection.push(person);
    },

    fullName: function(person) {
      assert.show(person.firstName + " " + person.lastName);
    },

    getIndex: function(person) {
      let index = NOT_FOUND;
      this.collection.forEach(function isEqual(aPerson, currentIndex) {
        if (aPerson.firstName === person.firstName &&
            aPerson.lastName  === person.lastName) {
          index = currentIndex;
        }
      });

      return index;
    },

    isInvalidPerson: function(person) {
      return typeof person.firstName !== "string" ||
             typeof person.lastName  !== "string";
    },

    remove: function(person) {
      if (this.isInvalidPerson(person)) {
        return;
      }

      const indexOfPerson = this.getIndex(person);
      // assert.log("indexOfPerson %d", indexOfPerson);
      if (indexOfPerson === NOT_FOUND) {
        return;
      }

      // assert.log("deleting %d", indexOfPerson);
      this.collection.splice(indexOfPerson, 1);
    },

    rollCall: function() {
      this.collection.forEach(this.fullName);
      assert.divider();
    },
  };

  // people.rollCall();
  people.add(brother);
  // people.rollCall();

  // assert.show(people.getIndex(me));
  // assert.show(people.getIndex(friend));
  // assert.show(people.getIndex(mother));
  // assert.show(people.getIndex(father));
  // assert.show(people.getIndex(brother));
  // assert.show(people.getIndex(otherPerson));
  // assert.show(people.getIndex({ firstName: "Amber", lastName: "Doe" }));
  // assert.divider();

  people.add(otherPerson);
  // assert.show(people.getIndex(me));
  // assert.show(people.getIndex(friend));
  // assert.show(people.getIndex(mother));
  // assert.show(people.getIndex(father));
  // assert.show(people.getIndex(brother));
  // assert.show(people.getIndex(otherPerson));
  // assert.divider();

  people.remove(me);
  people.remove(otherPerson);
  people.remove({ firstName: "Amber", lastName: "Doe" });
  people.remove(father);
  // people.rollCall();
  // assert.divider();

  assert.equal("x01", people.getIndex(friend), 0);
  people.remove(friend);
  assert.equal("x02", people.getIndex(friend), -1);
  // assert.divider();

  const userExists = { firrstName: "Pete", lastName: "Hanson" };
  const userNoExists = { firstName: "Amber", lastName: "Doe" };

  people.add(mother);
  people.add(father);
  // people.rollCall();
  assert.equal("x03", people.isInvalidPerson(userExists), true);
  assert.equal("x04", people.isInvalidPerson(userNoExists), false);
  assert.divider();

  // All done
  assert.done();
}());
