import { seedUsers } from './user.seeder';
import { seedItems } from './items.seeder';

const seed = async () => {
  await seedUsers();
  await seedItems();
}

seed();
