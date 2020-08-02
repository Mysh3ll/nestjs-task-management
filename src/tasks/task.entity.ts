import { BaseEntity, Entity, PrimaryGeneratedColumn, Column } from "typeorm";
import { TasksStatus } from "./task.model";

@Entity()
export class Task extends BaseEntity{
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    title: string;

    @Column()
    description: string;

    @Column()
    status: TasksStatus;
}
