export interface JoinTableAdditionalGeneratedColumnsArgs {
    name: string;
    generationStrategy?: "increment" | "uuid" | "rowid";
    isPrimary?: boolean
}
