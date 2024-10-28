import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  const updated = await prisma.post.update({
    where: { id: 2 },
    data: {
      title: "This is updated title",
      content: "This is updated content",
    },
  });
  console.log(updated);
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
