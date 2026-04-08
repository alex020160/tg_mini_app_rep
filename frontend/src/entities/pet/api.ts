import { api } from "@/shared/api/client";

export type Pet = {
  id: string;
  user_id: string;
  name: string;
  species: "cat" | "dog" | "other";
  sex: "male" | "female" | "unknown";
  birthdate: string | null;
  weight_kg: string | null;
  photo_url: string | null;
  created_at: string;
};

export type CreatePetPayload = {
  name: string;
  species: "cat" | "dog" | "other";
  sex?: "male" | "female" | "unknown";
  birthdate?: string | null;
  weight_kg?: number | null;
  photo_url?: string | null;
};

export async function getPets() {
  const response = await api.get<Pet[]>("/pets");
  return response.data;
}

export async function getPetById(petId: string) {
  const response = await api.get<Pet>(`/pets/${petId}`);
  return response.data;
}

export async function createPet(payload: CreatePetPayload) {
  const response = await api.post<Pet>("/pets", payload);
  return response.data;
}
