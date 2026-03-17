import plusIcon from "../../shared/ui/icons/plus-icon.svg";
import calendarIcon from "../../shared/ui/icons/calendar-icon.svg";
import "./today-reminders.css";

export default function TodayReminders() {
  return (
    <section className="O-TodayReminders">
      <h2 className="O-TodayReminders__title">Напоминания на сегодня</h2>

      <div className="O-TodayReminders__empty">
        <div className="O-TodayReminders__icon">
          <img
            src={calendarIcon}
            alt="календарь"
            className="A-IconImage A-Icon-Calendar"
          />
        </div>
        <div className="O-TodayReminders__text">
          Нет напоминаний на этот день
        </div>
      </div>

      <button className="O-TodayReminders__button">
        <span className="O-TodayReminders__buttonPlus">
          <img
            src={plusIcon}
            alt="Добавить"
            className="A-IconImage A-IconImage--sm"
          />
        </span>
        Добавить напоминание
      </button>
    </section>
  );
}
