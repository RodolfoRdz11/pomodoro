export default interface Task {
    id?: number;
    userId: number;
    description: string;
    time?: number;
    restedTime?: number;
}