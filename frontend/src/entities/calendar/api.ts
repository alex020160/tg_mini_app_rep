import { api } from "@/shared/api/client";
import type { EventItem } from "@/entities/event/api";

export type CalendarMonthDay = {
  date: string;
  total_events: number;
  incomplete_events: number;
  completed_events: number;
};

export type CalendarMonthResponse = {
  year: number;
  month: number;
  days: CalendarMonthDay[];
};

export type CalendarDayResponse = {
  date: string;
  events: EventItem[];
};

export async function getCalendarMonth(year: number, month: number) {
  const response = await api.get<CalendarMonthResponse>("/calendar/month", {
    params: { year, month },
  });
  return response.data;
}

export async function getCalendarDay(date: string) {
  const response = await api.get<CalendarDayResponse>("/calendar/day", {
    params: { date },
  });
  return response.data;
}
