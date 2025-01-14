export interface JoinTableAdditionalGeneratedColumnsOptions {
    name: string;
    generationStrategy?: "increment" | "uuid" | "rowid";
    isPrimary?: boolean
}
