interface Component {
    loadBody();
}

class Email implements Component {

    loadBody() {
        console.log("This is Main Email body");
    }
}

class EmailBodyDecorator implements Component {

    protected component;

    constructor(component:Component) {
        this.component = component;
    }

    public loadBody() {
        this.component.loadBody();
    }

}

class ChristmasEmailBody extends EmailBodyDecorator {

    loadBody() {
        super.loadBody();
        console.log( 'This is Extra Content for Christmas');
    }

}

class NewYearEmailBody extends EmailBodyDecorator {

    loadBody() {
        super.loadBody();
        console.log('This is Extra Content for New Year');;
    }

}


(function main() {
    var email: Email = new Email();
    email.loadBody();

    var email: Email = new Email();
    email = new ChristmasEmailBody(email);
    email.loadBody();

    var email: Email = new Email();
    email = new NewYearEmailBody(email);
    email.l
