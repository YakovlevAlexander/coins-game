import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export const seedCart = async() => {
  try {
    await prisma.cart.createMany({
      data: [
        { userId: 1, itemId: 1, quantity: 1 },
        { userId: 1, itemId: 2, quantity: 10 },
        { userId: 2, itemId: 3, quantity: 5 },
      ],
    });
  } catch (e) {
    console.error(e);
  } finally {
    await prisma.$disconnect();
  }
};
