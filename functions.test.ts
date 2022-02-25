const {shuffleArray} = require('./utils')

const {bots} = require('./data')

describe('shuffleArray should', () => {
    test('returns an array(object)', () => {
        expect(typeof shuffleArray(bots)).toBe('object')
    })
    test('keeps original length', () => {
        expect(shuffleArray(bots).length).toBe(bots.length)
    })
})