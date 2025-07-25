import { default as _chalk } from 'chalk';
import { default as _which } from 'which';
import { default as _ps } from '@webpod/ps';
export { type TSpawnStore, type TSpawnStoreChunks, type TSpawnResult, exec, buildCmd, isStringLiteral, VoidStream, } from 'zurk/spawn';
export type RequestInfo = Parameters<typeof globalThis.fetch>[0];
export type RequestInit = Parameters<typeof globalThis.fetch>[1] & {
    signal?: AbortSignal;
};
export { type ChalkInstance } from 'chalk';
export declare const chalk: typeof _chalk;
export declare const which: typeof _which;
export declare const ps: typeof _ps;
