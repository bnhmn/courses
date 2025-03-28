abstract class AppointmentABC {
    constructor(
        public start: Date,
        public end: Date,
        public description: string,
    ) {}

    // abstract method, must be implemented by sub class
    abstract priority(): string;

    print() {
        console.log(
            `The appointment with priority [${this.priority()}] starts at [${this.start.toISOString()}] and ends at [${this.end.toISOString()}]`,
        );
    }
}

class Appointment extends AppointmentABC {
    constructor(start: Date, end: Date, description: string) {
        super(start, end, description);
    }

    priority(): string {
        return 'default';
    }
}

const a1 = new Appointment(new Date(2022, 1, 1), new Date(2022, 1, 2), 'Test');
a1.print();
