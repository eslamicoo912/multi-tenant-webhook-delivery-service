export const up = (pgm) => {
    pgm.createTable("subscriptions", {
        id: {
            type: "uuid",
            primaryKey: true,
            default: pgm.func("gen_random_uuid()"),
        },
        tenant_id: {
            type: "uuid",
            notNull: true,
            references: "tenants",
            onDelete: "CASCADE",
        },
        event_type: {
            type: "varchar(255)",
            notNull: true,
        },
        target_url: {
            type: "varchar(255)",
            notNull: true,
        },
        is_active: {
            type: "boolean",
            notNull: true,
            default: true,
        },
        created_at: {
            type: "timestamptz",
            notNull: true,
            default: pgm.func("now()"),
        },
        updated_at: {
            type: "timestamptz",
            notNull: true,
            default: pgm.func("now()"),
        },
    });

    pgm.createIndex("subscriptions", ["tenant_id", "event_type"], {
        unique: true,
        name: "idx_subscriptions_tenant_event",
    });
};

export const down = (pgm) => {
    pgm.dropTable("subscriptions");
};
