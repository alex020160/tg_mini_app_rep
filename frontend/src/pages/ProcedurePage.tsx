import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import AppLayout from "../widgets/layout/AppLayout";
import {
  useProcedureStore,
  type ProcedureType,
} from "../shared/lib/procedureStore";
import "./procedure-page.css";

const reminderOptions = [
  "1 неделя",
  "2 недели",
  "3 недели",
  "1 месяц",
  "2 месяца",
  "3 месяца",
  "пол года",
  "9 месяцев",
  "1 год",
];

const procedureConfig: Record<
  ProcedureType,
  {
    title: string;
    namePlaceholder: string;
    nextDateLabel: string;
  }
> = {
  fleas: {
    title: "Защита от блох",
    namePlaceholder: "Введите название препарата",
    nextDateLabel: "Дата следующей процедуры",
  },
  worms: {
    title: "Защита от глистов",
    namePlaceholder: "Введите название препарата",
    nextDateLabel: "Дата следующей процедуры",
  },
  rabies: {
    title: "Вакцинация от бешенства",
    namePlaceholder: "Введите название вакцины",
    nextDateLabel: "Дата следующей вакцинации",
  },
  infection: {
    title: "Вакцинация от инфекции",
    namePlaceholder: "Введите название вакцины",
    nextDateLabel: "Дата следующей вакцинации",
  },
  vet: {
    title: "Прием ветеринара",
    namePlaceholder: "Введите причину приема",
    nextDateLabel: "Дата следующего приема",
  },
  custom: {
    title: "Что-то другое",
    namePlaceholder: "Введите название события",
    nextDateLabel: "Следующая дата",
  },
};

export default function ProcedurePage() {
  const navigate = useNavigate();
  const params = useParams();
  const rawType = params.type;

  const safeType: ProcedureType =
    rawType === "fleas" ||
    rawType === "worms" ||
    rawType === "rabies" ||
    rawType === "infection" ||
    rawType === "vet" ||
    rawType === "custom"
      ? rawType
      : "custom";

  const config = procedureConfig[safeType];

  const savedProcedure = useProcedureStore(
    (state) => state.procedures[safeType],
  );
  const saveProcedure = useProcedureStore((state) => state.saveProcedure);

  const [doneDate, setDoneDate] = useState("01.03.2026");
  const [name, setName] = useState("");
  const [nextDate, setNextDate] = useState("08.09.2026");
  const [comment, setComment] = useState("");
  const [selectedReminder, setSelectedReminder] = useState("1 неделя");
  const [showError, setShowError] = useState(false);

  useEffect(() => {
    if (!savedProcedure) return;

    setDoneDate(savedProcedure.doneDate);
    setName(savedProcedure.name);
    setNextDate(savedProcedure.nextDate);
    setComment(savedProcedure.comment);
    setSelectedReminder(savedProcedure.reminder);
  }, [savedProcedure]);

  function handleSave() {
    const invalid = !doneDate.trim() || !name.trim();

    if (invalid) {
      setShowError(true);
      return;
    }

    setShowError(false);

    saveProcedure({
      type: safeType,
      doneDate,
      name,
      reminder: selectedReminder,
      nextDate,
      comment,
    });

    navigate("/passport/edit");
  }

  return (
    <AppLayout>
      <div className="P-ProcedurePage">
        <header className="O-ProcedureHeader">
          <button
            type="button"
            className="O-ProcedureHeader__back"
            onClick={() => navigate("/passport/edit")}
          >
            ←
          </button>

          <h1 className="O-ProcedureHeader__title">{config.title}</h1>
        </header>

        <section className="O-ProcedureCard">
          <label className="O-ProcedureField O-ProcedureField--accent">
            <span className="O-ProcedureField__label">Дата выполнения</span>
            <input
              className="O-ProcedureField__input"
              type="text"
              value={doneDate}
              onChange={(e) => setDoneDate(e.target.value)}
              placeholder="дд.мм.гггг"
            />
          </label>

          <label className="O-ProcedureField">
            <input
              className="O-ProcedureField__input O-ProcedureField__input--single"
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder={config.namePlaceholder}
            />
          </label>

          <div className="O-ProcedureReminder">
            <h2 className="O-ProcedureReminder__title">
              Напоминание о следующей процедуре
            </h2>

            <div className="O-ProcedureReminder__grid">
              {reminderOptions.map((option) => (
                <button
                  key={option}
                  type="button"
                  className={`O-ProcedureReminder__chip ${
                    selectedReminder === option ? "is-active" : ""
                  }`}
                  onClick={() => setSelectedReminder(option)}
                >
                  {option}
                </button>
              ))}
            </div>
          </div>

          <label className="O-ProcedureField">
            <span className="O-ProcedureField__label">
              {config.nextDateLabel}
            </span>
            <input
              className="O-ProcedureField__input"
              type="text"
              value={nextDate}
              onChange={(e) => setNextDate(e.target.value)}
              placeholder="дд.мм.гггг"
            />
          </label>

          <label className="O-ProcedureField">
            <input
              className="O-ProcedureField__input O-ProcedureField__input--single"
              type="text"
              value={comment}
              onChange={(e) => setComment(e.target.value)}
              placeholder="Комментарий"
            />
          </label>

          {showError && (
            <div className="P-ProcedurePage__error">
              Заполни дату выполнения и название.
            </div>
          )}

          <button
            type="button"
            className="A-ProcedureSaveButton"
            onClick={handleSave}
          >
            Сохранить
          </button>
        </section>
      </div>
    </AppLayout>
  );
}
