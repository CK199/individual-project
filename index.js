// Players class

class Player {
    constructor(name, pace, strength, age, workRate, energy, value) {
        this.name = name
        this.pace = pace
        this.strength = strength
        this.age = age
        this.workRate = workRate
        this.league = 'Premier League'
        this.gender = 'Male'
        this.energy = energy
        this.value - value
    }

    trainPace() {
        if (this.workRate > 50) {
            this.pace += 2
            this.energy--
        } else {
            this.pace++
            this.energy--
        }
    }

    trainStrength() {
        if (this.workRate > 50) {
            this.strength += 2
            this.energy--
        } else {
            this.strength++
            this.energy--
        }
    }

    trainWorkRate() {
        if (this.workRate > 50) {
            this.workRate++
            this.energy--
        } else {
            this.workRate++
            this.energy -= 2
        }
    }

    rest() {
        this.energy += 10
    }
}


// Players: (name, pace, strength, age, workRate, energy, value)

const ronaldo = new Player('Ronaldo', 75, 85, 36, 80, 35, 50)
const salah = new Player('Salah', 85, 30, 29, 50, 65, 200)
const deBruyne = new Player('De Bruyne', 45, 60, 30, 60, 70, 100)
const richarlison = new Player('Richarlison', 85, 15, 24, 80, 45, 50)
const saka = new Player('Saka', 90, 25, 21, 90, 65, 120)

// Clubs class

class Club {
    constructor(name, trophyCount, leaguePosition, money, gamesPlayed, points) {
        this.name = name
        this.trophyCount = trophyCount
        this.leaguePosition = leaguePosition
        this.money = money
        this.league = 'Premier League'
        this.gamesPlayed = gamesPlayed
        this.points = points
    }

    winTrophy() {
        this.trophyCount++
        this.money += 10
    }

    playGame(result) {
        this.gamesPlayed++
        if (result === 'win') {
            this.points += 3
            console.log('Won the game.')
        } else if (result === 'draw') {
            this.points++
            console.log('Drew the game.')
        } else if (result === 'lose') {
            console.log('Lost the game.')
        } else {
            console.log('No result specified.')
        }
            
    }

    gainPosition() {
        if (this.leaguePosition > 1 && this.leaguePosition < 21) {
            this.leaguePosition--
        } else if (this.leaguePosition === 1) {
            console.log('Already in 1st place')
        } else {
            console.log('ERROR: INVALID POSITION')
        }
    }

    dropPosition() {
        if (this.leaguePosition < 20 && this.leaguePosition > 0) {
            this.leaguePosition++
        } else if (this.leaguePosition === 20) {
            console.log('Already in 20th place')
        } else {
            console.log('ERROR: INVALID POSITION')
        }
    }

}

// Clubs: (name, trophyCount, leaguePosition, money, gamesPlayed, points)

const everton = new Club('Everton', 12, 10, 5, 13, 22)
const liverpool = new Club('Liverpool', 30, 1, 75, 13, 30)
const chelsea = new Club('Chelsea', 20, 3, 90, 13, 28)
const arsenal = new Club('Arsenal', 25, 14, 30, 13, 16)
const manCity = new Club('Man City', 16, 2, 500, 13, 29)

// Managers class

class Manager {
    constructor(name, age, club, employmentStatus, trophyCount, mediaReputation) {
        this.name = name
        this.age = age
        this.club = club
        this.employmentStatus = employmentStatus
        this.trophyCount = trophyCount
        this.mediaReputation = mediaReputation
    }

    sacked() {
        this.club = ''
        this.employmentStatus = false
    }

    winTrophy() {
        this.trophyCount++
    }

    pressConference(outcome) {
        if (outcome === 'good') {
            this.mediaReputation += 5
            console.log('Press conference went well.')
        } else if (outcome === 'bad') {
            this.mediaReputation -= 5
            console.log('Press conference went badly.')
        } else {
            console.log('Press conference happened.')
        }
    }

    changeClub(newClub) {
        this.club = newClub
    }

}

// Managers: (name, age, club, employmentStatus, trophyCount, mediaReputation) 

const mourinho = new Manager('Mourinho', 65, '', false, 40, 15)
const guardiola = new Manager('Guardiola', 52, 'Man City', true, 28, 75)
const arteta = new Manager('Arteta', 40, 'Arsenal', true, 0, 75)
const benitez = new Manager('Benitez', 59, 'Everton', true, 12, 60)
const tuchel = new Manager('Tuchel', 47, 'Chelsea', true, 4, 90)

module.exports = {
    Player,
    ronaldo,
    salah,
    deBruyne,
    richarlison,
    saka,    
    Club,
    everton,
    liverpool,
    chelsea,
    arsenal,
    manCity,
    Manager,
    mourinho,
    guardiola,
    arteta,
    benitez,
    tuchel
}