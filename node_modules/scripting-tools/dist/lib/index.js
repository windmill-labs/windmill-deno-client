"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __read = (this && this.__read) || function (o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
};
var __spread = (this && this.__spread) || function () {
    for (var ar = [], i = 0; i < arguments.length; i++) ar = ar.concat(__read(arguments[i]));
    return ar;
};
var __values = (this && this.__values) || function (o) {
    var m = typeof Symbol === "function" && o[Symbol.iterator], i = 0;
    if (m) return m.call(o);
    return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
};
Object.defineProperty(exports, "__esModule", { value: true });
var child_process = require("child_process");
var readline = require("readline");
var fs = require("fs");
var path = require("path");
var https = require("https");
var http = require("http");
var util = require("util");
var os = require("os");
var crypto = require("crypto");
/**
 * After this function is called every call to execSync
 * or exec will print the unix commands being executed.
 * */
function enableCmdTrace() {
    traceCmdIfEnabled.enabled = true;
}
exports.enableCmdTrace = enableCmdTrace;
function traceCmdIfEnabled(cmd, options) {
    if (!traceCmdIfEnabled.enabled) {
        return;
    }
    console.log(colorize("$ " + cmd + " ", "YELLOW") + (!!options ? JSON.stringify(options) + "\n" : ""));
}
(function (traceCmdIfEnabled) {
    traceCmdIfEnabled.enabled = false;
})(traceCmdIfEnabled || (traceCmdIfEnabled = {}));
function get_uid(unix_user) {
    return parseInt(sh_eval("id -u " + unix_user));
}
exports.get_uid = get_uid;
function get_gid(unix_user) {
    return parseInt(sh_eval("id -g " + unix_user));
}
exports.get_gid = get_gid;
function colorize(str, color) {
    var color_code = (function () {
        switch (color) {
            case "GREEN": return "\x1b[32m";
            case "RED": return "\x1b[31m";
            case "YELLOW": return "\x1b[33m";
        }
    })();
    return "" + color_code + str + "\u001B[0m";
}
exports.colorize = colorize;
/**
 *
 * The stderr is forwarded to the console realtime.
 *
 * The returned value is the concatenated data received on stdout.
 *
 * If the return code of the cmd is not 0 an exception is thrown
 * and the message cmd + the concatenated data received on stderr.
 *
 * If enableTrace() have been called the command called will be printed.
 *
 */
function execSync(cmd, options) {
    traceCmdIfEnabled(cmd, options);
    return child_process.execSync(cmd, __assign({}, (options || {}), { "encoding": "utf8" }));
}
exports.execSync = execSync;
/**
 *
 * The cmd is printed before execution
 * stdout and stderr are forwarded to the console realtime.
 * Return nothing.
 *
 * stdio is set to "inherit" and thus should not be redefined.
 *
 */
function execSyncTrace(cmd, options) {
    traceCmdIfEnabled(cmd, options);
    child_process.execSync(cmd, __assign({}, (options || {}), { "stdio": "inherit" }));
}
exports.execSyncTrace = execSyncTrace;
/** Same as execSync except that it dose not print cmd even if cmdTrace have been enabled */
var execSyncNoCmdTrace = function () {
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
    }
    var enabled_back = traceCmdIfEnabled.enabled;
    traceCmdIfEnabled.enabled = false;
    try {
        var out = execSync.apply(null, args);
        traceCmdIfEnabled.enabled = enabled_back;
        return out;
    }
    catch (error) {
        traceCmdIfEnabled.enabled = enabled_back;
        throw error;
    }
};
/**
 *
 * Like execSync but stderr is not forwarded.
 * WARNING: If mean that when the cmd return 0
 * all data that may have been wrote on stderr
 * are lost into oblivion.
 *
 * stdio is set to "pipe" and thus should not be redefined.
 *
 */
function execSyncQuiet(cmd, options) {
    return execSync(cmd, __assign({}, (options || {}), { "stdio": "pipe" }));
}
exports.execSyncQuiet = execSyncQuiet;
/** Same as execSync but async */
function exec(cmd, options) {
    var _this = this;
    traceCmdIfEnabled(cmd, options);
    return new Promise(function (resolve, reject) { return __awaiter(_this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            child_process.exec(cmd, __assign({}, (options || {}), { "encoding": "utf8" }), function (error, stdout, stderr) {
                if (!!error) {
                    error["stderr"] = stderr;
                    reject(error);
                }
                else {
                    resolve(stdout);
                }
            });
            return [2 /*return*/];
        });
    }); });
}
exports.exec = exec;
/**
 * Spawn a process that continue running after current process exit.
 * This process will be ignored by stopSubProcessesAsapSync.
 * If a logfile_path if provided stdout and stderr will be redirected to this file.
 *
 * detached, and stdio options should not be set as they are set internally.
 * */
function spawnAndDetach(command, args, options, logfile_path) {
    var out = !!logfile_path ? fs.openSync(logfile_path, "a") : "ignore";
    var subprocess = child_process.spawn(command, args, __assign({}, (options || {}), { "detached": true, "stdio": ["ignore", out, out] }));
    stopProcessSync.stopSubProcessesAsapSync.ignorePids.add(subprocess.pid);
    subprocess.unref();
    return subprocess;
}
exports.spawnAndDetach = spawnAndDetach;
/**
 *
 * Print a message and enable a moving loading bar.
 * WARNING: Nothing should be printed to stdout until we stop showing the moving loading.
 *
 * returns:
 * -exec: A proxy to the exec fnc that will call onError before it throw the error.
 * -onSuccess: Stop showing the moving loading and pretty print a success message ("ok" by default)
 * -onError: Stop showing the moving loading and pretty print error message.
 *
 */
function start_long_running_process(message) {
    process.stdout.write(message + "... ");
    var moveBack = (function () {
        var cp = message.length + 3;
        return function () { return readline.cursorTo(process.stdout, cp); };
    })();
    var p = ["\\", "|", "/", "-"].map(function (i) { return colorize(i, "GREEN"); });
    var x = 0;
    var timer = setInterval(function () {
        moveBack();
        process.stdout.write(p[x++]);
        x = x % p.length;
    }, 250);
    var onComplete = function (message) {
        clearInterval(timer);
        moveBack();
        process.stdout.write(message + "\n");
    };
    var onError = function (errorMessage) { return onComplete(colorize(errorMessage, "RED")); };
    var onSuccess = function (message) { return onComplete(colorize(message || "ok", "GREEN")); };
    if (traceCmdIfEnabled.enabled) {
        onComplete("");
        onComplete = function (message) { return console.log(message); };
    }
    return {
        onError: onError,
        onSuccess: onSuccess,
        "exec": function () {
            var args = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                args[_i] = arguments[_i];
            }
            return __awaiter(this, void 0, void 0, function () {
                var error_1;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            _a.trys.push([0, 2, , 3]);
                            return [4 /*yield*/, exec.apply(null, args)];
                        case 1: return [2 /*return*/, _a.sent()];
                        case 2:
                            error_1 = _a.sent();
                            onError(error_1.message);
                            throw error_1;
                        case 3: return [2 /*return*/];
                    }
                });
            });
        }
    };
}
exports.start_long_running_process = start_long_running_process;
;
/**
 * Apt package if not already installed,
 * if prog is provided and prog is in the PATH the package will not be installed
 * */
