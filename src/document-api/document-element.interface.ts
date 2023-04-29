import { DocumentJsonData } from '../common';

/**
 * Программное представление элемента модели документа
 */
// eslint-disable-next-line @typescript-eslint/naming-convention
export interface DocumentElement<T> {
    patch: (value: DocumentJsonData) => Promise<boolean>;
    patchByPath: (path: string, value: DocumentJsonData) => Promise<boolean>;
    read: (path?: string) => Promise<T | null>;
}
