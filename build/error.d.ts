export declare function getErrnoMessage(errno?: number): string;
export declare const getExitCodeInfo: (exitCode: number | null) => string | undefined;
export declare const formatExitMessage: (code: number | null, signal: NodeJS.Signals | null, stderr: string, from: string, details?: string) => string;
export declare const formatErrorMessage: (err: NodeJS.ErrnoException, from: string) => string;
export declare function getCallerLocation(err?: Error): string;
export declare function getCallerLocationFromString(stackString?: string): string;
export declare const formatErrorDetails: (lines?: string[], lim?: number) => string;
