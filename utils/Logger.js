export class Logger {
    static info(message) {
        console.log(`Info ${message}`);
    }
    static warn(message){
        console.warn(`Warn ${message}`);
    }
    static error(message){
        console.error(`Error ${message}`);
    }
    static debug(message){
        console.debug(`Debug ${message}`);
    }
}