import "./select-field.css";

type SelectFieldProps = {
  label: string;
  value: string;
  placeholder?: string;
  onClick?: () => void;
};

export default function SelectField({
  label,
  value,
  placeholder = "Выбрать",
  onClick,
}: SelectFieldProps) {
  return (
    <button type="button" className="O-SelectField" onClick={onClick}>
      <span className="O-SelectField__left">
        <span className="O-SelectField__label">{label}</span>
        <span
          className={`O-SelectField__value ${!value ? "is-placeholder" : ""}`}
        >
          {value || placeholder}
        </span>
      </span>

      <span className="O-SelectField__arrow">⌄</span>
    </button>
  );
}
