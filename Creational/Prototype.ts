interface Prototype {
    clone(): Prototype;
    toString(): string;
}

abstract class Name {
    toString(): string {
        return "This is object: " + this.constructor.name;
    }
}

class Audi extends Name implements Prototype {
    clone() : Prototype {
        return new Audi();
    }
}

class Bmw extends Name implements Prototype {
    clone() : Prototype {
        return new Bmw();
    }
}

class Mercedes extends Name implements Prototype {
    clone() : Prototype {
        return new Mercedes();
    }
}

class VehicleBuilder {
    private prototypeMap: { [s: string]: Prototype; } = {};

    constructor() {
        this.prototypeMap['vehicle1'] = new Audi();
        this.prototypeMap['vehicle2'] = new Bmw();
        this.prototypeMap['vehicle3'] = new Mercedes();
    }

    build(s: string): Prototype {
        return this.prototypeMap[s].clone();
    }
}

(function main() {
    var builder : VehicleBuilder = new VehicleBuilder();
    var i = 0;
    var vehicle = "vehicle";
    for (i = 1; i <= 3; i += 1) {
        console.log(builder.build(vehicle + i).toString());
    }
}());
