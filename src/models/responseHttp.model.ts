export interface ResponseApi<Data> {
    code: number;
    message: string;
    data?: Data;
    operation: boolean;
}