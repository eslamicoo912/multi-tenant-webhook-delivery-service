import crypto from "crypto";

export const generateApiKey = (): string => {
    const randomPart = crypto.randomBytes(32).toString("hex");

    return `wk_${randomPart}`;
};