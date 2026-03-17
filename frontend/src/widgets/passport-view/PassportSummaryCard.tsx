import "./passport-summary-card.css";

type PassportSummaryCardProps = {
  name: string;
  ageText: string;
  weightText: string;
  petType: string;
  sex: string;
  breed: string;
  color: string;
  birthDate: string;
  imageUrl?: string;
};

export default function PassportSummaryCard({
  name,
  ageText,
  weightText,
  petType,
  sex,
  breed,
  color,
  birthDate,
  imageUrl,
}: PassportSummaryCardProps) {
  return (
    <section className="O-PassportSummaryCard">
      <div className="O-PassportSummaryCard__top">
        <div className="O-PassportSummaryCard__photoWrap">
          {imageUrl ? (
            <img
              src={imageUrl}
              alt={name}
              className="O-PassportSummaryCard__photo"
            />
          ) : (
            <div className="O-PassportSummaryCard__photo O-PassportSummaryCard__photo--empty">
              Фото
            </div>
          )}
        </div>

        <div className="O-PassportSummaryCard__hero">
          <div className="O-PassportSummaryCard__name">{name}</div>
          <div className="O-PassportSummaryCard__meta">
            {ageText} • {weightText}
          </div>
        </div>
      </div>

      <div className="O-PassportSummaryCard__rows">
        <InfoRow label="Питомец" value={petType} />
        <InfoRow label="Пол" value={sex} />
        <InfoRow label="Порода" value={breed} />
        <InfoRow label="Окрас" value={color} />
        <InfoRow label="Дата рождения" value={birthDate} />
      </div>
    </section>
  );
}

type InfoRowProps = {
  label: string;
  value: string;
};

function InfoRow({ label, value }: InfoRowProps) {
  return (
    <div className="M-PassportInfoRow">
      <span className="M-PassportInfoRow__label">{label}</span>
      <span className="M-PassportInfoRow__value">{value}</span>
    </div>
  );
}
