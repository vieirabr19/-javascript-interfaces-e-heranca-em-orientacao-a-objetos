import {Cliente} from "./Cliente.js";
import {Gerente} from "./Funcionario/Gerente.js";
import {Diretor} from "./Funcionario/Diretor.js";
import {SistemaAutenticacao} from "./SistemaAutenticacao.js";

const diretor = new Diretor("Luiz", 20000, 12345678900);
diretor.cadastrarSenha("123456");

const gerente = new Gerente("Augusto", 10000, 12345678901);
gerente.cadastrarSenha("123");

const cliente = new Cliente("Vieira", 1234563423, "4564");

const diretorEstaLogado = SistemaAutenticacao.login(diretor, "123456");
const gerenteEstaLogado = SistemaAutenticacao.login(gerente, "123");
const clienteEstaLogado = SistemaAutenticacao.login(cliente, "4564");
console.log(diretorEstaLogado, gerenteEstaLogado, clienteEstaLogado);