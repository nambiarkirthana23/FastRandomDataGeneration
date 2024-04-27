import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";
import { UUID } from "typeorm/driver/mongodb/bson.typings";
@Entity({ name: 'tstbl1' })
export class tstbl1 {

    @PrimaryGeneratedColumn()
    id: number;

    @Column({ type: 'timestamp' })
    time: Date;

    @Column({ type: 'uuid' })
    u1: UUID
    
    @Column({ type: 'uuid' })
    u2: UUID

    @Column({ type: 'uuid' })
    u3: UUID

    @Column({ type: 'uuid' })
    u4: UUID



}