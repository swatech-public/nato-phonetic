#!/usr/bin/env node

String.prototype.isAlpha = function () {
    return /^[a-zA-Z]*$/.test(this)
}

String.prototype.isWhiteSpace = function () {
    return /^\s+$/.test(this)
}

String.prototype.toArray = function () {
    return this.split('')
}

String.prototype.toPhonetic = function () {
    const alphabet = {
        a: 'Alfa',
        b: 'Bravo',
        c: 'Charlie',
        d: 'Delta',
        e: 'Echo',
        f: 'Foxtrot',
        g: 'Golf',
        h: 'Hotel',
        i: 'India',
        j: 'Juliet',
        k: 'Kilo',
        l: 'Lima',
        m: 'Mike',
        n: 'November',
        o: 'Oscar',
        p: 'Papa',
        q: 'Quebec',
        r: 'Romeo',
        s: 'Sierra',
        t: 'Tango',
        u: 'Uniform',
        v: 'Victor',
        w: 'Whiskey',
        x: 'X-ray',
        y: 'Yankee',
        z: 'Zebra',
    }
    return this.toArray()
        .map((c) => {
            return c.isAlpha() ? alphabet[c] : c.isWhiteSpace() ? '\n' : c
        })
        .join(' ')
}
