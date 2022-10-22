
/** 
 * 
 * Let's say we have this function declared somewhere.
 * 
 * function get__filename(){
 *      return get_caller_file_path();
 * }
 * 
 * Then we can assert that: 
 * 
 * get__filename() === __filename
 * 
 * 
 */
export function get_caller_file_path(): string {

    //NOTE: Cannot be move to the index file.
    //The function can't be declared and used
    //in the same file.

    const prepareStackTraceBackup = Error.prepareStackTrace;

    let callerFile = "";

    try {

        const error: any = new Error();

        Error.prepareStackTrace = (_, stack) => stack;

        error.stack.shift().getFileName();

        let fileImportedFrom= error.stack.shift().getFileName();

        while (error.stack.length) {

            const fileName= error.stack.shift().getFileName();

            if( fileName === callerFile ){
                break;
            }

            callerFile = fileName;

            if (fileImportedFrom !== callerFile) {

                break;

            }

        }

    } catch { }

    Error.prepareStackTrace = prepareStackTraceBackup;

    return callerFile;

}