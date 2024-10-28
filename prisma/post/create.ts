import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  const created = await prisma.posts.create({
    data: {
      title: "Alice",
      content: "alice1@prisma.io",
      usersId: 1,
    },
  });
  console.log(created);
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
