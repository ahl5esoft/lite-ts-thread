# ![Version](https://img.shields.io/badge/version-1.0.0-green.svg)

## 安装

```
npm install lite-ts-thread
```

## 使用

```typescript
import { SetTimeoutThread } from 'lite-ts-thread';

const thread = new SetTimeoutThread();

await thread.sleep(1000); // 休眠等待1秒
await thread.sleepRange(1000, 2000); // 随机休眠等待1~2秒

await thread.stopWatch('1-1000累加耗时', async () => {
    const reuslt = 0;
    for (let i = 0; i < 1000; i++)
        result += i;
    return result;
}); // 计算某个函数的运行耗时
```
