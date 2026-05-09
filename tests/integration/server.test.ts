import app from "../../src/app";
import request from "supertest";

describe("Server", () => {
    it("should respond with 200 for GET /", async () => {
        const response = await request(app).get("/");
        expect(response.status).toBe(200);
        expect(response.text).toBe("Hello World!");
    });
});