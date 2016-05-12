class Car {
    private name: string;

    constructor(name: string) {
        this.name = name;
    }

    get carType() : string {
        return this.name;
    }

    set carType(name: string) {
        this.carType = name;
    }
}

class Customer {
    private car: Car;

    constructor(state: Car) {
        this.car = state;
    }

    get decision(): Car {
        return this.car;
    }

    set decision(car: Car) {
        console.log("State :: ", car);
        this.car = car;
    }

    public createMemento(): Memento {
        console.log("Customer first decision is Audi");
        return new Memento(this.car);
    }

    public setMemento(memento: Memento) {
        console.log("Set customer decision");
        this.decision = memento.decision;
    }
}

class Memento {
    private name: Car;

    constructor (name: Car) {
        this.name = name;
    }

    get decision(): Car {
        console.log("Customer's memento(Audi)");
        return this.name;
    }
}

class CarDealer {
    private name: Memento;

    get memento(): Memento {
        return this.name;
    }

    set memento(name: Memento) {
        this.name = name;
    }
}

(function main() {
    var car: Car = new Car("Audi"),
        customer: Customer = new Customer(car),
        careTaker: CarDealer = new CarDealer();

    careTaker.memento = customer.createMemento();
    customer.decision = new Car("Customer second choose is BMW");

    customer.setMemento(careTaker.memento);
}());
