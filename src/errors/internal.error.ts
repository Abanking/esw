export class InternalError extends Error {
    public readonly errorCode: string = '102';

    constructor(error: Error, section: string) {
        super();
        this.message = `ESW:InternalError(${this.errorCode}, ${section}): Internal platform error. ${error.message}`;
        this.name = 'InternalError';
        this.stack = error.stack;
    }
}
