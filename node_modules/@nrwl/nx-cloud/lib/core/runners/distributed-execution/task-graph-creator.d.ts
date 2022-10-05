import { ProjectGraph, Task, TaskGraph } from '../../models/run-context.model';
/**
 * This is only used for versions of Nx prior to 14 where the task graph
 * wasn't part of the context so we have to recreate it
 */
export declare class TaskGraphCreator {
    private readonly projectGraph;
    private readonly defaultTargetDependencies;
    constructor(projectGraph: ProjectGraph, defaultTargetDependencies: Record<string, any[]>);
    createTaskGraph(tasks: Task[]): TaskGraph;
    private addTaskDependencies;
    private addDependencies;
    private findTask;
    private addTaskToGraph;
}
