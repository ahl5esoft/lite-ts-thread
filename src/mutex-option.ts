export type MutexOption = {
    key: string;
    timeoutSeconds?: number;
    tryCount?: number;
    sleepRange?: [number, number];
};