export class CallingInWrongEnvError extends Error {
    public readonly errorCode: string = '101';

    constructor(entityCall: string) {
        super();
        this.message = `ESW:CallingInWrongEnvError(${this.errorCode}): Widget calls a method on an entity (${entityCall}) that does not exist in this context`;
        this.name = 'CallingInWrongEnvError';
    }
}
