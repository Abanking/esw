export class ReadDocumentAccessError extends Error {
    public readonly errorCode: string;

    constructor(path: string) {
        super();
        this.errorCode = '100';
        this.message = `ESW:ReadDocumentAccessError(${this.errorCode}): Widget tries to read data by ${path}, but does not have access`;
        this.name = 'ReadDocumentAccessError';
    }
}
