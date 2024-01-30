import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export const seedUsers = async() => {
  try {
    await prisma.user.createMany({
      data: [
        { username: 'aaa' },
        { username: 'bbb' },
        { username: 'ccc' },
      ],
    });
  } catch (e) {
    console.error(e);
  } finally {
    await prisma.$disconnect();
  }
};
