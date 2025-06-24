import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

async function main() {
  // Ícones
  const icones = [
    { url: 'https://raw.githubusercontent.com/littlehopw/HemoWeb/refs/heads/main/images/perfil1.png' },
    { url: 'https://raw.githubusercontent.com/littlehopw/HemoWeb/refs/heads/main/images/perfil2.png' },
    { url: 'https://raw.githubusercontent.com/littlehopw/HemoWeb/refs/heads/main/images/perfil3.png' },
    { url: 'https://raw.githubusercontent.com/littlehopw/HemoWeb/refs/heads/main/images/perfil4.png' },
  ];

  for (const icone of icones) {
    await prisma.icone.create({ data: icone, skipDuplicates: true });
  }

  console.log('Ícones inseridos com sucesso!');

  // Hemocentros
  const hemocentros = [
    {
      rua: "Alameda Ezequiel Dias, 321",
      bairro: "Santa Efigênia",
      cidade: "Belo Horizonte",
      numero: "321",
      cep: "30130110",
      estado: "MG"
    },
    {
      rua: "Rua Barão do Rio Branco, 707",
      bairro: "Centro",
      cidade: "Governador Valadares",
      numero: "707",
      cep: "35010030",
      estado: "MG"
    },
    {
      rua: "Rua Barão de Cataguases, s/n",
      bairro: "Centro",
      cidade: "Juiz de Fora",
      numero: "s/n",
      cep: "36015370",
      estado: "MG"
    },
    {
      rua: "Rua Urbino Viana, 640",
      bairro: "Vila Guilhermina",
      cidade: "Montes Claros",
      numero: "640",
      cep: "39400531",
      estado: "MG"
    },
    {
      rua: "Rua Comendador José Garcia, 846",
      bairro: "Centro",
      cidade: "Pouso Alegre",
      numero: "846",
      cep: "37550000",
      estado: "MG"
    },
    {
      rua: "Avenida Getúlio Guaritá, 250",
      bairro: "Abadia",
      cidade: "Uberaba",
      numero: "250",
      cep: "38025440",
      estado: "MG"
    },
    {
      rua: "Avenida Levino de Souza, 1845",
      bairro: "Umuarama",
      cidade: "Uberlândia",
      numero: "1845",
      cep: "38405322",
      estado: "MG"
    },
    {
      rua: "Av. Dr. Enéas Carvalho de Aguiar, 155 - 1º andar",
      bairro: "Cerqueira César",
      cidade: "São Paulo",
      numero: "155",
      cep: "05403000",
      estado: "SP"
    },
    {
      rua: "Av. Doutor Dante Pazzanese, 500",
      bairro: "Ibirapuera",
      cidade: "São Paulo",
      numero: "500",
      cep: "04012090",
      estado: "SP"
    },
    {
      rua: "Rua Voluntários da Pátria, 4227",
      bairro: "Mandaqui",
      cidade: "São Paulo",
      numero: "4227",
      cep: "02402000",
      estado: "SP"
    },
    {
      rua: "Rua Ari Barroso, 355",
      bairro: "Presidente Altino",
      cidade: "Osasco",
      numero: "355",
      cep: "06216100",
      estado: "SP"
    },
    {
      rua: "Rua Guilhermina Carril Loureiro, 144",
      bairro: "Centro",
      cidade: "Barueri",
      numero: "144",
      cep: "06401120",
      estado: "SP"
    },
    {
      rua: "Av. Professor Mário Rubens Guimarães Montenegro, s/n",
      bairro: "Distrito de Rubião Junior",
      cidade: "Botucatu",
      numero: "s/n",
      cep: "18618000",
      estado: "SP"
    },
    {
      rua: "Av. Jamil Feres Kfouri, 80",
      bairro: "Jardim Panorama",
      cidade: "São José do Rio Preto",
      numero: "80",
      cep: "15091840",
      estado: "SP"
    },
    {
      rua: "Rua Carlos Chagas, 480",
      bairro: "Cidade Universitária",
      cidade: "Campinas",
      numero: "480",
      cep: "13083878",
      estado: "SP"
    },
    {
      rua: "Rua Lourival Freire, 240",
      bairro: "Fragata",
      cidade: "Marília",
      numero: "240",
      cep: "17519250",
      estado: "SP"
    },
    {
      rua: "Rua Tenente Catão Roxo, 2501",
      bairro: "Monte Alegre",
      cidade: "Ribeirão Preto",
      numero: "2501",
      cep: "14051900",
      estado: "SP"
    }
  ];

  await prisma.hemocentros.createMany({ data: hemocentros, skipDuplicates: true });

  console.log('Hemocentros inseridos com sucesso!');
}

main()
  .catch((e) => {
    console.error('Erro ao rodar seed:', e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });