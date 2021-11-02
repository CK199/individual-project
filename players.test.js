const index = require('./index')

// Player class tests

const salah = index.salah

describe('Player tests', () => {

    test('that strength training increases strength by 2 when work rate is over 50', () => {
        salah.workRate = 55
        salah.strength = 50
        salah.trainStrength()
        expect(salah.strength).toBe(52)
    })

    test('that strength training increases strength by 1 when work rate is not over 50', () => {
        salah.workRate = 45
        salah.strength = 50
        salah.trainStrength()
        expect(salah.strength).toBe(51)
    })

    test('that pace training increases pace by 2 when work rate is over 50', () => {
        salah.workRate = 55
        salah.pace = 50
        salah.trainPace()
        expect(salah.pace).toBe(52)
    })

    test('that pace training increases pace by 1 when work rate is not over 50', () => {
        salah.workRate = 45
        salah.pace = 50
        salah.trainPace()
        expect(salah.pace).toBe(51)
    })

    test('that resting increases energy by 10', () => {
        salah.energy = 10
        salah.rest()
        expect(salah.energy).toBe(20)
    })

    test('that work rate training decreases energy by 2 when work rate is not over 50', () => {
        salah.workRate = 45
        salah.energy = 10
        salah.trainWorkRate()
        expect(salah.energy).toBe(8)
    })

    test('that work rate training decreases energy by 1 when work rate is over 50', () => {
        salah.workRate = 55
        salah.energy = 10
        salah.trainWorkRate()
        expect(salah.energy).toBe(9)
    })

})