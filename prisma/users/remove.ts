import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  const del = await prisma.user.delete({
    where: {
      id: 2,
    },
  });
  console.log(del);
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
