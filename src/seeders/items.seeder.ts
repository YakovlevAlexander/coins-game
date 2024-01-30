import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export const seedItems = async() => {
  try {
    await prisma.item.createMany({
      data: [
        { name: '123123' },
        { name: '555555' },
        { name: '789789' },
      ],
    });
  } catch (e) {
    console.error();
  } finally {
    await prisma.$disconnect();
  }
};
