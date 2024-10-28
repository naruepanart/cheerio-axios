import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  const created = await prisma.user.create({
    data: {
      name: "Alice",
      email: "alice1@prisma.io",
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
