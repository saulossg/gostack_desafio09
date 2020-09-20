import {MigrationInterface, QueryRunner, Table} from "typeorm";

export default class CreateOrders1600550812097 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(new Table({
            name: 'orders',
            columns: [
                {
                    name: 'id',
                    type: 'uuid',
                    isPrimary: true,
                    generationStrategy: 'uuid',
                    default: 'uuid_generate_v4()',
                },
                {
                    name: 'create_at',
                    type: 'timestamp',
                    default: 'now()',
                },
                {
                    name: 'update_at',
                    type: 'timestamp',
                    default: 'now()',
                }
            ]

        }));
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        queryRunner.dropTable('orders');
    }

}
