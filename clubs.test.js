const index = require('./index')

const everton = index.everton

describe('Club tests', () => {

    test('that winning a trophy adds 10 to money', () => {
        everton.money = 0
        everton.winTrophy()
        expect(everton.money).toBe(10)
    })

    test('that winning a trophy adds 1 to trophy count', () => {
        everton.trophyCount = 0
        everton.winTrophy()
        expect(everton.trophyCount).toBe(1)
    })

    test('that playing a game adds 1 to games played', () => {
        everton.gamesPlayed = 0
        everton.playGame()
        expect(everton.gamesPlayed).toBe(1)
    })

    test('that playing a game and winning adds 3 to points', () => {
        everton.points = 0
        everton.playGame('win')
        expect(everton.points).toBe(3)
    })

    test('that playing a game and drawing adds 1 to points', () => {
        everton.points = 0
        everton.playGame('draw')
        expect(everton.points).toBe(1)
    })

    test('that gaining a position decreases leaguePosition variable by 1', () => {
        everton.leaguePosition = 10
        everton.gainPosition()
        expect(everton.leaguePosition).toBe(9)
    })

    test('that dropping a position increases leaguePosition variable by 1', () => {
        everton.leaguePosition = 10
        everton.dropPosition()
        expect(everton.leaguePosition).toBe(11)
    })

    test('that gaining a position from 1st place doesn\'t change leaguePosition variable', () => {
        everton.leaguePosition = 1
        everton.gainPosition()
        expect(everton.leaguePosition).toBe(1)
    })

    test('that trying to drop from 20th doesn\'t change position', () => {
        everton.leaguePosition = 20
        everton.dropPosition()
        expect(everton.leaguePosition).toBe(20)
    })

})