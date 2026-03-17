import { create } from "zustand";

type PetType = "Кошка" | "Собака";
type PetSex = "Девочка" | "Мальчик";

type PassportFormState = {
  name: string;
  breed: string;
  color: string;
  birthDate: string;

  petType: PetType;
  sex: PetSex;

  isNeutered: boolean;
  isParasitesEnabled: boolean;
  isVaccinationEnabled: boolean;
  hasSurgeries: boolean;
  hasMicrochip: boolean;

  neuteredDate: string;
  neuteredComment: string;

  fleaDate: string;
  wormsDate: string;
  fleaMedicine: string;
  wormsMedicine: string;

  vaccinationDate: string;
  vaccinationName: string;
  vaccinationComment: string;

  surgeriesText: string;
  surgeriesDate: string;
  surgeriesComment: string;

  microchipNumber: string;
  microchipDate: string;

  healthFeatures: string[];

  setField: (field: string, value: string) => void;
  setPetType: (value: PetType) => void;
  setSex: (value: PetSex) => void;

  setIsNeutered: (value: boolean) => void;
  setIsParasitesEnabled: (value: boolean) => void;
  setIsVaccinationEnabled: (value: boolean) => void;
  setHasSurgeries: (value: boolean) => void;
  setHasMicrochip: (value: boolean) => void;

  toggleHealthFeature: (value: string) => void;
};

export const usePassportStore = create<PassportFormState>((set) => ({
  name: "",
  breed: "",
  color: "",
  birthDate: "",

  petType: "Кошка",
  sex: "Мальчик",

  isNeutered: false,
  isParasitesEnabled: true,
  isVaccinationEnabled: false,
  hasSurgeries: false,
  hasMicrochip: false,

  neuteredDate: "",
  neuteredComment: "",

  fleaDate: "",
  wormsDate: "",
  fleaMedicine: "",
  wormsMedicine: "",

  vaccinationDate: "",
  vaccinationName: "",
  vaccinationComment: "",

  surgeriesText: "",
  surgeriesDate: "",
  surgeriesComment: "",

  microchipNumber: "",
  microchipDate: "",

  healthFeatures: [],

  setField: (field, value) =>
    set((state) => ({
      ...state,
      [field]: value,
    })),

  setPetType: (value) => set({ petType: value }),
  setSex: (value) => set({ sex: value }),

  setIsNeutered: (value) => set({ isNeutered: value }),
  setIsParasitesEnabled: (value) => set({ isParasitesEnabled: value }),
  setIsVaccinationEnabled: (value) => set({ isVaccinationEnabled: value }),
  setHasSurgeries: (value) => set({ hasSurgeries: value }),
  setHasMicrochip: (value) => set({ hasMicrochip: value }),

  toggleHealthFeature: (value) =>
    set((state) => {
      const exists = state.healthFeatures.includes(value);

      return {
        healthFeatures: exists
          ? state.healthFeatures.filter((item) => item !== value)
          : [...state.healthFeatures, value],
      };
    }),
}));
