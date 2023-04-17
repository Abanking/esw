export type EswFormEnv = {
    documentId: string;
}

export type EswCommonEnv = {
    // маркетплейc
    isProvider: boolean;
}

export type EswEnv = EswCommonEnv & Partial<EswFormEnv>;
