interface Strategy {
    car(): void;
}

abstract class Brand implements Strategy {
    public car(): void {
        console.log(this.constructor.name);
    }
}

class Audi extends Brand {}
class Bmw extends Brand {}
class Mercedes extends Brand {}

class Garage {
    private strategy: Strategy;

    constructor(strategy: Strategy) {
        this.strategy = strategy;
    }

    public car(): void {
        this.strategy.car();
    }
}

(function main() {
    var garage: Garage = new Garage(new Audi());
    garage.car();

    garage = new Garage(new Bmw());
    garage.car();

    garage = new Garage(new Mercedes());
    garage.car();
}());
