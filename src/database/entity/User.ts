import { Entity, PrimaryGeneratedColumn, Column } from "typeorm"

@Entity()
export class User {
    @Column()
    @PrimaryGeneratedColumn('uuid')
    'id': string

    @Column()
    'userName': string

    @Column()
    'firstName': string

    @Column()
    'lastName': string

    @Column()
    'email': string

    @Column()
    'password': string

    @Column()
    'created_by_id': string

    @Column()
    'updated_by_id': string

    @Column({ type: 'timestamp' })
    'created_at': Date

    @Column({ type: 'timestamp' })
    'updated_at': Date
}
