// All interface members are public!
interface IAppointment {
    start: Date;
    end: Date;
    description: string;
    print(): void;
}

class Appointment implements IAppointment {
    constructor(
        public start: Date,
        public end: Date,
        public description: string,
    ) {}

    print(): void {
        console.log(
            `The appointment starts at ${this.start.toISOString()} and ends at ${this.end.toISOString()}`,
        );
    }
}

const a1 = new Appointment(new Date(2022, 1, 1), new Date(2022, 1, 2), 'Test');
a1.print();
