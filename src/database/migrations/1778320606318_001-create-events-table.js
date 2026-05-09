export const up = (pgm) => {
    pgm.createTable("events", {
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
        payload: {
            type: "jsonb",
            notNull: true,
        },
        status: {
            type: "varchar(255)",
            notNull: true,
            default: "PENDING",
        },
        created_at: {
            type: "timestamptz",
            notNull: true,
            default: pgm.func("now()"),
        },
    });

    pgm.createIndex("events", ["tenant_id", "event_type"], {
        name: "idx_events_tenant_event",
    });
};

export const down = (pgm) => {
    pgm.dropTable("events");
};
