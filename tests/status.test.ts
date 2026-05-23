import request from "supertest";
import { app } from "../src/app.js";

describe("GET /status", () => {
  it("should return a 200 status", async () => {
    const response = await request(app).get("/status");
    expect(response.status).toBe(200);
  });
  it("should return an OK string", async () => {
    const response = await request(app).get("/status");
    expect(response.text).toBe("OK");
  });
});
