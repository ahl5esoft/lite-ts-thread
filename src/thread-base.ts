export abstract class ThreadBase {
    public abstract sleep(ms: number): Promise<void>;
    public abstract sleepRange(minMs: number, maxMs: number): Promise<void>;
    public abstract stopWatch<T>(title: string, func: () => Promise<T>): Promise<T>;
    public abstract try<T>(func: () => Promise<T>, count: number, interval?: number): Promise<T>;
}