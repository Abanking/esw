import { DocumentJsonData } from "../common";

/**
 * Программное представление элемента модели документа
 */
export interface DocumentElement<T> {
  patch: (path: string, value: DocumentJsonData) => Promise<boolean>;
  read: (path?: string) => Promise<T | null>;
}
