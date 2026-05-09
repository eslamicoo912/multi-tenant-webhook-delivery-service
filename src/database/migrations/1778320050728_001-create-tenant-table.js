
export async function up(pgm) {
    pgm.sql(`
    CREATE EXTENSION IF NOT EXISTS pgcrypto;
  `);

    pgm.createTable("tenants", {
        id: {
            type: "uuid",
            primaryKey: true,
            default: pgm.func("gen_random_uuid()"),
        },

        name: {
            type: "varchar(255)",
            notNull: true,
        },

        api_key: {
            type: "varchar(255)",
            notNull: true,
            unique: true,
        },

        created_at: {
            type: "timestamptz",
            notNull: true,
            default: pgm.func("now()"),
        },
    });

    pgm.createIndex("tenants", "api_key", {
        unique: true,
        name: "idx_tenants_api_key",
    });
}

export async function down(pgm) {
    pgm.dropTable("tenants");
}