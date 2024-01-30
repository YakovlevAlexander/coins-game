import { Injectable } from '@nestjs/common';
import { Prisma, PrismaClient } from '@prisma/client/index';

@Injectable()
export class BaseService<T> {
  constructor(
    private readonly prisma: PrismaClient,
    private readonly model: Prisma.ModelName,
  ) {}

  private getModelName() {
    return this.model.toLowerCase();
  }

  async findAll(): Promise<T[]> {
    return this.prisma[this.getModelName()].findMany();
  }

  async findById(id: number): Promise<T | null> {
    return this.prisma[this.getModelName()].findUnique({where: { id }});
  }

  async create(data: T): Promise<T> {
    return this.prisma[this.getModelName()].create(data);
  }

  async update(id: number, data: Partial<T>): Promise<T> {
    return this.prisma[this.getModelName()].update({
      where: { id },
      data,
    });
  }

  async delete(id: number): Promise<T | null> {
    return this.prisma[this.getModelName()].update({ where: { id }});
  }
}
