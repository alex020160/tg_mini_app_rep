import { useNavigate } from "react-router-dom";
import {
  useProcedureStore,
  type ProcedureType,
} from "../../shared/lib/procedureStore";
import "./procedure-grid.css";

const procedures: {
  title: string;
  icon: string;
  type: ProcedureType;
}[] = [
  { title: "Защита от блох\nи клещей", icon: "◌", type: "fleas" },
  { title: "Защита\nот глистов", icon: "◔", type: "worms" },
  { title: "Вакцинация\nот бешенства", icon: "✦", type: "rabies" },
  { title: "Вакцинация\nот инфекции", icon: "✦", type: "infection" },
  { title: "Прием\nветеринара", icon: "✚", type: "vet" },
  { title: "Что-то\nдругое", icon: "＋", type: "custom" },
];

export default function ProcedureGrid() {
  const navigate = useNavigate();
  const proceduresMap = useProcedureStore((state) => state.procedures);

  return (
    <section className="O-ProcedureGrid">
      {procedures.map((item) => {
        const record = proceduresMap[item.type];
        const exists = Boolean(record);

        return (
          <button
            key={item.type}
            type="button"
            className="M-ProcedureGridTile"
            onClick={() => navigate(`/procedure/${item.type}`)}
          >
            <div className="M-ProcedureGridTile__icon">{item.icon}</div>
            <div className="M-ProcedureGridTile__title">{item.title}</div>

            {exists && record?.doneDate ? (
              <div className="M-ProcedureGridTile__meta">{record.doneDate}</div>
            ) : (
              <div className="M-ProcedureGridTile__meta M-ProcedureGridTile__meta--empty">
                —
              </div>
            )}

            <div className="M-ProcedureGridTile__subtitle">
              {exists ? "Изменить" : "Добавить"}
            </div>
          </button>
        );
      })}
    </section>
  );
}
