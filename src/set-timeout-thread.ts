import { ThreadBase } from './thread-base';

export class SetTimeoutThread extends ThreadBase {
    public async sleep(ms: number) {
        if (ms < 0)
            throw new Error('ms不能小于0');

        await new Promise<void>(s => {
            setTimeout(() => {
                s();
            }, ms);
        });
    }

    public async sleepRange(minMs: number, maxMs: number) {
        if (minMs < 0 || maxMs < 0)
            throw new Error('minMs或maxMs不能小于0');

        const ms = Math.floor(
            Math.random() * (maxMs - minMs)
        );
        await this.sleep(minMs + ms);
    }

    public async stopWatch<T>(title: string, func: () => Promise<T>) {
        const begin = Date.now();
        const res = await func();
        console.log(
            title,
            Date.now() - begin
        );
        return res;
    }

    public async try<T>(func: () => Promise<T>, count: number, interval = 5 * 1000) {
        let err: Error;
        for (let i = 0; i < count; i++) {
            if (i)
                await this.sleep(interval);

            try {
                return await func();
            } catch (ex) {
                err = ex;
            }
        }
        if (err)
            throw err;
    }
}