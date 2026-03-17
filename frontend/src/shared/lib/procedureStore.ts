import { create } from "zustand";

export type ProcedureType =
  | "fleas"
  | "worms"
  | "rabies"
  | "infection"
  | "vet"
  | "custom";

export type ProcedureRecord = {
  type: ProcedureType;
  doneDate: string;
  name: string;
  reminder: string;
  nextDate: string;
  comment: string;
};

type ProcedureStoreState = {
  procedures: Partial<Record<ProcedureType, ProcedureRecord>>;
  saveProcedure: (procedure: ProcedureRecord) => void;
};

export const useProcedureStore = create<ProcedureStoreState>((set) => ({
  procedures: {},

  saveProcedure: (procedure) =>
    set((state) => ({
      procedures: {
        ...state.procedures,
        [procedure.type]: procedure,
      },
    })),
}));
