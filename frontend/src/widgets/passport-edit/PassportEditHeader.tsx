import { useNavigate } from "react-router-dom";
import arrowIcon from "../../shared/ui/icons/arrow-icon.svg";
import "./passport-edit-header.css";

export default function PassportEditHeader() {
  const navigate = useNavigate();

  return (
    <header className="O-PassportEditHeader">
      <button
        className="O-PassportEditHeader__iconButton"
        onClick={() => navigate("/passport")}
      >
        <img
          src={arrowIcon}
          alt="Назад"
          className="A-IconImage A-IconImage--md A-IconImage--rotate-right"
        />
      </button>

      <h1 className="O-PassportEditHeader__title">Ветпаспорт</h1>

      <button className="O-PassportEditHeader__iconButton">⋮</button>
    </header>
  );
}