function apt_get_install_if_missing(package_name, prog) {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    process.stdout.write("Looking for " + package_name + " ... ");
                    if (!!prog && apt_get_install_if_missing.doesHaveProg(prog)) {
                        console.log(prog + " executable found. " + colorize("OK", "GREEN"));
                        return [2 /*return*/];
                    }
                    if (apt_get_install_if_missing.isPkgInstalled(package_name)) {
                        console.log(package_name + " is installed. " + colorize("OK", "GREEN"));
                        return [2 /*return*/];
                    }
                    readline.clearLine(process.stdout, 0);
                    process.stdout.write("\r");
                    return [4 /*yield*/, apt_get_install(package_name)];
                case 1: return [2 /*return*/, _a.sent()];
            }
        });
    });
}
exports.apt_get_install_if_missing = apt_get_install_if_missing;
(function (apt_get_install_if_missing) {
    function isPkgInstalled(package_name) {
        try {
            console.assert(!!execSyncNoCmdTrace("dpkg-query -W -f='${Status}' " + package_name, { "stdio": "pipe" })
                .match(/^install ok installed$/));
        }
        catch (_a) {
            return false;
        }
        return true;
    }
    apt_get_install_if_missing.isPkgInstalled = isPkgInstalled;
    function doesHaveProg(prog) {
        try {
            execSyncNoCmdTrace("which " + prog);
        }
        catch (_a) {
            return false;
        }
        return true;
    }
    apt_get_install_if_missing.doesHaveProg = doesHaveProg;
})(apt_get_install_if_missing = exports.apt_get_install_if_missing || (exports.apt_get_install_if_missing = {}));
/** Install or upgrade package via APT */
function apt_get_install(package_name) {
    return __awaiter(this, void 0, void 0, function () {
        var _a, onSuccess, exec, was_installed_before, error_2;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    _a = start_long_running_process("Installing or upgrading " + package_name + " package"), onSuccess = _a.onSuccess, exec = _a.exec;
                    _b.label = 1;
                case 1:
                    _b.trys.push([1, 5, , 6]);
                    if (!apt_get_install.isFirst) return [3 /*break*/, 3];
                    return [4 /*yield*/, exec("apt-get update || true")];
                case 2:
                    _b.sent();
                    apt_get_install.isFirst = false;
                    _b.label = 3;
                case 3:
                    was_installed_before = apt_get_install_if_missing.isPkgInstalled(package_name);
                    return [4 /*yield*/, exec("apt-get -y install " + package_name)];
                case 4:
                    _b.sent();
                    if (!was_installed_before) {
                        apt_get_install.onInstallSuccess(package_name);
                    }
                    return [3 /*break*/, 6];
                case 5:
                    error_2 = _b.sent();
                    apt_get_install.onError(error_2);
                    return [3 /*break*/, 6];
                case 6:
                    onSuccess("DONE");
                    return [2 /*return*/];
            }
        });
    });
}
exports.apt_get_install = apt_get_install;
(function (apt_get_install) {
    apt_get_install.isFirst = true;
    function record_installed_package(file_json_path, package_name) {
        execSyncNoCmdTrace("touch " + file_json_path);
        var raw = fs.readFileSync(file_json_path).toString("utf8");
        var list = raw === "" ? [] : JSON.parse(raw);
        if (!list.find(function (p) { return p === package_name; })) {
            list.push(package_name);
            fs.writeFileSync(file_json_path, Buffer.from(JSON.stringify(list, null, 2), "utf8"));
        }
    }
    apt_get_install.record_installed_package = record_installed_package;
    apt_get_install.onError = function (error) { throw error; };
    apt_get_install.onInstallSuccess = function (package_name) { };
})(apt_get_install = exports.apt_get_install || (exports.apt_get_install = {}));
function exit_if_not_root() {
    if (process.getuid() !== 0) {
        console.log(colorize("Error: root privilege required ", "RED"));
        process.exit(1);
    }
}
exports.exit_if_not_root = exit_if_not_root;
/**
 *
 * Locate a given module in a node_modules directory.
 * If the module is required in different version and thus
 * present multiple times will be returned the shorter path.
 * This ensure that if a given module is in package.json 's dependencies
 * section the returned path will be the one we looking for.
 *
 * @param module_name The name of the module.
 * @param module_dir_path Path to the root of the module ( will search in ./node_modules ).
 *
 * Throw if the module is not found.
 *
 */
function find_module_path(module_name, module_dir_path) {
    if (module_dir_path.endsWith(module_name)) {
        return module_dir_path;
    }
    var node_module_path = path.join(module_dir_path, "node_modules");
    if (!fs.existsSync(node_module_path)) {
        throw new Error("No node_modules in " + module_dir_path);
    }
    var _a = __read(fs.readdirSync(node_module_path)
        .filter(function (file_or_dir_name) { return fs.statSync(path.join(node_module_path, file_or_dir_name)).isDirectory; })
        .map(function (dir_name) {
        return !dir_name.startsWith("@") ?
            [path.join(node_module_path, dir_name)] :
            fs.readdirSync(path.join(node_module_path, dir_name))
                .map(function (file_or_dir_name) { return path.join(node_module_path, dir_name, file_or_dir_name); })
                .filter(function (file_or_dir_path) { return fs.statSync(file_or_dir_path).isDirectory; });
    })
        .reduce(function (prev, curr) { return __spread(prev, curr); }, [])
        .filter(function (file_or_dir_path) { return fs.existsSync(path.join(file_or_dir_path, "package.json")); })
        .map(function (module_dir_path) {
        try {
            return find_module_path(module_name, module_dir_path);
        }
        catch (_a) {
            return "";
        }
    })
        .filter(function (module_dir_path) { return !!module_dir_path; })
        .sort(function (a, b) { return a.length - b.length; }), 1), out = _a[0];
    if (out === undefined) {
        throw new Error("module " + module_name + " not installed in " + module_dir_path);
    }
    return out;
}
exports.find_module_path = find_module_path;
/**
 *
 * Test if two file of folder are same.
 * Does not consider stat ( ownership and permission ).
 * transparent handling of symlinks.
 *
 * Example
 *
 * /foo1/bar/file.txt
 * /foo2/bar/file.txt
 *
 * to compare the two version of file.txt
 * call with "/foo1", "/foo2", "./bar/file.txt";
 * or with "/foo1/bar/file.txt", "/foo2/bar/file.txt"
 *
 * @param relative_from_path1 absolute path ex: '/foo1'
 * @param relative_from_path2 absolute path ex: '/foo2'
 * @param relative_to_path relative path ex: './bar/file.txt" or 'bar/file.txt'
 * for convenience relative_to_path can be absolute as long as it has relative_from_path1
 * or relative_from_path2 as parent.
 *
 */
function fs_areSame(relative_from_path1, relative_from_path2, relative_to_path) {
    if (relative_to_path === void 0) { relative_to_path = "."; }
    relative_to_path = fs_areSame.get_relative_to_path(relative_from_path1, relative_from_path2, relative_to_path);
    try {
        execSyncNoCmdTrace([
            "diff -r",
            path.join(relative_from_path1, relative_to_path),
            path.join(relative_from_path2, relative_to_path)
        ].join(" "), { "stdio": "pipe" });
    }
    catch (_a) {
        return false;
    }
    return true;
}
exports.fs_areSame = fs_areSame;
(function (fs_areSame) {
    function get_relative_to_path(dir_path1, dir_path2, to_path) {
        if (path.isAbsolute(to_path)) {
            var dir_path = [dir_path1, dir_path2]
                .filter(function (v) { return to_path.startsWith(v); })
                .sort(function (a, b) { return b.length - a.length; })[0];
            if (!dir_path) {
                throw new Error("Not relative!");
            }
            return path.relative(dir_path, to_path);
        }
        else {
            return to_path;
        }
    }
    fs_areSame.get_relative_to_path = get_relative_to_path;
})(fs_areSame = exports.fs_areSame || (exports.fs_areSame = {}));
/**
 *
 * Move or copy file of folder.
 * -If dest is identical to source nothing is copied nor moved.
 * -If dest exist and is different of source it will be deleted prior to proceeding with action.
 * -In move mode if dest identical to source source will be removed.
 * -When copy is effectively performed the stat are conserved.
 * -If dirname of dest does not exist in fs, it will be created.
 * -Unlike cp or mv "/src/file.txt" "/dest" will NOT place file.txt in dest but dest will become file.txt
 *
 * calling [action] "/src/foo" "/dst/foo" is equivalent
 * to calling [action] "/src" "/dst" "./foo" ( or "foo" )
 * or [action] "/src" "/dst" "src/foo"
 * or [action] "/src" "/dst" "dst/foo"
 *
 */
function fs_move(action, relative_from_path_src, relative_from_path_dest, relative_to_path) {
    if (relative_to_path === void 0) { relative_to_path = "."; }
    relative_to_path = fs_areSame.get_relative_to_path(relative_from_path_src, relative_from_path_dest, relative_to_path);
    var src_path = path.join(relative_from_path_src, relative_to_path);
    var dst_path = path.join(relative_from_path_dest, relative_to_path);
    if (!fs_areSame(src_path, dst_path)) {
        if (!fs.existsSync(dst_path)) {
            execSyncNoCmdTrace("mkdir -p " + dst_path);
        }
        execSyncNoCmdTrace("rm -rf " + dst_path);
        execSyncNoCmdTrace([
            action === "COPY" ? "cp -rp" : "mv",
            src_path,
            dst_path
        ].join(" "));
    }
    else {
        if (action === "MOVE") {
            execSyncNoCmdTrace("rm -r " + src_path);
        }
    }
}
exports.fs_move = fs_move;
/**
 * Download and extract a tarball. throws web_get.DownloadError and Error
 *
 * Example
 *
 * website.com/rel.tar.gz
 * ./file1.txt
 * ./dir/file2.txt
 *
 * /foo/
 * ./file3.txt
 * ./dir/file4.txt
 *
 * calling with "website.com/rel.tar.gz", "MERGE" will result in:
 *
 * /foo/
 * ./file1.txt
 * ./file3.txt
 * ./dir/file4.txt
 *
 * calling with "website.com/rel.tar.gz", "OVERWRITE IF EXIST" will result in:
 *
 * /foo/
 * ./file1.txt
 * ./dir/file2.txt
 *
 */
