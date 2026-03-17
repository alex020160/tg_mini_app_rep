import arrowIcon from "../../shared/ui/icons/arrow-icon.svg";
import plusIcon from "../../shared/ui/icons/plus-icon.svg";
import "./mini-calendar.css";

const weekDays = ["пн", "вт", "ср", "чт", "пт", "сб", "вс"];

const cells = [
  { day: "23", muted: true },
  { day: "24", muted: true },
  { day: "25", muted: true, dots: ["orange", "pink"] },
  { day: "26", muted: true },
  { day: "27", muted: true, dots: ["orange", "pink"] },
  { day: "28", muted: true },
  { day: "1", selected: true },

  { day: "2", dots: ["orange", "pink", "purple", "blue"] },
  { day: "3" },
  { day: "4" },
  { day: "5", dots: ["orange", "purple", "blue"] },
  { day: "6" },
  { day: "7", dots: ["orange"] },
  { day: "8", dots: ["pink", "blue"] },

  { day: "9" },
  { day: "10", dots: ["orange", "pink", "purple"] },
  { day: "11" },
  { day: "12", dots: ["orange", "pink", "purple", "blue"] },
  { day: "13", dots: ["blue"] },
  { day: "14" },
  { day: "15", dots: ["blue"] },

  { day: "16" },
  { day: "17", dots: ["pink", "blue"] },
  { day: "18", dots: ["orange", "pink", "blue"] },
  { day: "19" },
  { day: "20", dots: ["purple"] },
  { day: "21" },
  { day: "22", dots: ["orange", "pink", "purple", "blue"] },

  { day: "23", dots: ["orange", "pink", "purple", "blue"] },
  { day: "24" },
  { day: "25" },
  { day: "26" },
  { day: "27" },
  { day: "28", dots: ["pink"] },
  { day: "29", sunday: true },

  { day: "30", dots: ["orange", "pink", "purple"] },
  { day: "31" },
  { day: "1", muted: true, dots: ["orange", "purple"] },
  { day: "2", muted: true },
  { day: "3", muted: true, dots: ["orange", "pink"] },
  { day: "4", muted: true },
  { day: "5", muted: true, dots: ["orange", "blue"] },
];

export default function MiniCalendar() {
  return (
    <section className="O-MiniCalendar">
      <div className="O-MiniCalendar__header">
        <div className="O-MiniCalendar__monthWrap">
          <button className="O-MiniCalendar__arrow" type="button">
            <img
              src={arrowIcon}
              alt="Назад"
              className="A-IconImage A-IconImage--md A-IconImage--rotate-right"
            />
          </button>

          <h3 className="O-MiniCalendar__month">МАРТ</h3>

          <button className="O-MiniCalendar__arrow" type="button">
            <img
              src={arrowIcon}
              alt="Вперед"
              className="A-IconImage A-IconImage--md A-IconImage--rotate-left"
            />
          </button>
        </div>

        <button className="O-MiniCalendar__add" type="button">
          <img
            src={plusIcon}
            alt="Добавить"
            className="A-IconImage A-IconImage--sm"
          />
        </button>
      </div>

      <div className="O-MiniCalendar__weekdays">
        {weekDays.map((day) => (
          <div key={day} className="O-MiniCalendar__weekday">
            {day}
          </div>
        ))}
      </div>

      <div className="O-MiniCalendar__grid">
        {cells.map((cell, index) => (
          <div
            key={`${cell.day}-${index}`}
            className={[
              "O-MiniCalendar__cell",
              cell.muted ? "is-muted" : "",
              cell.selected ? "is-selected" : "",
              cell.sunday ? "is-sunday" : "",
            ].join(" ")}
          >
            <span className="O-MiniCalendar__day">{cell.day}</span>

            <div className="O-MiniCalendar__dots">
              {cell.dots?.map((dot, dotIndex) => (
                <span
                  key={`${dot}-${dotIndex}`}
                  className={`O-MiniCalendar__dot O-MiniCalendar__dot--${dot}`}
                />
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
