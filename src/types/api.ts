
export interface ApiType {
    // props
    baseUrl: string;
    // methods

    // TODO add specifications for the params
    get: (url: string) => Promise<responseType>;
    extractError: (response: responseType) => any;
    post: (url: string, payload: any) => Promise<responseType>;
}

export type responseType = {
    data?: any;
    error?: any;
};


