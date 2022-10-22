
import { get_caller_file_path } from "../lib";

export function get__filename(): string{
    return get_caller_file_path();
}