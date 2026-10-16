const sistema = require('./sistema');

 /*-----------------------------------------------------------------------*/
                /* 1. Teste de Verificador de Palíndromo */
describe('Verificador de Palíndromo', () => {
  test('Deve retornar true para uma palavra que é um palíndromo', () => {
    expect(sistema.ehPalindromo('arara')).toBe(true);
    expect(sistema.ehPalindromo('ovo')).toBe(true);
    expect(sistema.ehPalindromo('sistema')).toBe(false);
  });
});


 /*-----------------------------------------------------------------------*/
                /* 2. Contador de Vogais (contarVogais) */

describe('Contador de Vogais', () => {
  test('Deve retornar a quantidade correta de vogais em uma string', () => {
    expect(sistema.contarVogais('Escola')).toBe(3);
    expect(sistema.contarVogais('xyz')).toBe(0);
  });
});

 /*-----------------------------------------------------------------------*/
                /* 3. Calculadora de Fatorial (calcularFatorial) */

describe('Calculadora de Fatorial', () => {
  test('Deve calcular o fatorial corretamente', () => {
    expect(sistema.calcularFatorial(5)).toBe(120);
    expect(sistema.calcularFatorial(0)).toBe(1);
    expect(() => sistema.calcularFatorial(-1)).toThrow('Não existe fatorial de número negativo');
  });
});

 /*-----------------------------------------------------------------------*/
                /* 4. Removedor de Duplicatas (removerDuplicatas) */

describe('Removedor de Duplicatas', () => {
  test('Deve remover duplicatas de um array', () => {
    expect(sistema.removerDuplicatas([1, 2, 2, 3, 4, 4])).toEqual([1, 2, 3, 4]);
    expect(sistema.removerDuplicatas(['a', 'b', 'a'])).toEqual(['a', 'b']);
  });
});

 /*-----------------------------------------------------------------------*/
                /* 5. Validador de Agendamento (agendarConsulta) */

describe('Validador de Agendamento', () => {
  test('Deve permitir agendar consultas apenas em dias úteis', () => {
    // 16/10/2026 é sexta-feira
    expect(sistema.agendarConsulta(new Date('2026-10-16T10:00:00'))).toBe('Consulta agendada com sucesso');
    
    // 17/10/2026 é sábado
    expect(() => sistema.agendarConsulta(new Date('2026-10-17T10:00:00'))).toThrow('Clínica fechada aos finais de semana');
  });
});

 /*-----------------------------------------------------------------------*/
                /* 6. Formatador de Moeda (formatarMoeda) */

describe('Formatador de Moeda', () => {
  test('Deve formatar corretamente valores numéricos para moeda (. => ,)', () => {
    expect(sistema.formatarMoeda(15.5)).toBe('R$ 15,50');
    expect(sistema.formatarMoeda(100)).toBe('R$ 100,00');
    expect(() => sistema.formatarMoeda('abc')).toThrow('Valor inválido')
  });
});

 /*-----------------------------------------------------------------------*/
                /* 7. Validador de CPF Básico (validarCpfBasico) */

describe('Validador de CPF Básico', () => {
  test('Deve validar somente CPFs fomatados corretamente', () => {
    expect(sistema.validarCpfBasico('123.456.789-09')).toBe(true);
    expect(sistema.validarCpfBasico('12345678909')).toBe(true);
    expect(sistema.validarCpfBasico('111.111.111-11')).toBe(false);
    expect(sistema.validarCpfBasico('111332')).toBe(false);
  });
});

 /*-----------------------------------------------------------------------*/
                /* 8. Cálculo de Ingresso (calcularIngresso) */

describe('Cálculo de Ingresso', () => {
  test('Deve validar o preço do ingresso de cada pessoa', () => {
    expect(sistema.calcularIngresso(65, true, 3)).toBe(20)
    expect(sistema.calcularIngresso(43, true, 2)).toBe(20)
    expect(sistema.calcularIngresso(15, false, 1)).toBe(40)
  });
});

 /*-----------------------------------------------------------------------*/
                /* 9. Conta Bancária (ContaBancaria) */

describe('Conta bancária', () => {
  let conta;

  beforeEach(() => {
    conta = new sistema.ContaBancaria('Anne');
  });

  test('Deve avaliar a movimentação bancária', () => {
    expect(conta.obterSaldo()).toBe(0);
    expect(() => conta.sacar(1000)).toThrow('Saldo insuficiente');

    conta.depositar(1000);
    conta.sacar(250);
    expect(conta.obterSaldo()).toBe(750);
  });
});

 /*-----------------------------------------------------------------------*/
                /* 10. Consulta de Clima (obterClima) - Avançado */

describe('Consultar clima', () => {
  test('deve retornar a temperatura da cidade', async () => {
    const apiFalsa = {
      buscar: async () => ({ temperatura: 28 }),
    };

    await expect(
      sistema.obterClima('São Paulo', apiFalsa)
    ).resolves.toBe('A temperatura em São Paulo é de 28°C');
  });
});