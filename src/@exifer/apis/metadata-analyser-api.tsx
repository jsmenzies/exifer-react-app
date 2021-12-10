import {Update} from "../app-domain/app-declarations";


export const updateWrapper: (update: Update) => Promise<number> = async (update) => {
    const response = await fetch("http://localhost:8080/s3/update", {
        method: 'POST',
        cache: 'no-cache',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(update),
    });
    // console.log({update})
    return response.status;
    // return Promise.resolve(1);
}

