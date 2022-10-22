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
export declare function get_caller_file_path(): string;
