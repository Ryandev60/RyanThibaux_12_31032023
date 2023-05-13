export class DataHello {
    constructor(firstName) {
        this.firstName = firstName;
    }

}

export class DataActivity {
    constructor(calories, kilogram, day, ) {
        this.calories = calories;
        this.kilogram = kilogram;
        this.day = day;
    }

}

export class DataAverageSessions {
    constructor(day, sessionLength) {
        this.day = day;
        this.sessionLength = sessionLength;
    }

}

export class DataPerformance {
    constructor(kind, value) {
        this.kind = kind
        this.value = value
    }

}

export class DataScore {
    constructor(score, fill) {
        this.score = score
        this.fill = fill

    }
}

export class DataNutrition {
    constructor(name,value,img,unit) {
        this.name = name
        this.value = value
        this.img = img
        this.unit = unit
    }
}
