import { Psicologos } from "../models/psicologos";
import bcrypt from "bcryptjs";
import { viaCepApi } from "../../../infrastructure/externals/viaCep";

export class PsicologoService{



    async registerPsicologo(data: any){
    
    const { senha, cep } = data;

      
      const newSenha = bcrypt.hashSync(senha, 10);

      const newPsicologo = await Psicologos.create({
        ...data,
        senha: newSenha,
        bairro: await this.getBairro(cep),
      });
      
      return newPsicologo;

    }

    async getBairro(cep: string){
    const endereco = await viaCepApi.getAddress(cep);
    return endereco.bairro;
    }
}