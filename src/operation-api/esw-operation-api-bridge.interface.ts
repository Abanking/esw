export interface IEswOperationApiBridge {
    exec: (operationId: string, documentId: string) => Promise<void>;
}