function download_and_extract_tarball(url, dest_dir_path, mode) {
    return __awaiter(this, void 0, void 0, function () {
        var _a, exec, onSuccess, onError, tarball_dir_path, tarball_path, error_3, _b, _c, name;
        var e_1, _d;
        return __generator(this, function (_e) {
            switch (_e.label) {
                case 0:
                    _a = start_long_running_process("Downloading " + url + " and extracting to " + dest_dir_path), exec = _a.exec, onSuccess = _a.onSuccess, onError = _a.onError;
                    tarball_dir_path = (function () {
                        var hash = crypto.createHash("sha1");
                        hash.write(url);
                        hash.end();
                        return "/tmp/_" + hash.read().toString("hex");
                    })();
                    tarball_path = tarball_dir_path + ".tar.gz";
                    if (!(fs.existsSync(tarball_dir_path) || fs.existsSync(tarball_path))) return [3 /*break*/, 2];
                    return [4 /*yield*/, exec("rm -rf " + tarball_dir_path + " " + tarball_path)];
                case 1:
                    _e.sent();
                    _e.label = 2;
                case 2:
                    _e.trys.push([2, 4, , 5]);
                    return [4 /*yield*/, web_get(url, tarball_path)];
                case 3:
                    _e.sent();
                    return [3 /*break*/, 5];
                case 4:
                    error_3 = _e.sent();
                    onError(error_3.message);
                    throw error_3;
                case 5: return [4 /*yield*/, exec("mkdir " + tarball_dir_path)];
                case 6:
                    _e.sent();
                    return [4 /*yield*/, exec("tar -xzf " + tarball_path + " -C " + tarball_dir_path)];
                case 7:
                    _e.sent();
                    return [4 /*yield*/, exec("rm " + tarball_path)];
                case 8:
                    _e.sent();
                    if (!(mode === "MERGE")) return [3 /*break*/, 10];
                    try {
                        for (_b = __values(fs_ls(tarball_dir_path)), _c = _b.next(); !_c.done; _c = _b.next()) {
                            name = _c.value;
                            fs_move("MOVE", tarball_dir_path, dest_dir_path, name);
                        }
                    }
                    catch (e_1_1) { e_1 = { error: e_1_1 }; }
                    finally {
                        try {
                            if (_c && !_c.done && (_d = _b.return)) _d.call(_b);
                        }
                        finally { if (e_1) throw e_1.error; }
                    }
                    return [4 /*yield*/, exec("rm -r " + tarball_dir_path)];
                case 9:
                    _e.sent();
                    return [3 /*break*/, 11];
                case 10:
                    fs_move("MOVE", tarball_dir_path, dest_dir_path);
                    _e.label = 11;
                case 11:
                    onSuccess();
                    return [2 /*return*/];
            }
        });
    });
}
exports.download_and_extract_tarball = download_and_extract_tarball;
function web_get(url, file_path) {
    if (!url.startsWith("http")) {
        url = "http://" + url;
    }
    return new Promise(function (resolve, reject) {
        var get = url.startsWith("https") ?
            https.get.bind(https) : http.get.bind(http);
        var timer = setTimeout(function () {
            clientRequest.abort();
            reject(new web_get.DownloadError(url, "CONNECTION ERROR", "web_get connection error:  timeout"));
        }, 20000);
        var clientRequest = get(url, function (res) {
            clearTimeout(timer);
            if (("" + res.statusCode).startsWith("30")) {
                var url_redirect = res.headers.location;
                if (!!url_redirect) {
                    web_get(url_redirect, file_path)
                        .then(function (out) { return resolve(out); })
                        .catch(function (error) { return reject(error); });
                    return;
                }
            }
            if (!("" + res.statusCode).startsWith("2")) {
                reject(new web_get.DownloadErrorHttpErrorCode(url, res.statusCode));
                return;
            }
            var contentLength = undefined;
            var receivedBytes = 0;
            if (res.headers["content-length"] !== undefined) {
                contentLength = parseInt(res.headers["content-length"]);
                res.on("data", function (chunk) { return receivedBytes += chunk.length; });
                (function () {
                    var resolve_src = resolve;
                    resolve = function () {
                        var args = [];
                        for (var _i = 0; _i < arguments.length; _i++) {
                            args[_i] = arguments[_i];
                        }
                        if (receivedBytes !== contentLength) {
                            reject(new web_get.DownloadErrorIncomplete(url, contentLength, receivedBytes));
                            return;
                        }
                        resolve_src.apply(null, args);
                    };
                })();
            }
            res.socket.setTimeout(60000, function () { return res.socket.destroy(new web_get.DownloadErrorIncomplete(url, contentLength, receivedBytes, "socket timeout")); });
            if (!!file_path) {
                (function () {
                    var reject_src = reject;
                    reject = function () {
                        var args = [];
                        for (var _i = 0; _i < arguments.length; _i++) {
                            args[_i] = arguments[_i];
                        }
                        return fs.unlink(file_path, function () { return reject_src.apply(null, args); });
                    };
                })();
                fs.writeFileSync(file_path, new Buffer(0));
                var fsWriteStream = fs.createWriteStream(file_path);
                res.pipe(fsWriteStream);
                fsWriteStream.once("finish", function () { return resolve(); });
                res.once("error", function (error) { return reject(new web_get.DownloadErrorIncomplete(url, contentLength, receivedBytes, error.message)); });
                fsWriteStream.once("error", function (error) { return reject(new web_get.DownloadErrorIncomplete(url, contentLength, receivedBytes, error.message)); });
            }
            else {
                var data_1 = new Buffer(0);
                res.on("data", function (chunk) { return data_1 = Buffer.concat([data_1, chunk]); });
                res.once("end", function () { return resolve(data_1.toString("utf8")); });
            }
        });
        clientRequest.once("error", function (error) {
            clearTimeout(timer);
            reject(new web_get.DownloadError(url, "CONNECTION ERROR", error.message));
        });
    });
}
exports.web_get = web_get;
(function (web_get) {
    var DownloadError = /** @class */ (function (_super) {
        __extends(DownloadError, _super);
        function DownloadError(url, cause, message) {
            var _newTarget = this.constructor;
            var _this = _super.call(this, message) || this;
            _this.url = url;
            _this.cause = cause;
            Object.setPrototypeOf(_this, _newTarget.prototype);
            return _this;
        }
        return DownloadError;
    }(Error));
    web_get.DownloadError = DownloadError;
    var DownloadErrorIncomplete = /** @class */ (function (_super) {
        __extends(DownloadErrorIncomplete, _super);
        function DownloadErrorIncomplete(url, contentLength, receivedBytes, info) {
            var _newTarget = this.constructor;
            var _this = _super.call(this, url, "INCOMPLETE", "web_get failed, download incomplete " + receivedBytes + "/" + contentLength + ", " + (!!info ? info : "")) || this;
            _this.contentLength = contentLength;
            _this.receivedBytes = receivedBytes;
            Object.setPrototypeOf(_this, _newTarget.prototype);
            return _this;
        }
        return DownloadErrorIncomplete;
    }(DownloadError));
    web_get.DownloadErrorIncomplete = DownloadErrorIncomplete;
    var DownloadErrorHttpErrorCode = /** @class */ (function (_super) {
        __extends(DownloadErrorHttpErrorCode, _super);
        function DownloadErrorHttpErrorCode(url, code) {
            var _newTarget = this.constructor;
            var _this = _super.call(this, url, "HTTP ERROR CODE", "web_get failed, HTTP error code: " + code) || this;
            _this.code = code;
            Object.setPrototypeOf(_this, _newTarget.prototype);
            return _this;
        }
        return DownloadErrorHttpErrorCode;
    }(DownloadError));
    web_get.DownloadErrorHttpErrorCode = DownloadErrorHttpErrorCode;
})(web_get = exports.web_get || (exports.web_get = {}));
function fs_ls(dir_path, mode, showHidden) {
    if (mode === void 0) { mode = "FILENAME"; }
    if (showHidden === void 0) { showHidden = false; }
    return execSyncNoCmdTrace("ls" + (showHidden ? " -a" : ""), { "cwd": dir_path })
        .slice(0, -1)
        .split("\n")
        .map(function (name) { return mode === "ABSOLUTE PATH" ? path.join(dir_path, name) : name; });
}
exports.fs_ls = fs_ls;
/**
 *
 * Create a symbolic link.
 * If dst exist it is removed.
 * directories leading to dest are created if necessary.
 *
 */
