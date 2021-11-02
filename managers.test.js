const index = require('./index')

const arteta = index.arteta

describe('Manager tests', () => {
    
    test('that the manager\'s name is Arteta', () => {
        arteta.name = 'Arteta'
        expect(arteta.name).toBe('Arteta')
    })

    test('that sacking someone changes their employment status to false', () => {
        arteta.employmentStatus = true
        arteta.sacked()
        expect(arteta.employmentStatus).toBe(false)
    })

    test('that sacking someone changes their club to empty string', () => {
        arteta.club = 'Arsenal'
        arteta.sacked()
        expect(arteta.club).toBe('')
    })

    test('that winning a trophy increases trophy count by 1', () => {
        arteta.trophyCount = 0
        arteta.winTrophy()
        expect(arteta.trophyCount).toBe(1)
    })

    test('that doing a press conference with no input doesn\'t change media reputation', () => {
        arteta.mediaReputation = 50
        arteta.pressConference()
        expect(arteta.mediaReputation).toBe(50)
    })

    test('that doing a good press conference increases media reputation by 5', () => {
        arteta.mediaReputation = 50
        arteta.pressConference('good')
        expect(arteta.mediaReputation).toBe(55)
    })

    test('that doing a bad press conference decreases media reputation by 5', () => {
        arteta.mediaReputation = 50
        arteta.pressConference('bad')
        expect(arteta.mediaReputation).toBe(45)
    })

    test('that changing club changes the manager\'s club', () => {
        arteta.club = 'Arsenal'
        arteta.changeClub('Spurs')
        expect(arteta.club).toBe('Spurs')
    })
})