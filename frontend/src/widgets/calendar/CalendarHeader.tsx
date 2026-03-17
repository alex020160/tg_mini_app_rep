import arrowIcon from "../../shared/ui/icons/arrow-icon.svg";
import ListIcon from "../../shared/ui/icons/list-icon.svg";
import "./calendar-header.css";

export default function CalendarHeader() {
  return (
    <header className="O-CalendarTopBar">
      <button className="O-CalendarTopBar__iconButton" aria-label="Назад">
        <img
          src={arrowIcon}
          alt="Назад"
          className="A-IconImage A-IconImage--md A-IconImage--rotate-right"
        />
      </button>

      <h1 className="O-CalendarTopBar__title">Календарь</h1>

      <button className="O-CalendarTopBar__iconButton" aria-label="Меню">
        <img
          src={ListIcon}
          alt="открыть лист"
          className="A-IconImage A-IconImage--md A-IconImage--rotate-right"
        />
      </button>
    </header>
  );
}
