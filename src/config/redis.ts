import Redis from "ioredis";

export const redis = new Redis({
    host: process.env.REDIS_HOST || "127.0.0.1",
    port: Number(process.env.REDIS_PORT) || 6379,

    maxRetriesPerRequest: null,

    retryStrategy: (times: number) => {
        const delay = Math.min(times * 50, 2000);
        return delay;
    },
});

redis.on("connect", () => {
    console.log("Redis connected");
});

redis.on("error", (err: Error) => {
    console.error("Redis error:", err.message);
});

redis.on("reconnecting", () => {
    console.log("Redis reconnecting...");
});