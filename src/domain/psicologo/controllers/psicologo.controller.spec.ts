import { response } from "express";
import supertest from "supertest";
import app from "../../..";

describe('On Psicologo.controller, function should', () =>{

    describe('create', () =>{

        

        test('Success response should return 201', async () => {
            const response =  await supertest(app)
            .post('/psicologos')
            .send({
                "nome": "Pedrdsado Ka",
                "email": "pedrsodka@gmail.com",
                "senha": "uhusamkkk",
                "apresentacao": "blabdslsaabla",
                "cep": "01001000"
            })

            expect(response.status).toBe(201) 
        })

        test('Check if response value is ok', async() =>{
            // expect(response.body).toHaveReturnedWith(body);
            const response =  await supertest(app)
            .post('/psicologos')
            .send({
                    "nome": "Pedssrdo Ka",
                    "email": "pedrsodddka@gmail.com",
                    "senha": "uhumaskkk",
                    "apresentacao": "blabdlsaabla",
                    "cep": "01001000"
                
            })

            expect(response.body).toEqual(
                expect.objectContaining({
                    id: expect.any(Number),
                    nome: expect.any(String),
                    senha: expect.any(String),
                    apresentacao: expect.any(String),
                    bairro: expect.any(String),
                    updatedAt: expect.any(String),
                    createdAt: expect.any(String),
                })
            )
        })
    })

    

})