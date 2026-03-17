import "./month-calendar.css";

const weekDays = ["пн", "вт", "ср", "чт", "пт", "сб", "вс"];

const cells = [
  {
    day: "23",
    muted: true,
    events: [
      { text: "какое-то\nсобытие", color: "blue" },
      { text: "Еще\nсобытие", color: "orange" },
    ],
  },
  { day: "24", selected: true },
  {
    day: "25",
    events: [
      { text: "какое-то\nсобытие\nкоторое\nобязательно ну...", color: "blue" },
    ],
  },
  { day: "26", events: [{ text: "Еще\nсобытие", color: "orange" }] },
  { day: "27" },
  { day: "28" },
  {
    day: "1",
    sunday: true,
    events: [
      { text: "какое-то\nсобытие", color: "blue" },
      { text: "Еще\nсобытие", color: "orange" },
    ],
  },

  { day: "2" },
  { day: "3" },
  { day: "4" },
  { day: "5", events: [{ text: "какое-то\nсобытие", color: "blue" }] },
  { day: "6" },
  { day: "7" },
  { day: "8", sunday: true },

  { day: "9" },
  { day: "10", events: [{ text: "какое-то\nсобытие", color: "blue" }] },
  { day: "11" },
  { day: "12" },
  { day: "13" },
  { day: "14", events: [{ text: "Еще\nсобытие", color: "orange" }] },
  {
    day: "15",
    sunday: true,
    events: [
      { text: "какое-то\nсобытие", color: "blue" },
      { text: "Еще\nсобытие", color: "orange" },
    ],
  },

  { day: "16", events: [{ text: "какое-то\nсобытие", color: "blue" }] },
  { day: "17", events: [{ text: "какое-то\nсобытие", color: "blue" }] },
  { day: "18" },
  { day: "19", events: [{ text: "Еще\nсобытие", color: "orange" }] },
  { day: "20" },
  { day: "21" },
  {
    day: "22",
    sunday: true,
    events: [
      { text: "какое-то\nсобытие", color: "blue" },
      { text: "Еще\nсобытие", color: "orange" },
    ],
  },

  {
    day: "23",
    events: [
      { text: "какое-то\nсобытие", color: "blue" },
      { text: "Еще\nсобытие", color: "orange" },
    ],
  },
  { day: "24" },
  { day: "25" },
  { day: "26" },
  { day: "27", events: [{ text: "какое-то\nсобытие", color: "blue" }] },
  { day: "28" },
  { day: "29", sunday: true },

  { day: "30" },
  { day: "31", events: [{ text: "какое-то\nсобытие", color: "blue" }] },
  { day: "1", muted: true },
  { day: "2", muted: true },
  {
    day: "3",
    muted: true,
    events: [{ text: "Еще\nсобытие", color: "orange" }],
  },
  { day: "4", muted: true },
  { day: "5", muted: true, sunday: true },
];

const legend = [
  { label: "Вакцинация", color: "pink" },
  { label: "Здоровье", color: "purple" },
  { label: "Уход", color: "orange" },
  { label: "Прогулки", color: "blue" },
];

export default function MonthCalendar() {
  return (
    <section className="O-MonthCalendar">
      <div className="O-MonthCalendar__top">
        <div className="O-MonthCalendar__monthWrap">
          <button className="O-MonthCalendar__arrow">‹</button>
          <h2 className="O-MonthCalendar__month">МАРТ</h2>
          <button className="O-MonthCalendar__arrow">›</button>
        </div>

        <button className="O-MonthCalendar__add">+</button>
      </div>

      <div className="O-MonthCalendar__weekdays">
        {weekDays.map((day) => (
          <div key={day} className="O-MonthCalendar__weekday">
            {day}
          </div>
        ))}
      </div>

      <div className="O-MonthCalendar__grid">
        {cells.map((cell, index) => (
          <div
            key={`${cell.day}-${index}`}
            className={[
              "O-MonthCalendar__cell",
              cell.muted ? "is-muted" : "",
              cell.selected ? "is-selected" : "",
              cell.sunday ? "is-sunday" : "",
            ].join(" ")}
          >
            <div className="O-MonthCalendar__day">{cell.day}</div>

            <div className="O-MonthCalendar__events">
              {cell.events?.map((event, eventIndex) => (
                <div key={eventIndex} className="O-MonthCalendar__event">
                  <span
                    className={`O-MonthCalendar__eventMarker O-MonthCalendar__eventMarker--${event.color}`}
                  />
                  <span className="O-MonthCalendar__eventText">
                    {event.text}
                  </span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      <div className="O-MonthCalendar__legend">
        {legend.map((item) => (
          <div key={item.label} className="O-MonthCalendar__legendItem">
            <span
              className={`O-MonthCalendar__legendDot O-MonthCalendar__legendDot--${item.color}`}
            />
            <span className="O-MonthCalendar__legendText">{item.label}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
