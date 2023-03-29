import { MutexOption } from './mutex-option';

export abstract class MutexBase {
    public abstract lock(opt: MutexOption): Promise<() => Promise<void>>;
}