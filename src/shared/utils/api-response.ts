export interface SuccessResponse<T> {
    success: true;
    message?: string;
    data: T;
}

export interface ErrorResponse {
    success: false;
    message: string;
    errors?: unknown;
}

export const successResponse = <T>({ data, message }: { data: T; message?: string }): SuccessResponse<T> => {
    return { success: true, message, data };
};

export const errorResponse = ({ message, errors }: { message: string; errors?: unknown }): ErrorResponse => {
    return { success: false, message, errors };
};