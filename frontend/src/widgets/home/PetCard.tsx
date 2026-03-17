import checkIcon from "../../shared/ui/icons/check-mark-icon.svg";
import editIcon from "../../shared/ui/icons/edit-icon.svg";
import "./pet-card.css";
import "./pet-card.css";

type PetCardProps = {
  name: string;
  ageText: string;
  weightText: string;
  lastEventTitle: string;
  lastEventDate: string;
  nextCheckDate: string;
  imageUrl?: string;
};

export default function PetCard({
  name,
  ageText,
  weightText,
  lastEventTitle,
  lastEventDate,
  nextCheckDate,
  imageUrl,
}: PetCardProps) {
  return (
    <section className="O-PetCard">
      <div className="O-PetCard__top">
        <div className="O-PetCard__photoWrap">
          {imageUrl ? (
            <img src={imageUrl} alt={name} className="O-PetCard__photo" />
          ) : (
            <div className="O-PetCard__photo O-PetCard__photo--empty">Фото</div>
          )}
        </div>

        <div className="O-PetCard__content">
          <div className="O-PetCard__name">{name}</div>

          <div className="O-PetCard__meta">
            {ageText} • {weightText}
          </div>

          <div className="O-PetCard__status">
            <img
              src={checkIcon}
              alt=""
              className="A-IconImage A-IconImage--sm"
            />
            <span>Сегодня все в порядке</span>
          </div>

          <div className="O-PetCard__lastEventBlock">
            <div className="O-PetCard__lastEventLabel">Последнее событие:</div>
            <div className="O-PetCard__lastEventTitle">{lastEventTitle}</div>
            {lastEventDate ? (
              <div className="O-PetCard__lastEventDate">{lastEventDate}</div>
            ) : null}
          </div>
        </div>
      </div>

      <div className="O-PetCard__divider" />

      <div className="O-PetCard__bottom">
        <div className="O-PetCard__bottomTitle">
          Следующие отслеживания состояния:
        </div>

        <div className="O-PetCard__checkRow">
          <img src={editIcon} alt="" className="A-IconImage A-IconImage--sm" />
          <span>{nextCheckDate}</span>
        </div>
      </div>
    </section>
  );
}
