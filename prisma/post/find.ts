import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  const findAll = await prisma.post.findMany({
    include: {
      author: true,
    },
  });
  console.log(findAll);

  const findOne = await prisma.post.findUnique({
    where: {
      id: 1,
    },
  });
  console.log(findOne);
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
