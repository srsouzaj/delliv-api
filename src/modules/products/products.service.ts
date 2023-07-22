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
}
