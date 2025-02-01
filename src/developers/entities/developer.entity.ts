import { Stack } from '@prisma/client';
import { nanoid } from 'nanoid';

export class Developer {
  id: string;
  name: string;
  email: string;
  password: string;
  stack: Stack;

  generateId() {
    this.id = `dev_${nanoid()}`;
  }
}
