/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { ProductDTO } from './products.dto';
import { PrismaService } from 'src/database/Prisma.service';

@Injectable()
export class ProductsService {
    constructor(private prisma: PrismaService) { }

    async create(data: ProductDTO) {
        const product = await this.prisma.product.create({
            data,
        });
        return product;
    }

    async findAll() {
        return this.prisma.product.findMany();
    }

    async update(id: string, data: ProductDTO) {
        const productExists = await this.prisma.product.findUnique({
            where: {
                id,
            },
        });

        if (!productExists) {
            throw new Error('Product does not exist');
        }

        await this.prisma.product.update({
            data,
            where: {
                id,
            },
        });
    }

    async delete(id: string) {
        const productExists = await this.prisma.product.findUnique({
            where: {
                id,
            },
        });

        if (!productExists) {
            throw new Error('Product does not exist');
        }

        await this.prisma.product.delete({
            where: {
                id,
            },
        });
    }
}
