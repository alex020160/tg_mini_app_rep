import { usePassportStore } from "../../shared/lib/passportStore";
import "./health-features-modal.css";

type HealthFeaturesModalProps = {
  isOpen: boolean;
  onClose: () => void;
};

const sections = [
  {
    title: "Мочевыделительная система",
    items: [
      "МКБ (Мочекаменная болезнь)",
      "Цистит",
      "ХПН (Хроническая почечная недостаточность)",
    ],
  },
  {
    title: "Пищеварительная система",
    items: [
      "Панкреатит",
      "Хронический гастрит / колит",
      "Чувствительное пищеварение",
      "Запоры / Мегаколон",
    ],
  },
  {
    title: "Сердечно-сосудистая система",
    items: ["ГКМП", "Артериальная гипертензия"],
  },
  {
    title: "Дыхательная система",
    items: ["Астма", "Хронический ринит"],
  },
  {
    title: "Эндокринная система",
    items: ["Сахарный диабет", "Гипертиреоз"],
  },
  {
    title: "Стоматология",
    items: ["Стоматит", "Зубной камень", "Резорбция зубов"],
  },
  {
    title: "Опорно-двигательная система",
    items: [
      "Артрит / Остеоартроз",
      "Дисплазия тазобедренного сустава",
      "Резорбция зубов",
    ],
  },
  {
    title: "Органы чувств",
    items: ["Хронический конъюнктивит / Кератит", "Глухота", "Слепота"],
  },
  {
    title: "Неврология",
    items: ["Синдром вестибулярного аппарата", "Эпилепсия"],
  },
  {
    title: "Аллергия и кожа",
    items: [
      "Атопический дерматит",
      "Пищевая аллергия",
      "Аллергия на укусы блох (ВРН)",
    ],
  },
  {
    title: "Вирусные носители",
    items: [
      "Вирусный иммунодефицит кошек (ВИК, FIV)",
      "Вирусная лейкемия кошек (ВЛК, FeLV)",
      "Герпесвирусная инфекция",
      "Калицивироз",
    ],
  },
];

export default function HealthFeaturesModal({
  isOpen,
  onClose,
}: HealthFeaturesModalProps) {
  const { healthFeatures, toggleHealthFeature } = usePassportStore();

  if (!isOpen) return null;

  return (
    <div className="O-HealthModal">
      <div className="O-HealthModal__overlay" onClick={onClose} />

      <div className="O-HealthModal__sheet">
        <div className="O-HealthModal__handle" />

        <h2 className="O-HealthModal__title">Особенности здоровья</h2>

        <div className="O-HealthModal__content">
          {sections.map((section) => (
            <section key={section.title} className="M-HealthModalSection">
              <h3 className="M-HealthModalSection__title">{section.title}</h3>

              <div className="M-HealthModalSection__list">
                {section.items.map((item) => {
                  const checked = healthFeatures.includes(item);

                  return (
                    <label key={item} className="M-HealthModalCheckboxRow">
                      <input
                        type="checkbox"
                        checked={checked}
                        onChange={() => toggleHealthFeature(item)}
                        className="M-HealthModalCheckboxRow__input"
                      />

                      <span
                        className={`M-HealthModalCheckboxRow__box ${
                          checked ? "is-checked" : ""
                        }`}
                      />

                      <span className="M-HealthModalCheckboxRow__label">
                        {item}
                      </span>
                    </label>
                  );
                })}
              </div>
            </section>
          ))}
        </div>

        <button className="A-HealthModalSaveButton" onClick={onClose}>
          Сохранить
        </button>
      </div>
    </div>
  );
}
