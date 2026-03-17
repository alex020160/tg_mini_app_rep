import editIcon from "../../shared/ui/icons/edit-icon.svg";
import checkIcon from "../../shared/ui/icons/check-mark-icon.svg";
import "./medical-info-card.css";

type MedicalInfoCardProps = {
  weight: string;
  neutered: boolean;
  vaccinationDate: string;
  parasiteTreatmentDate: string;
  chronicDiseases: string;
  surgeries: string;
  microchip: string;
};

export default function MedicalInfoCard({
  weight,
  neutered,
  vaccinationDate,
  parasiteTreatmentDate,
  chronicDiseases,
  surgeries,
  microchip,
}: MedicalInfoCardProps) {
  return (
    <section className="O-MedicalInfoCard">
      <div className="O-MedicalInfoCard__title">Медицинская информация</div>

      <div className="O-MedicalInfoCard__block">
        <MedicalRow label="Вес" value={weight} withEdit />

        <CheckRow label="Кастрирован" checked={neutered} />

        <CheckRow label="Вакцинация" checked secondary={vaccinationDate} />

        <CheckRow
          label="Обработка от паразитов"
          checked
          secondary={parasiteTreatmentDate}
        />
      </div>

      <div className="O-MedicalInfoCard__block">
        <EditableTextRow
          label="Хронические заболевания"
          value={chronicDiseases}
        />

        <EditableTextRow label="Операции" value={surgeries} />

        <EditableTextRow label="Микрочип" value={microchip} />
      </div>
    </section>
  );
}

type MedicalRowProps = {
  label: string;
  value: string;
  withEdit?: boolean;
};

function MedicalRow({ label, value, withEdit = false }: MedicalRowProps) {
  return (
    <div className="M-MedicalInfoRow">
      <div className="M-MedicalInfoRow__left">
        <span className="M-MedicalInfoRow__label">{label}</span>
        <span className="M-MedicalInfoRow__value">{value}</span>
      </div>

      {withEdit && (
        <button className="M-MedicalInfoRow__edit">
          <img src={editIcon} alt="" className="A-IconImage A-IconImage--sm" />
        </button>
      )}
    </div>
  );
}

type CheckRowProps = {
  label: string;
  checked?: boolean;
  secondary?: string;
};

function CheckRow({ label, checked = false, secondary }: CheckRowProps) {
  return (
    <div className="M-CheckInfoRow">
      <div className={`M-CheckInfoRow__check ${checked ? "is-checked" : ""}`}>
        {checked && (
          <img src={checkIcon} alt="" className="A-IconImage A-IconImage--sm" />
        )}
      </div>

      <div className="M-CheckInfoRow__content">
        <div className="M-CheckInfoRow__label">{label}</div>

        {secondary && (
          <div className="M-CheckInfoRow__secondary">{secondary}</div>
        )}
      </div>
    </div>
  );
}

type EditableTextRowProps = {
  label: string;
  value: string;
};

function EditableTextRow({ label, value }: EditableTextRowProps) {
  return (
    <div className="M-EditableTextRow">
      <div className="M-EditableTextRow__content">
        <div className="M-EditableTextRow__label">{label}</div>
        <div className="M-EditableTextRow__value">{value}</div>
      </div>

      <button className="M-EditableTextRow__edit">
        <img src={editIcon} alt="" className="A-IconImage A-IconImage--sm" />
      </button>
    </div>
  );
}
