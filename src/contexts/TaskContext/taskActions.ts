import type { TaskModel } from "../../models/TaskModel";

// 1. Defina as constantes como um objeto
export const TaskActionTypes = {
  START_TASK: "START_TASK",
  INTERRUPT_TASK: "INTERRUPT_TASK",
  RESET_STATE: "RESET_STATE",
} as const;

// 2. Crie um tipo baseado nos valores do objeto
export type TaskActionTypes =
  (typeof TaskActionTypes)[keyof typeof TaskActionTypes];

export type TaskActionsWithPayload = {
  type: typeof TaskActionTypes.START_TASK; // Note o 'typeof' aqui
  payload: TaskModel;
};

export type TaskActionsWithoutPayload =
  | { type: typeof TaskActionTypes.RESET_STATE }
  | { type: typeof TaskActionTypes.INTERRUPT_TASK };

export type TaskActionModel =
  | TaskActionsWithPayload
  | TaskActionsWithoutPayload;
