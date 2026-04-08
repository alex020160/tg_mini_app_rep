import { api } from "@/shared/api/client";

export type EventItem = {
  id: string;
  user_id: string;
  pet_id: string;
  type: "vaccine" | "flea_treatment" | "vet_visit" | "grooming" | "other";
  title: string;
  scheduled_at: string;
  is_done: boolean;
  done_at: string | null;
  notes: string | null;
  created_at: string;
};

export async function getEvents(
  params?: Record<string, string | number | boolean>,
) {
  const response = await api.get<EventItem[]>("/events", { params });
  return response.data;
}

export async function createEvent(payload: {
  pet_id: string;
  type: EventItem["type"];
  title: string;
  scheduled_at: string;
  notes?: string | null;
}) {
  const response = await api.post<EventItem>("/events", payload);
  return response.data;
}
