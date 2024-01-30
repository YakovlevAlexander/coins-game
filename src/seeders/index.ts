import { seedUsers } from './user.seeder';
import { seedItems } from './items.seeder';
import { seedCart } from './cart.seeder';

const seed = async () => {
  await seedUsers();
  await seedItems();
  await seedCart();
}

seed();
