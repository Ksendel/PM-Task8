// 1 MultiplyBy
const assert = require('assert').strict;
const multiplyBy = (num, ...args) => args.map(x => x * num)

assert.deepStrictEqual(multiplyBy(2, 3, 4, 5), [6, 8, 10]);

assert.deepStrictEqual(multiplyBy(10, 20, 40, 100, 200, 3), [200, 400, 1000, 2000, 30]);
console.log('Task 1 - Looks good!')

// 2 flatWhite
const newArray = []
const flatWhite = (array) => newArray.concat(...array)

assert.deepStrictEqual(flatWhite(['doppio', ['hot'], 'milk']), ['doppio', 'hot', 'milk']);
assert.deepStrictEqual(flatWhite([['espresso', 'hot'], 'milk']), ['espresso', 'hot', 'milk']);
console.log('Task 2 - Looks good!')

// 3 extendWith
const extendWith = (object1, object2) => ({...object2, ...object1})

assert.deepStrictEqual(extendWith(
    {flatWhite: ['doppio', 'hot', 'milk'], isValid: true},

    {
        isValid:
            false,
        additionalProp: {thisIsGoodProp: 123}
    }
    ),

    {flatWhite: ['doppio', 'hot', 'milk'], isValid: true, additionalProp: {thisIsGoodProp: 123}}
);

assert.deepStrictEqual(extendWith(
    {
        isValid:
            false,
        myMax: 9990
    },

    {isValidos: false, myMin: 8999}
    ),

    {
        isValid:
            false,
        myMax: 9990, isValidos: false, myMin: 8999
    }
);

console.log('Task 3 - Looks good!');

// 4 extendWithEndless

const extendWithEndless = (...objects) => {
    const newObject = objects
        .slice(0, objects.length - 1)
        .reduce((newObject, current) => extendWith(current, newObject), {})
    return extendWith(objects[objects.length - 1], newObject)
}

assert.deepStrictEqual(extendWithEndless(
    {flatWhite: ['doppio', 'hot', 'milk'], isValid: true},

    {
        isValid:
            false,
        additionalProp: {thisIsGoodProp: 123}
    },

    {
        prop3:
            true
    },

    {
        prop4:
            true
    },

    {
        isValid:
            [false, false]
    },
    ),

    {

        flatWhite: ['doppio', 'hot', 'milk'],

        isValid: [false, false],

        additionalProp: {thisIsGoodProp: 123},

        prop3: true,

        prop4: true

    }
);


console.log('Task 4 - Looks good!');
