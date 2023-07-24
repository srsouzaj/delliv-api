/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { ProductDTO } from '../dto/products.dto';
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
        const product = await this.prisma.product.findMany()

        const dataProduct = {
            message: ["request completed successfully"],
            data: product,
        }

        return dataProduct
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
