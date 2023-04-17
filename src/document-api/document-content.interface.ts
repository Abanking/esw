export interface IDocumentContent {
    documentSchemaId: string;
    id: string;
    jsonData: Record<string, unknown>;
    published: string;
    stepId: string;
    workflowId: string;
    workflowTitle: string;
}
