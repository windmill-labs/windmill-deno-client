"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
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
function get_caller_file_path() {
    //NOTE: Cannot be move to the index file.
    //The function can't be declared and used
    //in the same file.
    var prepareStackTraceBackup = Error.prepareStackTrace;
    var callerFile = "";
    try {
        var error = new Error();
        Error.prepareStackTrace = function (_, stack) { return stack; };
        error.stack.shift().getFileName();
        var fileImportedFrom = error.stack.shift().getFileName();
        while (error.stack.length) {
            var fileName = error.stack.shift().getFileName();
            if (fileName === callerFile) {
                break;
            }
            callerFile = fileName;
            if (fileImportedFrom !== callerFile) {
                break;
            }
        }
    }
    catch (_a) { }
    Error.prepareStackTrace = prepareStackTraceBackup;
    return callerFile;
}
exports.get_caller_file_path = get_caller_file_path;
