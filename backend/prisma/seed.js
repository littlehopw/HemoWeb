import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

async function main() {
  const icones = [
    { url: 'https://cdn-icons-png.flaticon.com/512/53/53159.png' },
    { url: 'https://png.pngtree.com/png-vector/20190223/ourmid/pngtree-profile-glyph-black-icon-png-image_691589.jpg' },
  ];

  for (const icone of icones) {
    await prisma.icone.create({ data: icone });
  }

  console.log('Ícones inseridos com sucesso!');
}

main()
  .catch((e) => {
    console.error('Erro ao inserir ícones:', e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