function createSymlink(src_path, dst_path) {
    if (!fs.existsSync(dst_path)) {
        execSyncNoCmdTrace("mkdir -p " + dst_path);
    }
    execSyncNoCmdTrace("rm -rf " + dst_path);
    execSync("ln -s " + src_path + " " + dst_path);
}
exports.createSymlink = createSymlink;
/** Create a executable file */
function createScript(file_path, content) {
    if (traceCmdIfEnabled.enabled) {
        console.log("Creating script " + file_path);
    }
    fs.writeFileSync(file_path, Buffer.from(content, "utf8"));
    execSyncNoCmdTrace("chmod +x " + file_path);
}
exports.createScript = createScript;
var unixUser;
(function (unixUser) {
    function create(unix_user, home_dir_path) {
        if (home_dir_path === void 0) { home_dir_path = "/tmp"; }
        execSyncNoCmdTrace("useradd -M " + unix_user + " -s /bin/false -d " + home_dir_path);
    }
    unixUser.create = create;
    function remove(unix_user) {
        execSyncNoCmdTrace("userdel " + unix_user, { "stdio": "pipe" });
    }
    unixUser.remove = remove;
})(unixUser = exports.unixUser || (exports.unixUser = {}));
var get_caller_file_path_1 = require("./get_caller_file_path");
exports.get_caller_file_path = get_caller_file_path_1.get_caller_file_path;
var get_caller_file_path_2 = require("./get_caller_file_path");
/**
 *
 * DO NOT USE TEST PURPOSE ONLY
 *
 * return __filename
 *
 */
function get__filename() {
    return get_caller_file_path_2.get_caller_file_path();
}
exports.get__filename = get__filename;
/**
 *
 * Equivalent to the pattern $() in bash.
 * Strip final LF if present.
 * If cmd fail no error is thrown, an empty string is returned.
 * Does not print to stdout.
 *
 * Typical usage: uname -r or which pkill
 *
 */
function sh_eval(cmd) {
    var res;
    try {
        res = execSyncNoCmdTrace(cmd, { "stdio": "pipe" });
    }
    catch (_a) {
        return "";
    }
    return res.replace(/\n$/, "");
}
exports.sh_eval = sh_eval;
/**
 * Run a command and return true if the return code was 0.
 * Does not print to stdout.
 */
function sh_if(cmd) {
    try {
        execSyncNoCmdTrace(cmd, { "stdio": "pipe" });
    }
    catch (_a) {
        return false;
    }
    return true;
}
exports.sh_if = sh_if;
/**
 * Return a promise that resolve as the source promise when fulfilled
 * or resolve with the error when reject.
 * If a timeout is specified the returned promise resolve with an error after [timeout]ms
 * if the source promise did not completed before.
 * The message of the timeout error is safePr.timeoutErrorMessage
 */
function safePr(pr, timeout) {
    var prSafe = pr.then(function (val) { return val; }, function (error) { return error; });
    if (timeout !== undefined) {
        var timer_1;
        return Promise.race([
            new Promise(function (resolve) { return timer_1 = setTimeout(function () { return resolve(new Error(safePr.timeoutErrorMessage)); }, timeout); }),
            prSafe.then(function (val) {
                clearTimeout(timer_1);
                return val;
            })
        ]);
    }
    else {
        return prSafe;
    }
}
exports.safePr = safePr;
;
(function (safePr) {
    safePr.timeoutErrorMessage = "safePr timeout";
})(safePr = exports.safePr || (exports.safePr = {}));
/**
 *
 * Allow to schedule action function to perform before exiting.
 *
 * The task function will always be called before the process stop
 * unless process.exit is explicitly called somewhere or
 * if the process receive any signal other than the ones specified
 * in the ExitCause.Signal["signal"] type.
 *
 * The process may stop for tree reasons:
 * 1) If there is no more work scheduled ( natural termination ).
 * 2) If an uncaught exception it thrown ( or a unhandled promise rejection )
 * 3) If a signal ( one of the handled ) is sent to the process.
 *
 * To manually exit the process there is two option:
 * - Call process.exit(X) but the task function will not be called.
 * - Emit "beforeExit" on process object ( process.emit("beforeExit, process.exitCode= X) );
 *  Doing so you simulate 1st stop condition ( natural termination ).
 *
 * To define the return code set process.exitCode. The exit code can be set
 * before emitting "beforeExit" or in the task function.
 * If exitCode has not be defined the process will exit with 0 if
 * there was nothing else to do and 1 otherwise.
 *
 * The task function can be synchronous or asynchronous.
 * The task function has [timeout] ms to complete.
 * If it has not completed within this delay the process will
 * be terminated anyway. (Default 4000 ms )
 * Setting [timeout] to a negative value will disable the timer.
 * WARNING: It is important not to perform sync operation that can
 * hang for a long time in the task function ( e.g. execSync("sleep 1000"); )
 * because while the sync operation are performed the timeout can't be triggered.
 *
 * As soon as the task function is called all the other exitCause that
 * may auccur will be ignored so that the task function have time to complete.
 * Anyway the task function is called only once.
 *
 * Whether the task function complete by successfully or throw
 * an exception the process will terminate with exit code set
 * in process.exitCode at the time of the completion.
 *
 * Provide shouldExitIf function to filter what should be
 * considered a case to terminate the process.
 * Only exception and supported signals can be bypassed,
 * Nothing else to do will always terminate the process.
 * By default exiting on any signal or uncaught errors.
 *
 * Before exiting all subprocess will be killed.
 *
 *
 */
function setProcessExitHandler(task, timeout, shouldExitIf) {
    var e_2, _a, e_3, _b;
    var _this = this;
    if (timeout === void 0) { timeout = 4000; }
    if (shouldExitIf === void 0) { shouldExitIf = function () { return true; }; }
    var log = function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        return setProcessExitHandler.log("[ exit handler ] " + util.format.apply(util, args));
    };
    var handler = function (exitCause) { return __awaiter(_this, void 0, void 0, function () {
        var process_exit, actionOut, error_4;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    if (exitCause.type !== "NOTHING ELSE TO DO" && !shouldExitIf(exitCause)) {
                        log("Choosing ( c.f shouldExitIf ) not to terminate the process despite: ", exitCause);
                        return [2 /*return*/];
                    }
                    handler = function (exitCause) { return log("Ignored extra exit cause", exitCause); };
                    process_exit = function () {
                        if (typeof process.exitCode !== "number" || isNaN(process.exitCode)) {
                            if (exitCause.type === "NOTHING ELSE TO DO") {
                                process.exitCode = 0;
                            }
                            else {
                                log("Exit cause " + exitCause.type + " and not exitCode have been set, using exit code 1");
                                process.exitCode = 1;
                            }
                        }
                        else {
                            log("Exit code have been set to " + process.exitCode);
                        }
                        log("Stopping subprocess asap if any...");
                        stopProcessSync.stopSubProcessesAsapSync();
                        log("exiting now with code " + process.exitCode);
                        process.exit();
                    };
                    log("Cause of process termination: ", exitCause);
                    if (timeout >= 0) {
                        setTimeout(function () {
                            log("Exit task timeout");
                            process.exitCode = 1;
                            process_exit();
                        }, timeout);
                    }
                    try {
                        actionOut = task(exitCause);
                    }
                    catch (error) {
                        log("Exit task thrown error", error);
                        process_exit();
                        return [2 /*return*/];
                    }
                    if (!(actionOut instanceof Promise)) return [3 /*break*/, 4];
                    _a.label = 1;
                case 1:
                    _a.trys.push([1, 3, , 4]);
                    return [4 /*yield*/, actionOut];
                case 2:
                    _a.sent();
                    return [3 /*break*/, 4];
                case 3:
                    error_4 = _a.sent();
                    log("Exit task returned a promise that rejected", error_4);
                    process_exit();
                    return [2 /*return*/];
                case 4:
                    log("Exit task complete successfully.");
                    process_exit();
                    return [2 /*return*/];
            }
        });
    }); };
    var _loop_1 = function (signal) {
        process.on(signal, function () { return handler({ "type": "SIGNAL", signal: signal }); });
    };
    try {
        for (var _c = __values(setProcessExitHandler.ExitCause.Signal.list), _d = _c.next(); !_d.done; _d = _c.next()) {
            var signal = _d.value;
            _loop_1(signal);
        }
    }
    catch (e_2_1) { e_2 = { error: e_2_1 }; }
    finally {
        try {
            if (_d && !_d.done && (_a = _c.return)) _a.call(_c);
        }
        finally { if (e_2) throw e_2.error; }
    }
    try {
        for (var _e = __values(["uncaughtException", "unhandledRejection"]), _f = _e.next(); !_f.done; _f = _e.next()) {
            var eventName = _f.value;
            process.on(eventName, function (error) { return handler({ "type": "EXCEPTION", error: error }); });
        }
    }
    catch (e_3_1) { e_3 = { error: e_3_1 }; }
    finally {
        try {
            if (_f && !_f.done && (_b = _e.return)) _b.call(_e);
        }
        finally { if (e_3) throw e_3.error; }
    }
    process.on("beforeExit", function () { return handler({ "type": "NOTHING ELSE TO DO" }); });
}
exports.setProcessExitHandler = setProcessExitHandler;
(function (setProcessExitHandler) {
    var ExitCause;
    (function (ExitCause) {
        var Signal;
        (function (Signal) {
            Signal._obj = { "SIGINT": null, "SIGUSR2": null, "SIGHUP": null };
            Signal.list = Object.keys(Signal._obj);
        })(Signal = ExitCause.Signal || (ExitCause.Signal = {}));
    })(ExitCause = setProcessExitHandler.ExitCause || (setProcessExitHandler.ExitCause = {}));
    setProcessExitHandler.log = function () { };
})(setProcessExitHandler = exports.setProcessExitHandler || (exports.setProcessExitHandler = {}));
/**
 *
 * Stop a process by sending a specific signal to a target process.
 * When the function return the main process and all it's descendent processes are terminated.
 *
 * The default signal is SIGUSR2 which is the signal used to gracefully terminate
 * Process created by the createService function.
 *
 * Optionally runfiles_path can be provided to define a set of files
 * that should be suppressed before returning.
 *
 * If pid is provided under the form of a pidfile path it will
 * be added to the runfiles set.
 *
 * If all the processes does not terminate within [delay_before_sigkill]ms
 * (default 50000) then KILL signal will be sent to all processes still alive.
 *
 * If the PID provided is the same that the PID of the process running the function
 * PidMatchCurrentProcessError will be thrown.
 *
 */
