import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  const updated = await prisma.user.update({
    where: { id: 1 },
    data: {
      email: "brindam@prisma.io",
      name: "Brindam Goswami",
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
