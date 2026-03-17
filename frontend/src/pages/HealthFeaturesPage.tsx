import { useNavigate } from "react-router-dom";
import AppLayout from "../widgets/layout/AppLayout";
import { usePassportStore } from "../shared/lib/passportStore";
import "./health-features-page.css";

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
];

export default function HealthFeaturesPage() {
  const navigate = useNavigate();
  const { healthFeatures, toggleHealthFeature } = usePassportStore();

  return (
    <AppLayout>
      <div className="P-HealthFeatures">
        <header className="P-HealthFeatures__header">
          <button
            className="P-HealthFeatures__iconButton"
            onClick={() => navigate("/passport/edit")}
          >
            ←
          </button>

          <div className="P-HealthFeatures__iconButton">⋮</div>
        </header>

        <section className="O-HealthPanel">
          <h1 className="O-HealthPanel__title">Особенности здоровья</h1>

          <div className="O-HealthPanel__content">
            {sections.map((section) => (
              <div key={section.title} className="M-HealthSection">
                <h2 className="M-HealthSection__title">{section.title}</h2>

                <div className="M-HealthSection__list">
                  {section.items.map((item) => {
                    const checked = healthFeatures.includes(item);

                    return (
                      <label key={item} className="M-HealthCheckboxRow">
                        <input
                          type="checkbox"
                          checked={checked}
                          onChange={() => toggleHealthFeature(item)}
                          className="M-HealthCheckboxRow__input"
                        />
                        <span
                          className={`M-HealthCheckboxRow__box ${
                            checked ? "is-checked" : ""
                          }`}
                        />
                        <span className="M-HealthCheckboxRow__texts">
                          <span className="M-HealthCheckboxRow__title">
                            {item}
                          </span>
                        </span>
                      </label>
                    );
                  })}
                </div>
              </div>
            ))}
          </div>

          <button
            className="A-HealthSaveButton"
            onClick={() => navigate("/passport/edit")}
          >
            Сохранить
          </button>
        </section>
      </div>
    </AppLayout>
  );
}