function stopProcessSync(pidfile_path_or_pid, signal, delay_before_sigkill, runfiles_path) {
    if (signal === void 0) { signal = "SIGUSR2"; }
    if (delay_before_sigkill === void 0) { delay_before_sigkill = 5000; }
    if (runfiles_path === void 0) { runfiles_path = []; }
    var log = function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        return stopProcessSync.log("[ stop process sync ] " + util.format.apply(util, args));
    };
    var cleanupRunfiles = function () {
        var e_4, _a;
        try {
            for (var runfiles_path_1 = __values(runfiles_path), runfiles_path_1_1 = runfiles_path_1.next(); !runfiles_path_1_1.done; runfiles_path_1_1 = runfiles_path_1.next()) {
                var runfile_path = runfiles_path_1_1.value;
                if (fs.existsSync(runfile_path)) {
                    try {
                        fs.unlinkSync(runfile_path);
                        log(path.basename(runfile_path) + " runfile manually cleaned up.");
                    }
                    catch (_b) {
                        log(colorize("Could not remove runfile " + runfile_path, "RED"));
                    }
                }
            }
        }
        catch (e_4_1) { e_4 = { error: e_4_1 }; }
        finally {
            try {
                if (runfiles_path_1_1 && !runfiles_path_1_1.done && (_a = runfiles_path_1.return)) _a.call(runfiles_path_1);
            }
            finally { if (e_4) throw e_4.error; }
        }
    };
    var pid;
    if (typeof pidfile_path_or_pid === "number") {
        pid = pidfile_path_or_pid;
    }
    else {
        var pidfile_path = pidfile_path_or_pid;
        runfiles_path = __spread([pidfile_path], runfiles_path);
        if (!fs.existsSync(pidfile_path)) {
            log("Pidfile does not exist, assuming process not running");
            cleanupRunfiles();
            return;
        }
        try {
            pid = parseInt(fs.readFileSync(pidfile_path).toString("utf8").replace(/\n$/, ""));
            if (isNaN(pid)) {
                throw new Error("pid is NaN");
            }
        }
        catch (_a) {
            log("Pidfile does does not contain pid");
            cleanupRunfiles();
            return;
        }
    }
    if (pid === process.pid) {
        throw new stopProcessSync.PidMatchCurrentProcessError(cleanupRunfiles);
    }
    var pids = __spread(stopProcessSync.getSubProcesses(pid, "FULL PROCESS TREE"), [
        pid
    ]);
    var startTime = Date.now();
    if (stopProcessSync.isProcessRunning(pid)) {
        log("Sending " + signal + " to target process (" + pid + ")");
        stopProcessSync.kill(pid, signal);
    }
    else {
        log("Target process (" + pid + ") is not running");
    }
    var _loop_2 = function () {
        var e_5, _a;
        var runningPids = pids.filter(function (pid) { return stopProcessSync.isProcessRunning(pid); });
        if (runningPids.length === 0) {
            log("Target process (" + pid + ") and all it's sub processes are now terminated");
            return "break";
        }
        else if (Date.now() >= startTime + delay_before_sigkill) {
            log((function () {
                if (delay_before_sigkill === 0) {
                    return "Immediately sending SIGKILL to " + runningPids.length + " remaining sub processes of target process (" + pid + ")";
                }
                else {
                    return [
                        !!runningPids.find(function (_pid) { return _pid === pid; }) ?
                            "Target process (" + pid + ") and " + (runningPids.length - 1) + " of it's sub processes" :
                            runningPids.length + " sub processes of the target process (" + pid + ")",
                        "did not terminate in time, sending KILL signals."
                    ].join(" ");
                }
            })());
            try {
                for (var runningPids_1 = (e_5 = void 0, __values(runningPids)), runningPids_1_1 = runningPids_1.next(); !runningPids_1_1.done; runningPids_1_1 = runningPids_1.next()) {
                    var pid_1 = runningPids_1_1.value;
                    stopProcessSync.kill(pid_1, "SIGKILL");
                }
            }
            catch (e_5_1) { e_5 = { error: e_5_1 }; }
            finally {
                try {
                    if (runningPids_1_1 && !runningPids_1_1.done && (_a = runningPids_1.return)) _a.call(runningPids_1);
                }
                finally { if (e_5) throw e_5.error; }
            }
            return "continue";
        }
        execSyncNoCmdTrace("sleep 0.1");
    };
    while (true) {
        var state_1 = _loop_2();
        if (state_1 === "break")
            break;
    }
    cleanupRunfiles();
}
exports.stopProcessSync = stopProcessSync;
(function (stopProcessSync) {
    var PidMatchCurrentProcessError = /** @class */ (function (_super) {
        __extends(PidMatchCurrentProcessError, _super);
        function PidMatchCurrentProcessError(cleanupRunfiles) {
            var _newTarget = this.constructor;
            var _this = _super.call(this, "StopProcessSync error, provided PID is the PID of the current process") || this;
            _this.cleanupRunfiles = cleanupRunfiles;
            Object.setPrototypeOf(_this, _newTarget.prototype);
            return _this;
        }
        return PidMatchCurrentProcessError;
    }(Error));
    stopProcessSync.PidMatchCurrentProcessError = PidMatchCurrentProcessError;
    /**
     * Stopping process As Soon As Possible,
     * stopProcessSync with signal SIGKILL and timeout 0
     * */
    function stopProcessAsapSync(pidfile_path_or_pid, runfiles_path) {
        if (runfiles_path === void 0) { runfiles_path = []; }
        stopProcessSync(pidfile_path_or_pid, "SIGKILL", 0, runfiles_path);
    }
    stopProcessSync.stopProcessAsapSync = stopProcessAsapSync;
    /**
     * Terminate all child process of current process ASAP.
     *
     * NOTE: Directly after this function ( in the current tick )
     * direct parents process that had sub processes will be Zombies.
     * However they will be reaped by the current process on next tick.
     *
     */
    function stopSubProcessesAsapSync() {
        var e_6, _a;
        try {
            for (var _b = __values(getSubProcesses(process.pid, "DIRECT SUB PROCESSES ONLY")), _c = _b.next(); !_c.done; _c = _b.next()) {
                var pid = _c.value;
                if (stopSubProcessesAsapSync.ignorePids.has(pid)) {
                    continue;
                }
                stopProcessSync(pid, "SIGKILL", 0);
            }
        }
        catch (e_6_1) { e_6 = { error: e_6_1 }; }
        finally {
            try {
                if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
            }
            finally { if (e_6) throw e_6.error; }
        }
    }
    stopProcessSync.stopSubProcessesAsapSync = stopSubProcessesAsapSync;
    (function (stopSubProcessesAsapSync) {
        stopSubProcessesAsapSync.ignorePids = new Set();
    })(stopSubProcessesAsapSync = stopProcessSync.stopSubProcessesAsapSync || (stopProcessSync.stopSubProcessesAsapSync = {}));
    /** Invoke kill, can't throw */
    function kill(pid, signal) {
        try {
            execSyncNoCmdTrace("kill -" + signal + " " + pid, { "stdio": "pipe", "shell": "/bin/bash" });
        }
        catch (_a) {
        }
    }
    stopProcessSync.kill = kill;
    /**
     * Get the list of subprocess of a process ( return a list of pid )
     */
    function getSubProcesses(pid, depth) {
        var _a = child_process.spawnSync("/bin/ps", ["--ppid", "" + pid, "-o", "pid,state"], { "shell": false }), stdout = _a.stdout, ps_pid = _a.pid, ps_exitCode = _a.status;
        if (ps_exitCode !== 0) {
            return [];
        }
        var pids = stdout
            .toString("utf8")
            .split("\n")
            .filter(function (v) { return !v.match(/Z/); })
            .map(function (v) { return v.replace(/[^0-9]/g, ""); })
            .filter(function (v) { return !!v; })
            .map(function (v) { return parseInt(v); })
            .filter(function (pid) { return pid !== ps_pid; });
        switch (depth) {
            case "DIRECT SUB PROCESSES ONLY": return pids;
            case "FULL PROCESS TREE": return (function () {
                var e_7, _a;
                var out = [];
                try {
                    for (var pids_1 = __values(pids), pids_1_1 = pids_1.next(); !pids_1_1.done; pids_1_1 = pids_1.next()) {
                        var pid_2 = pids_1_1.value;
                        out = __spread(out, getSubProcesses(pid_2, "FULL PROCESS TREE"), [pid_2]);
                    }
                }
                catch (e_7_1) { e_7 = { error: e_7_1 }; }
                finally {
                    try {
                        if (pids_1_1 && !pids_1_1.done && (_a = pids_1.return)) _a.call(pids_1);
                    }
                    finally { if (e_7) throw e_7.error; }
                }
                return out;
            })();
        }
    }
    stopProcessSync.getSubProcesses = getSubProcesses;
    /** Return true only if exist and is not a daemon */
    function isProcessRunning(pid) {
        var psCmdOut;
        try {
            psCmdOut = execSyncNoCmdTrace("ps --pid " + pid + " -o state");
        }
        catch (_a) {
            return false;
        }
        return !psCmdOut.match(/Z/);
    }
    stopProcessSync.isProcessRunning = isProcessRunning;
    /** Debug function to print the process tree of the current process. */
    function _printProcessTree(log) {
        if (log === void 0) { log = console.log.bind(console); }
        var rec = function (node) {
            var e_8, _a;
            var pids = getSubProcesses(node.pid, "DIRECT SUB PROCESSES ONLY");
            if (pids.length === 0) {
                return;
            }
            node.sub = [];
            try {
                for (var pids_2 = __values(pids), pids_2_1 = pids_2.next(); !pids_2_1.done; pids_2_1 = pids_2.next()) {
                    var pid = pids_2_1.value;
                    var sub_node = { pid: pid };
                    node.sub.push(sub_node);
                    rec(sub_node);
                }
            }
            catch (e_8_1) { e_8 = { error: e_8_1 }; }
            finally {
                try {
                    if (pids_2_1 && !pids_2_1.done && (_a = pids_2.return)) _a.call(pids_2);
                }
                finally { if (e_8) throw e_8.error; }
            }
        };
        var tree = { "pid": process.pid };
        rec(tree);
        log(JSON.stringify(tree, null, 3));
    }
    stopProcessSync._printProcessTree = _printProcessTree;
    stopProcessSync.log = function () { };
})(stopProcessSync = exports.stopProcessSync || (exports.stopProcessSync = {}));
/**
 *
 * Function to create the entry point (main.js) of a node service that can:
 * -Restart on crash (without relying on systemd to do so).
 * -Execute as specific unix user but can perform tasks as root before start.
 * -Be stopped gracefully by sending USR2 signal on the root process ( identified by pidfile ).
 * -Be started via a shell and gracefully stopped with CTRL-C (INT signal).
 * -Ensure only one instance of the service run at the same time.
 *      ( if at the time the main is called there is an other instance of the service
 *      running it is gracefully terminated )
 * -Ensure that the process will terminate in at most [ stop_timeout ] ms after
 *      receiving INT or USR2 signal. (default 5second)
 * -Forward daemon processes stdout to root process stdout.
 * -Can fork multiple daemon process.
 *
 * The root process forward command line arguments and environnement variable to
 * the daemon processes.
 *
 * => rootProcess function should return ( when not default ):
 * -pidfile_path: where to store the pid of the root process.
 *      take to terminate after requested to exit gracefully.
 * -srv_name: Name of the service to overwrite the process names. (Default: not overwriting)
 * -stop_timeout: The maximum amount of time ( in ms ) the
 *      that beforeExitTask can take to complete before being killed by force by root process.
 *      After receiving USR2 signal or CTRL, the root process will be closed within [trop_timeout]+1000ms
 * -assert_unix_user: enforce that the main be called by a specific user.
 * -isQuiet?: set to true to disable process debug info logging on stdout. Prefixed by [ service ]. ( default false )
 * -doForwardDaemonStdout?: set to true to forward everything the daemon
 *      process write to stdout to the root process stdout. ( default true )
 * -daemon_unix_user?: User who should own the daemon process.
 * -daemon_node_path?: Node.js executable that should be used to by the daemon process.
 * -daemon_cwd?: working directory of the daemon process.
 * -daemon_restart_after_crash_delay?: ( Default to 500ms. )Delay in ms before restarting the daemon
 *      after it terminate without being requested to. If set to a negative number the daemons
 *      will not be restarted after it terminate for the first time and :
 *      If all daemons process exited with 0 and there is no other daemon process the root process
 *      will end with a clean exit code.
 *      If any of the daemon exit with an unclean code the root process will be terminated with an error code
 *      even if there is some other daemon running.
 * -daemon_count: Number of instance of daemon process that should be forked, default 1.
 * -max_consecutive_restart: Number of time a daemon should be restarted after crashing right after start.
 *      (Default ~Infinity).
 * -preForkTask: Task to perform before forking a daemon process.
 *      It is called just before forking the daemon process. ( called again on every restart. )
 *      If the function is async the daemon will not be forked until the returned promise resolve.
 *      If the function throw exception root process will exit with code 1.
 *      (pidfile will be deleted)
 *      If the function is async and if it need to spawn child processes then
 *      an implementation for terminateSubProcess ( passed as reference ) should be provided so that
 *      if when called it kill all the child processes then resolve once they are terminated.
 *      The to which the promise resolve will be used as exit code for the root process.
 *      Note that terminateSubProcess should never be called, it is a OUT parameter.
 *      However if the implementation provided is just to send a SIGKILL to the forked processes
 *      then there is no need to provide an implementation as all the root process's sub processes tree
 *      will be killed before exiting anyway.
 *
 * => daemonProcess
 * It should return:
 * -launch: the function that the daemon process need to call to start the actual job that the service is meant to perform.
 * -beforeExitTask: function that should be called before the daemon process exit. ( e.g. creating crash report ).
 *      If the daemon process is terminating due to an error the error will be passed as argument.
 *      There is two scenario that will led to this function NOT being called:
 *      1)The daemon process receive KILL or other deadly signal that can't be overridden.
 *      2)The root process terminate.
 * daemon_number represent the instance index of the daemon among the total of [damon_count] process forked.
 * It can be user to use a different logfile for each daemon process instance.
 *
 * NOTE: If the root process receive a deadly signal other than INT, USR2 or HUP
 * ( e.g. KILL or STOP ) the root and daemon processes will immediately terminate without
 * executing beforeExit tasks or removing pidfile.
 *
 * NOTE: because setting listener on "message" and "disconnect" process event prevent the
 * thread from terminating naturally where is nothing more to do if you wish to manually
 * terminate the daemon process without termination being requested from the parent you can:
 *        1) emit "beforeExit" on process setting the desired exit code ( process.emit("beforeExit", process.exitCode= X);
 *        2) throw an exception.
 *
 */
