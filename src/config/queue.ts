import { Queue, QueueOptions } from "bullmq";
import { redis } from "./redis";
import { QUEUE_NAMES } from "../shared/constants/queue.constants";

const defaultQueueOptions: QueueOptions = {
    connection: redis,
    defaultJobOptions: {
        attempts: 3,
        backoff: {
            type: "exponential",
            delay: 2000,
        },
        removeOnComplete: true,
        removeOnFail: false,
    },
};

export const deliveryQueue = new Queue(
    QUEUE_NAMES.DELIVERY,
    defaultQueueOptions
);