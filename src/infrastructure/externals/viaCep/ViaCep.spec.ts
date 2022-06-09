import { ViaCep } from "./ViaCep";

describe('Testing ViaCep methods',() => {

    const viaCep = new ViaCep();
    const genericCep = '01001000';
    const expectedResponse = {
        "cep": "01001-000",
        "logradouro": "Praça da Sé",
        "complemento": "lado ímpar",
        "bairro": "Sé",
        "localidade": "São Paulo",
        "uf": "SP",
        "ibge": "3550308",
        "gia": "1004",
        "ddd": "11",
        "siafi": "7107"
      };
    
    describe('getAddress', () =>{

        test('exist', () => {
            
              expect(typeof viaCep.getAddress).toBe('function');
          });

          test('return complete address', async () => {
            
            expect(await viaCep.getAddress(genericCep)).toEqual(expectedResponse);
        });

    })

})