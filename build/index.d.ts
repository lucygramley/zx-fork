import { ProcessPromise } from './core.ts';
export * from './core.ts';
export * from './goods.ts';
export { minimist, dotenv, fs, YAML, glob, glob as globby } from './vendor.ts';
export declare const VERSION: string;
export declare const version: string;
/**
 *  @deprecated Use $`cmd`.nothrow() instead.
 */
export declare function nothrow(promise: ProcessPromise): ProcessPromise;
/**
 * @deprecated Use $`cmd`.quiet() instead.
 */
export declare function quiet(promise: ProcessPromise): ProcessPromise;
