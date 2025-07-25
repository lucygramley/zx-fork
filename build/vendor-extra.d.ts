import { URL } from 'node:url';
import { convertPathToPattern, globby, globbySync, globbyStream, generateGlobTasksSync, generateGlobTasks, isGitIgnoredSync, isGitIgnored, isDynamicPattern } from 'globby';
import { fetch as _nodeFetch } from 'node-fetch-native';
import { depseekSync as _depseek } from 'depseek';
import { default as _minimist } from 'minimist';
import { default as _dotenv } from 'envapi';
export declare const createRequire: (filename: string | URL) => NodeJS.Require;
declare const globbyModule: {
    convertPathToPattern: typeof convertPathToPattern;
    globby: typeof globby;
    sync: typeof globbySync;
    globbySync: typeof globbySync;
    globbyStream: typeof globbyStream;
    generateGlobTasksSync: typeof generateGlobTasksSync;
    generateGlobTasks: typeof generateGlobTasks;
    isGitIgnoredSync: typeof isGitIgnoredSync;
    isGitIgnored: typeof isGitIgnored;
    isDynamicPattern: typeof isDynamicPattern;
};
declare const _glob: (typeof globbyModule)["globby"] & typeof globbyModule;
declare const _YAML: YAML;
export interface YAML {
    parse(text: string): any;
    stringify(object: any): string;
    /** @deprecated */
    parseAllDocuments(s: string, opts?: any): any[];
    /** @deprecated */
    parseDocument(s: string, opts?: any): any;
    /** @deprecated */
    isAlias(v: any): boolean;
    /** @deprecated */
    isCollection(v: any): boolean;
    /** @deprecated */
    isDocument(v: any): boolean;
    /** @deprecated */
    isMap(v: any): boolean;
    /** @deprecated */
    isNode(v: any): boolean;
    /** @deprecated */
    isPair(v: any): boolean;
    /** @deprecated */
    isScalar(v: any): boolean;
    /** @deprecated */
    isSeq(v: any): boolean;
    /** @deprecated */
    Alias: any;
    /** @deprecated */
    Composer: any;
    /** @deprecated */
    Document: any;
    /** @deprecated */
    Schema: any;
    /** @deprecated */
    YAMLSeq: any;
    /** @deprecated */
    YAMLMap: any;
    /** @deprecated */
    YAMLError: any;
    /** @deprecated */
    YAMLParseError: any;
    /** @deprecated */
    YAMLWarning: any;
    /** @deprecated */
    Pair: any;
    /** @deprecated */
    Scalar: any;
    /** @deprecated */
    Lexer: any;
    /** @deprecated */
    LineCounter: any;
    /** @deprecated */
    Parser: any;
}
export declare const depseek: typeof _depseek;
export declare const dotenv: typeof _dotenv;
export declare const fs: typeof import('fs-extra');
export declare const YAML: typeof _YAML;
export declare const glob: typeof _glob;
export declare const nodeFetch: typeof _nodeFetch;
export declare const minimist: typeof _minimist;
export declare namespace minimist {
    interface Opts extends _minimist.Opts {
    }
    interface ParsedArgs extends _minimist.ParsedArgs {
    }
}
export {};
