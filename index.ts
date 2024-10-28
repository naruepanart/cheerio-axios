import { PrismaClient } from "@prisma/client";
import { uuidv7 } from "uuidv7";

const prisma = new PrismaClient();

// seed data
async function main() {
  const created = await prisma.users.create({
    data: {
      name: uuidv7(),
      email: uuidv7(),
    },
  });

  for (let i = 0; i < 5; i++) {
    await prisma.posts.create({
      data: {
        title: uuidv7(),
        content: uuidv7(),
        usersId: created.id,
      },
    });
  }
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
