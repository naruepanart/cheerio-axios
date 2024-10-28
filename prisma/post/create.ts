import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  const created = await prisma.post.create({
    data: {
      title: "Alice",
      content: "alice1@prisma.io",
      authorId: 1,
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
