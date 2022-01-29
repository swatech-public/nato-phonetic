#!/usr/bin/env node

class Phonetic {
  natoPhoneticAlphabet = {
    a: "Alfa",
    b: "Bravo",
    c: "Charlie",
    d: "Delta",
    e: "Echo",
    f: "Foxtrot",
    g: "Golf",
    h: "Hotel",
    i: "India",
    j: "Juliet",
    k: "Kilo",
    l: "Lima",
    m: "Mike",
    n: "November",
    o: "Oscar",
    p: "Papa",
    q: "Quebec",
    r: "Romeo",
    s: "Sierra",
    t: "Tango",
    u: "Uniform",
    v: "Victor",
    w: "Whiskey",
    x: "X-ray",
    y: "Yankee",
    z: "Zebra",
  };

  constructor(str) {
    this.str = str;
  }

  toArray() {
    return this.str.split("");
  }

  charToPhonetic(c) {
    return /^[a-zA-Z]$/.test(c) ? this.natoPhoneticAlphabet[c.toLowerCase()] : c;
  }

  toPhonetic() {
    return this.toArray()
      .map((c) => this.charToPhonetic(c))
      .join(" ");
  }
}

module.exports = Phonetic;
