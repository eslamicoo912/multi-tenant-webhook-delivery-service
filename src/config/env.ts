import 'dotenv/config'

const requireString = (key: string): string => {
    const value = process.env[key]
    if (!value || value.trim() === '') {
        throw new Error(`Missing required environment variable: ${key}`)
    }
    return value.trim()
}

const optionalString = (key: string, fallback: string): string => {
    return process.env[key]?.trim() || fallback
}

const requirePort = (key: string, fallback: number): number => {
    const value = process.env[key]
    if (!value) return fallback
    const parsed = parseInt(value, 10)
    if (isNaN(parsed)) throw new Error(`Environment variable ${key} must be a valid port number`)
    return parsed
}

// Validate all at startup — app crashes immediately if anything is missing
export const env = {
    NODE_ENV: optionalString('NODE_ENV', 'development'),
    PORT: requirePort('PORT', 3000),

    JWT_ACCESS_SECRET: requireString('JWT_ACCESS_SECRET'),
    JWT_REFRESH_SECRET: requireString('JWT_REFRESH_SECRET'),
    JWT_CLIENT_SECRET: requireString('JWT_CLIENT_SECRET'),

    CLIENT_URL: optionalString('CLIENT_URL', 'http://localhost:5173'),

    // PostgresSQL variables
    PG_DATABASE: requireString("PG_DATABASE"),
    PG_HOST: requireString("PG_HOST"),
    PG_PASSWORD: requireString("PG_PASSWORD"),
    PG_USER: requireString("PG_USER"),
    PG_PORT: requirePort("PG_PORT", 5432),
    DATABASE_URL: requireString("DATABASE_URL")
}