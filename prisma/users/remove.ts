import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  const removed = await prisma.user.delete({
    where: {
      id: 2,
    },
  });
  console.log(removed);
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