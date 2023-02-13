import promotes from "./promotes"

let calculator = (() => {
    const levelStat = (rate, stat) => { // Simulate one level up
        const chance = Math.floor(Math.random() * 100)
        if (chance <= rate) {
            if(rate <= 100) {
                return (stat + 1)
            } else {
                const specialChance = Math.floor(Math.random * 100)
                if (specialChance <= (rate - 100)) {
                    return (stat + 2)
                } else {
                    return (stat + 1)
                }
            }
        }
        return stat;
    }
    
    const levelStatTwenty = (rate, stat, cap) => { // Simulate 20 level ups
        let newStat = stat;
        for (let i = 0; i < 19; i += 1) {
            newStat = levelStat(rate, newStat) 
        }
        if (newStat > cap) {
            return cap;
        }
        return newStat;
    }
    
    const averageStat = (rate, stat, x, cap) => { // Simulate x number of level ups to 20, and return the average of those level ups for a single stat
        let average = [];
        for (let i = 0; i < x; i += 1) {
            const temp = levelStatTwenty(rate, stat, cap)
            average.push(temp)
        }
        average = average.reduce((next, total) => next + total)
        return Math.floor(average / x);
    }

    const averageAllStats = (character, stats, promote) => { // Simulate x number of level ups to 20 and return an object simulating all stats at level 20
        let averagedClass = {
            name: promote.name,
            HP: averageStat((character.Hp + promote.Hp), stats.HP, 100, (promote.caps.Hp)),
            Str: averageStat((character.Str + promote.Str), stats.Str, 100, (promote.caps.Str + character.maxMod.Str)),
            Mag: averageStat((character.Mag + promote.Mag), stats.Mag, 100, (promote.caps.Mag + character.maxMod.Mag)),
            Dex: averageStat((character.Dex + promote.Dex), stats.Dex, 100, (promote.caps.Dex + character.maxMod.Dex)),
            Spd: averageStat((character.Spd + promote.Spd), stats.Spd, 100, (promote.caps.Spd + character.maxMod.Spd)),
            Def: averageStat((character.Def + promote.Def), stats.Def, 100, (promote.caps.Def + character.maxMod.Def)),
            Res: averageStat((character.Res + promote.Res), stats.Res, 100, (promote.caps.Res + character.maxMod.Res)),
            Lck: averageStat((character.Lck + promote.Lck), stats.Lck, 100, (promote.caps.Lck + character.maxMod.Lck)),
            Bld: averageStat((character.Bld + promote.Bld), stats.Bld, 100, (promote.caps.Bld)),
        }
        let newRating = 0;
        for (let i = 2; i < Object.keys(averagedClass).length; i += 1) {
            newRating += averagedClass[Object.keys(averagedClass)[i]]
        }
        console.log(averagedClass.HP)
        averagedClass.rating = newRating;
        return averagedClass;
    }

    const averageAllClasses = (character, stats) => { // Simulate every valid class + character combination at level 20
        let allClasses = [];
        const keys = Object.keys(promotes);
        for (let i = 0; i < keys.length; i += 1) {
            if (!promotes[keys[i]].unique) {
                allClasses.push(averageAllStats(character, stats, promotes[keys[i]]));
            } else {
                if (promotes[keys[i]].unique) {
                    if (character.unique === promotes[keys[i]].name) {
                        allClasses.push(averageAllStats(character, stats, promotes[keys[i]]));
                    }
                }
            }
        }
        return allClasses;
    }

    return averageAllClasses
})();

export default calculator;