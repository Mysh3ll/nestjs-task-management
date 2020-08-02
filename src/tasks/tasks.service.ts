import { Injectable } from '@nestjs/common';
import { Task, TasksStatus } from "./task.model";
import { v1 as uuidv1 } from 'uuid';
import { CreateTaskDto } from "./dto/create-task.dto";

@Injectable()
export class TasksService {
    private tasks: Task[] = [];

    getAllTasks(): Task[] {
        return this.tasks;
    }

    createTask(createTaskDto: CreateTaskDto): Task {
        const { title, description } = createTaskDto;

        const task: Task = {
            id: uuidv1(),
            title,
            description,
            status: TasksStatus.OPEN,
        };

        this.tasks = [...this.tasks, task];
        return task;
    }
}