function createService(params) {
    var _this = this;
    var log = (function () { });
    var getLog = function (prefix) {
        return (function () {
            var args = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                args[_i] = arguments[_i];
            }
            return process.stdout.write(Buffer.from("[service] ( " + prefix + " ) " + util.format.apply(util, args) + "\n", "utf8"));
        });
    };
    var rootProcess = params.rootProcess, daemonProcess = params.daemonProcess;
    var main_root = function (main_js_path) { return __awaiter(_this, void 0, void 0, function () {
        var _a, pidfile_path, srv_name, _stop_timeout, assert_unix_user, isQuiet, _doForwardDaemonStdout, daemon_unix_user, daemon_node_path, daemon_cwd, _daemon_restart_after_crash_delay, max_consecutive_restart, preForkTask, _daemon_count, stop_timeout, doForwardDaemonStdout, daemon_restart_after_crash_delay, daemon_count, daemonContexts, isTerminating, args, _b, daemon_uid, daemon_gid, makeForkOptions, forkDaemon, daemon_number;
        var _this = this;
        return __generator(this, function (_c) {
            switch (_c.label) {
                case 0: return [4 /*yield*/, rootProcess()];
                case 1:
                    _a = _c.sent(), pidfile_path = _a.pidfile_path, srv_name = _a.srv_name, _stop_timeout = _a.stop_timeout, assert_unix_user = _a.assert_unix_user, isQuiet = _a.isQuiet, _doForwardDaemonStdout = _a.doForwardDaemonStdout, daemon_unix_user = _a.daemon_unix_user, daemon_node_path = _a.daemon_node_path, daemon_cwd = _a.daemon_cwd, _daemon_restart_after_crash_delay = _a.daemon_restart_after_crash_delay, max_consecutive_restart = _a.max_consecutive_restart, preForkTask = _a.preForkTask, _daemon_count = _a.daemon_count;
                    if (srv_name !== undefined) {
                        process.title = srv_name + " root process";
                    }
                    stop_timeout = _stop_timeout !== undefined ?
                        _stop_timeout : 5000;
                    doForwardDaemonStdout = _doForwardDaemonStdout !== undefined ?
                        _doForwardDaemonStdout : true;
                    daemon_restart_after_crash_delay = _daemon_restart_after_crash_delay !== undefined ?
                        _daemon_restart_after_crash_delay : 500;
                    daemon_count = _daemon_count !== undefined ?
                        _daemon_count : 1;
                    if (assert_unix_user !== undefined && os.userInfo().username !== assert_unix_user) {
                        console.log(colorize("Must be run as " + assert_unix_user, "RED"));
                        process.exit(1);
                        return [2 /*return*/];
                    }
                    if (!isQuiet) {
                        log = getLog("root process");
                    }
                    stopProcessSync.log = log;
                    try {
                        stopProcessSync(pidfile_path);
                    }
                    catch (error) {
                        if (!(error instanceof stopProcessSync.PidMatchCurrentProcessError)) {
                            throw error;
                        }
                        error.cleanupRunfiles();
                    }
                    if (fs.existsSync(pidfile_path)) {
                        throw Error("Other instance launched simultaneously");
                    }
                    (function createPidfile() {
                        var pidfile_dir_path = path.dirname(pidfile_path);
                        if (!fs.existsSync(pidfile_dir_path)) {
                            execSyncNoCmdTrace("mkdir -p " + pidfile_dir_path);
                        }
                        fs.writeFileSync(pidfile_path, process.pid.toString());
                    })();
                    log("PID: " + process.pid);
                    daemonContexts = new Map((new Array(daemon_count))
                        .fill(null)
                        .map(function (_, index) {
                        var context = [
                            index + 1,
                            {
                                "daemonProcess": undefined,
                                "terminatePreForkChildProcesses": { "impl": function () { return Promise.resolve(); } },
                                "restart_attempt_remaining": max_consecutive_restart || NaN,
                                "reset_restart_attempt_timer": setTimeout(function () { }, 0)
                            }
                        ];
                        return context;
                    }));
                    isTerminating = false;
                    setProcessExitHandler(function (exitCause) { return __awaiter(_this, void 0, void 0, function () {
                        var childProcessExitCode;
                        return __generator(this, function (_a) {
                            switch (_a.label) {
                                case 0:
                                    isTerminating = true;
                                    return [4 /*yield*/, (function terminateAllChildProcesses() {
                                            return __awaiter(this, void 0, void 0, function () {
                                                var terminateDaemonProcess, terminatePreForkChildProcessesSafeCall, tasks, _loop_3, _a, _b, _c, daemonProcess_1, terminatePreForkChildProcesses;
                                                var e_9, _d;
                                                var _this = this;
                                                return __generator(this, function (_e) {
                                                    switch (_e.label) {
                                                        case 0:
                                                            terminateDaemonProcess = function (daemonProcess) { return __awaiter(_this, void 0, void 0, function () {
                                                                return __generator(this, function (_a) {
                                                                    return [2 /*return*/, new Promise(function (resolve) {
                                                                            log("Attempt to gracefully terminate daemon process PID: " + daemonProcess.pid + "...");
                                                                            daemonProcess.send(null);
                                                                            var timer = setTimeout(function () { return doStopAsap(); }, stop_timeout + 500);
                                                                            daemonProcess.once("error", function () { return doStopAsap(); });
                                                                            daemonProcess.once("close", function (childProcessExitCode) {
                                                                                clearTimeout(timer);
                                                                                log("Daemon process PID: " + daemonProcess.pid + " exited with code " + childProcessExitCode);
                                                                                if (typeof childProcessExitCode !== "number" || isNaN(childProcessExitCode)) {
                                                                                    childProcessExitCode = 1;
                                                                                }
                                                                                resolve(childProcessExitCode);
                                                                            });
                                                                            var doStopAsap = function () {
                                                                                log("Daemon process PID:" + daemonProcess.pid + " not responding, force kill...");
                                                                                clearTimeout(timer);
                                                                                daemonProcess.removeAllListeners("error");
                                                                                daemonProcess.removeAllListeners("close");
                                                                                stopProcessSync.stopProcessAsapSync(daemonProcess.pid);
                                                                                resolve(1);
                                                                            };
                                                                        })];
                                                                });
                                                            }); };
                                                            terminatePreForkChildProcessesSafeCall = function (impl) {
                                                                var timer;
                                                                return Promise.race([
                                                                    new Promise(function (resolve) { return timer = setTimeout(function () { return resolve("TIMEOUT"); }, stop_timeout + 500); }),
                                                                    (function () { return __awaiter(_this, void 0, void 0, function () {
                                                                        var result, _a;
                                                                        return __generator(this, function (_b) {
                                                                            switch (_b.label) {
                                                                                case 0:
                                                                                    _b.trys.push([0, 2, , 3]);
                                                                                    return [4 /*yield*/, impl()];
                                                                                case 1:
                                                                                    _b.sent();
                                                                                    result = "SUCCESS";
                                                                                    return [3 /*break*/, 3];
                                                                                case 2:
                                                                                    _a = _b.sent();
                                                                                    result = "ERROR";
                                                                                    return [3 /*break*/, 3];
                                                                                case 3:
                                                                                    clearTimeout(timer);
                                                                                    return [2 /*return*/, result];
                                                                            }
                                                                        });
                                                                    }); })()
                                                                ]);
                                                            };
                                                            tasks = [];
                                                            _loop_3 = function (daemonProcess_1, terminatePreForkChildProcesses) {
                                                                tasks[tasks.length] = !daemonProcess_1 ? (new Promise(function (resolve) { return terminatePreForkChildProcessesSafeCall(terminatePreForkChildProcesses.impl)
                                                                    .then(function (result) { return result === "SUCCESS" ? resolve(0) : resolve(1); }); })) : terminateDaemonProcess(daemonProcess_1);
                                                            };
                                                            try {
                                                                for (_a = __values(daemonContexts.values()), _b = _a.next(); !_b.done; _b = _a.next()) {
                                                                    _c = _b.value, daemonProcess_1 = _c.daemonProcess, terminatePreForkChildProcesses = _c.terminatePreForkChildProcesses;
                                                                    _loop_3(daemonProcess_1, terminatePreForkChildProcesses);
                                                                }
                                                            }
                                                            catch (e_9_1) { e_9 = { error: e_9_1 }; }
                                                            finally {
                                                                try {
                                                                    if (_b && !_b.done && (_d = _a.return)) _d.call(_a);
                                                                }
                                                                finally { if (e_9) throw e_9.error; }
                                                            }
                                                            return [4 /*yield*/, Promise.all(tasks)];
                                                        case 1: return [2 /*return*/, (_e.sent()).reduce(function (accumulator, currentValue) { return accumulator === 0 ? currentValue : accumulator; }, 0)];
                                                    }
                                                });
                                            });
                                        })()];
                                case 1:
                                    childProcessExitCode = _a.sent();
                                    if (exitCause.type === "EXCEPTION") {
                                        /*
                                         preForkTask throw or daemonProcess emit error or
                                         one of the daemon exited with a non 0 code and
                                         restart_delay was set <0
                                        */
                                        log("Root process exception message: " + exitCause.error.message);
                                        process.exitCode = 1;
                                    }
                                    else {
                                        process.exitCode = childProcessExitCode;
                                    }
                                    fs.unlinkSync(pidfile_path);
                                    log("pidfile deleted");
                                    return [2 /*return*/];
                            }
                        });
                    }); }, stop_timeout + 1000);
                    setProcessExitHandler.log = log;
                    args = (function () {
                        var out = __spread(process.argv);
                        out.shift();
                        out.shift();
                        return out;
                    })();
                    _b = __read((function () {
                        if (!!daemon_unix_user) {
                            return [get_uid(daemon_unix_user), get_gid(daemon_unix_user)];
                        }
                        else {
                            return [undefined, undefined];
                        }
                    })(), 2), daemon_uid = _b[0], daemon_gid = _b[1];
                    makeForkOptions = function (daemon_number) { return ({
                        "uid": daemon_uid,
                        "gid": daemon_gid,
                        "silent": true,
                        "cwd": daemon_cwd,
                        "execPath": daemon_node_path,
                        "env": __assign({}, process.env, { daemon_number: daemon_number,
                            daemon_count: daemon_count,
                            srv_name: srv_name,
                            stop_timeout: stop_timeout, "isQuiet": isQuiet ? "1" : "0" })
                    }); };
                    forkDaemon = function (daemon_number) { return __awaiter(_this, void 0, void 0, function () {
                        var context, error_5, daemonProcess;
                        return __generator(this, function (_a) {
                            switch (_a.label) {
                                case 0:
                                    context = daemonContexts.get(daemon_number);
                                    clearTimeout(context.reset_restart_attempt_timer);
                                    if (!!!preForkTask) return [3 /*break*/, 5];
                                    log("performing pre fork tasks for daemon number " + daemon_number + "...");
                                    _a.label = 1;
                                case 1:
                                    _a.trys.push([1, 3, , 4]);
                                    return [4 /*yield*/, preForkTask(context.terminatePreForkChildProcesses, daemon_number)];
                                case 2:
                                    _a.sent();
                                    return [3 /*break*/, 4];
                                case 3:
                                    error_5 = _a.sent();
                                    log("PreFork tasks for daemon number " + daemon_number + " raised an exception");
                                    throw error_5;
                                case 4:
                                    context.terminatePreForkChildProcesses.impl = function () { return Promise.resolve(); };
                                    _a.label = 5;
                                case 5:
                                    if (isTerminating) {
                                        log("Not forking daemon because root process is terminating");
                                        return [2 /*return*/];
                                    }
                                    if (max_consecutive_restart !== undefined) {
                                        context.reset_restart_attempt_timer = setTimeout(function () { return context.restart_attempt_remaining = max_consecutive_restart; }, 10000);
                                    }
                                    log("Forking daemon process number " + daemon_number + " now.");
                                    daemonProcess = child_process.fork(main_js_path, args, makeForkOptions(daemon_number));
                                    context.daemonProcess = daemonProcess;
                                    if (doForwardDaemonStdout) {
                                        daemonProcess.stdout.on("data", function (data) {
                                            return process.stdout.write(data);
                                        });
                                    }
                                    daemonProcess.once("error", function (error) {
                                        if (isTerminating) {
                                            return;
                                        }
                                        context.daemonProcess = undefined;
                                        log([
                                            "Error evt emitted by daemon process number " + daemon_number,
                                            "Meaning that: ",
                                            "The process could not be spawned, or",
                                            "The process could not be killed, or",
                                            "Sending a message to the child process failed."
                                        ].join("\n"));
                                        throw error;
                                    });
                                    daemonProcess.once("close", function (childProcessExitCode) {
                                        if (isTerminating) {
                                            return;
                                        }
                                        context.daemonProcess = undefined;
                                        log("Daemon process " + daemon_number + " exited without being requested to.");
                                        if (daemon_restart_after_crash_delay < 0) {
                                            if (childProcessExitCode === null) {
                                                childProcessExitCode = 1;
                                            }
                                            log("Daemon number " + daemon_number + " will not be restarted.");
                                            clearTimeout(context.reset_restart_attempt_timer);
                                            if (childProcessExitCode !== 0) {
                                                throw new Error("Daemon number " + daemon_number + ", crashed");
                                            }
                                            else if (!Array.from(daemonContexts.values()).find(function (_a) {
                                                var daemonProcess = _a.daemonProcess;
                                                return !!daemonProcess;
                                            })) {
                                                log("As last remaining daemon process terminated cleanly we stop end root process");
                                                process.emit("beforeExit", NaN);
                                            }
                                            return;
                                        }
                                        if (max_consecutive_restart !== undefined) {
                                            if (context.restart_attempt_remaining-- === 0) {
                                                throw new Error("Daemon process " + daemon_number + " is crashing over and over");
                                            }
                                            else {
                                                log("Restart remaining: " + context.restart_attempt_remaining);
                                            }
                                        }
                                        log("Daemon process " + daemon_number + " will be restarted");
                                        setTimeout(function () { return forkDaemon(daemon_number); }, daemon_restart_after_crash_delay);
                                    });
                                    return [2 /*return*/];
                            }
                        });
                    }); };
                    for (daemon_number = 1; daemon_number <= daemon_count; daemon_number++) {
                        forkDaemon(daemon_number);
                    }
                    return [2 /*return*/];
            }
        });
    }); };
    var main_daemon = function () { return __awaiter(_this, void 0, void 0, function () {
        var _a, daemon_number, daemon_count, stop_timeout, isQuiet, srv_name, _b, launch, beforeExitTask;
        var _this = this;
        return __generator(this, function (_c) {
            switch (_c.label) {
                case 0:
                    _a = __read(["daemon_number", "daemon_count", "stop_timeout", "isQuiet"].map(function (key) {
                        var value = parseInt(process.env[key]);
                        delete process.env[key];
                        return value;
                    }), 4), daemon_number = _a[0], daemon_count = _a[1], stop_timeout = _a[2], isQuiet = _a[3];
                    srv_name = (function () {
                        var key = "srv_name";
                        var value = process.env[key];
                        delete process.env[key];
                        if (value === "" + undefined) {
                            return undefined;
                        }
                        else {
                            return value;
                        }
                    })();
                    if (!isQuiet) {
                        log = getLog("daemon process " + daemon_number + "/" + daemon_count + ", PID: " + process.pid);
                    }
                    if (srv_name !== undefined) {
                        process.title = srv_name + " daemon " + (daemon_count === 1 ? "" : daemon_number);
                    }
                    return [4 /*yield*/, daemonProcess(daemon_number, daemon_count)];
                case 1:
                    _b = _c.sent(), launch = _b.launch, beforeExitTask = _b.beforeExitTask;
                    process.once("message", function () { return process.emit("beforeExit", process.exitCode = 0); });
                    process.once("disconnect", function () { return process.exit(1); });
                    setProcessExitHandler(function (exitCause) { return __awaiter(_this, void 0, void 0, function () {
                        var error, prBeforeExitTask;
                        return __generator(this, function (_a) {
                            switch (_a.label) {
                                case 0:
                                    error = exitCause.type === "EXCEPTION" ? exitCause.error : undefined;
                                    if (!!!beforeExitTask) return [3 /*break*/, 2];
                                    prBeforeExitTask = beforeExitTask(error);
                                    if (!(prBeforeExitTask instanceof Promise)) return [3 /*break*/, 2];
                                    return [4 /*yield*/, safePr(prBeforeExitTask, stop_timeout + 2000).then(function (error) {
                                            if (error instanceof Error) {
                                                //NOTE: Throwing does not overwrite the exit code.
                                                if (error.message === safePr.timeoutErrorMessage) {
                                                    //NOTE: Throwing string to not have the log of setProcessExitHandler
                                                    //display the stack trace.
                                                    throw "beforeExitTask took too much time to complete.";
                                                }
                                                else {
                                                    throw error;
                                                }
                                            }
                                        })];
                                case 1:
                                    _a.sent();
                                    _a.label = 2;
                                case 2: return [2 /*return*/];
                            }
                        });
                    }); }, -1, function (exitCause) { return exitCause.type !== "SIGNAL"; });
                    setProcessExitHandler.log = log;
                    launch();
                    return [2 /*return*/];
            }
        });
    }); };
    if (!process.send) {
        main_root(get_caller_file_path_2.get_caller_file_path());
    }
    else {
        main_daemon();
    }
}
exports.createService = createService;
var systemd;
(function (systemd) {
    var mkPath = function (srv_name) { return "/etc/systemd/system/" + srv_name + ".service"; };
    /**
     * Generate a systemd config file for a service created via "createService" function
     * enable by default, start by default.
     */
    function createConfigFile(srv_name, main_js_path, node_path, enable, start) {
        if (node_path === void 0) { node_path = process.argv[0]; }
        if (enable === void 0) { enable = "ENABLE"; }
        if (start === void 0) { start = "START"; }
        fs.writeFileSync(mkPath(srv_name), Buffer.from([
            "[Unit]",
            "After=network.target",
            "",
            "[Service]",
            "ExecStart=" + node_path + " " + main_js_path,
            "StandardOutput=inherit",
            "KillMode=process",
            "KillSignal=SIGUSR2",
            "SendSIGKILL=no",
            "Environment=NODE_ENV=production",
            "",
            "[Install]",
            "WantedBy=multi-user.target",
            ""
        ].join("\n"), "utf8"));
        execSyncNoCmdTrace("systemctl daemon-reload");
        if (!!enable) {
            execSyncNoCmdTrace("systemctl enable " + srv_name, { "stdio": "pipe" });
        }
        if (!!start) {
            execSyncNoCmdTrace("systemctl start " + srv_name);
        }
    }
    systemd.createConfigFile = createConfigFile;
    /** Remove config file disable and reload daemon, never throw, stop is false by default */
    function deleteConfigFile(srv_name, stop) {
        if (stop === void 0) { stop = false; }
        if (!!stop) {
            execSyncNoCmdTrace("systemctl stop " + srv_name + " || true", { "stdio": "pipe" });
        }
        execSyncNoCmdTrace("systemctl disable " + srv_name + " || true", { "stdio": "pipe" });
        try {
            fs.unlinkSync(mkPath(srv_name));
        }
        catch (_a) { }
        execSyncNoCmdTrace("systemctl daemon-reload || true", { "stdio": "pipe" });
    }
    systemd.deleteConfigFile = deleteConfigFile;
})(systemd = exports.systemd || (exports.systemd = {}));
