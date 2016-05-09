interface Car {
    method(param?: any) : void;
}

class Audi implements Car {
    method = (param?: any) => {
        return "You created Audi. Great!";
    }
}

class Bmw implements Car {
    method = (param?: any) => {
        return "You created Bmw. Good job!";
    }
}

class ProductFactory {
    public static createProduct(type: string) : Car {
        if (type === "Audi") {
            return new Audi();
        } else if (type === "Bmw") {
            return new Bmw();
        }

        return null;
    }
}

(function main() {
    var audi: Car = ProductFactory.createProduct("Audi");
    var bmw: Car = ProductFactory.createProduct("Bmw");

    console.log(audi.method());
    console.log(bmw.method());
}());
