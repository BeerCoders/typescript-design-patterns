interface Builder {
    build();
    getType();
}

class Engine {
    private name: string;

    setType(name) {
        this.name = name;
    }
    render() {
        return this.name;
    }
}

abstract class EngineBuilder implements Builder {
    public engine: Engine;

    build() {
        this.engine.setType(this.constructor.name);
    }
    getType() {
        return this.engine;
    }
}

class Diesel extends EngineBuilder  {

    constructor() {
        super();
        this.engine = new Engine();
    }

}

class Petrol extends EngineBuilder  {

    constructor() {
        super();
        this.engine = new Engine();
    }
}

class Director{
    private builder: Builder;

    constructor(builder: Builder) {
        this.builder = builder;
    }
    construct() {
        this.builder.build();
    }
    getEngine() {
        return this.builder.getType();
    }
}

(function main() {
	var diesel : Diesel = new Diesel();
	var petrol : Petrol = new Petrol();

    var director : Director = new Director(diesel);
	director.construct();
	var engine = director.getEngine();
	console.log(engine.render());

	var director : Director = new Director(petrol);
	director.construct();
	var engine = director.getEngine();
	console.log(engine.render());
}());
