import {
    MigrationInterface, QueryRunner, Table, TableForeignKey
} from 'typeorm'

import {
    ATTR_TABLE,
    ATTR_CHAR_EMAIL,
    ATTR_CHAR_FIRSTNAME,
    ATTR_CHAR_ID,
    ATTR_CHAR_LASTNAME,
    ATTR_CHAR_PASSWORD,
    ATTR_CHAR_USERNAME,
    ATTR_DATETIME_CREATED_AT,
    ATTR_DATETIME_DELETED_AT,
    ATTR_DATETIME_UPDATED_AT,
    ATTR_INT_CREATED_BY,
    ATTR_INT_UPDATED_BY,
} from '../columns/users'

export class CreateUsers1703649106733 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: ATTR_TABLE,
                columns: [
                    {
                        name: ATTR_CHAR_ID,
                        type: 'uuid',
                        isPrimary: true,
                        isNullable: false
                    },
                    {
                        name: ATTR_CHAR_USERNAME,
                        type: 'varchar',
                        length: '100',
                        isNullable: false
                    },
                    {
                        name: ATTR_CHAR_FIRSTNAME,
                        type: 'varchar',
                        length: '100',
                        isNullable: false
                    },
                    {
                        name: ATTR_CHAR_LASTNAME,
                        type: 'varchar',
                        length: '100',
                        isNullable: true
                    },
                    {
                        name: ATTR_CHAR_EMAIL,
                        type: 'varchar',
                        length: '255',
                        isNullable: false
                    },
                    {
                        name: ATTR_CHAR_PASSWORD,
                        type: 'varchar',
                        length: '255',
                        isNullable: false
                    },
                    {
                        name: ATTR_INT_CREATED_BY,
                        type: 'varchar',
                        isNullable: true
                    },
                    {
                        name: ATTR_INT_UPDATED_BY,
                        type: 'varchar',
                        isNullable: true
                    },
                    {
                        name: ATTR_DATETIME_CREATED_AT,
                        type: 'timestamp',
                        default: 'now()',
                    },
                    {
                        name: ATTR_DATETIME_UPDATED_AT,
                        type: 'timestamp',
                    },
                    {
                        name: ATTR_DATETIME_DELETED_AT,
                        type: 'timestamp',
                    },
                ],
            }),
            true,
        )

        // await queryRunner.createForeignKey(
        //     ATTR_TABLE,
        //     new TableForeignKey({
        //         columnNames: [ATTR_INT_CREATED_BY],
        //         referencedColumnNames: [ATTR_CHAR_ID],
        //         referencedTableName: ATTR_TABLE,
        //         onDelete: "CASCADE",
        //     })
        // )

        // await queryRunner.createForeignKey(
        //     ATTR_TABLE,
        //     new TableForeignKey({
        //         columnNames: [ATTR_INT_UPDATED_BY],
        //         referencedColumnNames: [ATTR_CHAR_ID],
        //         referencedTableName: ATTR_TABLE,
        //         onDelete: "CASCADE",
        //     }),
        // )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable(ATTR_TABLE)
    }

}
