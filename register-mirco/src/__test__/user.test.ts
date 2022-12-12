
import request from "supertest";
import app from "../app";

const User={
    name:"example",
    email:"example@gmail.com",
    password:"password"
}

describe("server listen", () => {
    test('GET /', async () => {
        const result = await request(app).get("/").send()
        expect(result.status).toEqual(200)
        expect(result.body).toEqual({message:"hola mundo"})
    });
})

describe('local', () => {
    test('Post',async () => {
        const result= await request(app).post("/").send(User)
        expect(result.body).toEqual({message:"no exito"})
    });
})