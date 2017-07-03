import fs = require('fs');
import { appendToObject } from 'immunity/lib/appendToObject';

export function readFile(pathstr, options?): Promise<any> {
    return new Promise((resolve, reject) => {
        const defaultOptions = { encoding: 'utf8' };

        const options_ = (options === undefined) ?
            defaultOptions :
            appendToObject(options, defaultOptions);

        fs.readFile(
            pathstr,
            options_,
            (err, content) => {
                if (err) {
                    reject(err);

                    return;
                }

                resolve(content);
            }
        );
    });
};

export default readFile;
