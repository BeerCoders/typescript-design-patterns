class English {
    public say() {
        console.log("Hello World");
    }
}

class German {
    public say() {
        console.log("Hallo Welt");
    }
}

class Polish {
    public say() {
        console.log("Witaj Świecie");
    }
}

class Languages {
    private english: English = new English();
    private german: German = new German();
    private polish: Polish = new Polish();

    public talkToEveryone() {
        this.english.say();
        this.german.say();
        this.polish.say();
   }
}

(function main() {
    var languages: Languages = new Languages();
    languages.talkToEveryone();
}());
