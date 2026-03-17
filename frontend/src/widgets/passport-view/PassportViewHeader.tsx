import { useNavigate } from "react-router-dom";
import arrowIcon from "../../shared/ui/icons/arrow-icon.svg";
import editIcon from "../../shared/ui/icons/edit-icon.svg";
import "./passport-view-header.css";

export default function PassportViewHeader() {
  const navigate = useNavigate();

  return (
    <header className="O-PassportViewHeader">
      <button
        className="O-PassportViewHeader__iconButton"
        onClick={() => navigate(-1)}
      >
        <img
          src={arrowIcon}
          alt="Назад"
          className="A-IconImage A-IconImage--md A-IconImage--rotate-right"
        />
      </button>

      <h1 className="O-PassportViewHeader__title">Ветпаспорт</h1>

      <button
        className="O-PassportViewHeader__iconButton"
        onClick={() => navigate("/passport/edit")}
      >
        <img
          src={editIcon}
          alt="Редактировать"
          className="A-IconImage A-IconImage--md"
        />
      </button>
    </header>
  );
}
