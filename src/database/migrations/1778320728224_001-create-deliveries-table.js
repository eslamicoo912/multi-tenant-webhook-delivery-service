
export const up = (pgm) => {
    pgm.createTable("deliveries", {
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
        event_id: {
            type: "uuid",
            notNull: true,
            references: "events",
            onDelete: "CASCADE",
        },
        subscription_id: {
            type: "uuid",
            notNull: true,
            references: "subscriptions",
            onDelete: "CASCADE",
        },
        status: {
            type: "varchar(255)",
            notNull: true,
            default: "PENDING",
        },
        response_status_code: {
            type: "integer",
        },
        attempt_count: {
            type: "integer",
            notNull: true,
            default: 0,
        },
        error_message: {
            type: "text",
        },
        last_attempt_at: {
            type: "timestamptz",
        },
        next_attempt_at: {
            type: "timestamptz",
            notNull: true,
            default: pgm.func("now() + interval '1 minute'"),
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

    pgm.createIndex("deliveries", ["event_id"], {
        name: "idx_deliveries_event",
    });

    pgm.createIndex("deliveries", ["status"], {
        name: "idx_deliveries_status",
    });

    pgm.createIndex("deliveries", ["next_attempt_at"], {
        name: "idx_deliveries_next_attempt",
    });
};

export const down = (pgm) => {
    pgm.dropTable("deliveries");
};
