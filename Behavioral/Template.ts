abstract class CarDealer {
    public engine(): string {
         return "1.8 TFSI";
    }

    public body(): string {
         return "Limousine";
    }

    public color(): string {
         return "White";
    }

    public templateMethod(): void {
        console.log(this.engine());
        console.log(this.body());
        console.log(this.color());
    }
}

class ClientOne extends CarDealer {

    public engine(): string {
        return "2.0 TFSI";
    }
}

class ClientTwo extends CarDealer {
    public engine(): string {
         return "1.4 TFSI";
    }

    public body(): string {
         return "Hatchback";
    }

    public color(): string {
         return "Black";
    }
}

(function main() {
    var c1: ClientOne = new ClientOne(),
        c2: ClientTwo = new ClientTwo();

    c1.templateMethod();
    c2.templateMethod();
}());
