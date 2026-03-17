import AppLayout from "../widgets/layout/AppLayout";
import CalendarHeader from "../widgets/calendar/CalendarHeader";
import MonthCalendar from "../widgets/calendar/MonthCalendar";
import TodayReminders from "../widgets/calendar/TodayReminders";
import "./calendar-page.css";

export default function CalendarPage() {
  return (
    <AppLayout>
      <div className="P-Calendar">
        <CalendarHeader />

        <section className="P-Calendar__calendarSection">
          <MonthCalendar />
        </section>

        <section className="P-Calendar__remindersSection">
          <TodayReminders />
        </section>
      </div>
    </AppLayout>
  );
}
