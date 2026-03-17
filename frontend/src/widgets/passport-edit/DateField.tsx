import "./date-field.css";

type DateFieldProps = {
  label: string;
  value: string;
  onChange: (value: string) => void;
  error?: boolean;
};

export default function DateField({
  label,
  value,
  onChange,
  error = false,
}: DateFieldProps) {
  return (
    <label className={`O-DateField ${error ? "is-error" : ""}`}>
      <span className="O-DateField__label">{label}</span>

      <div className="O-DateField__row">
        <input
          className="O-DateField__input"
          type="text"
          value={value}
          onChange={(e) => onChange(e.target.value)}
          placeholder="дд.мм.гггг"
        />
        <span className="O-DateField__icon">📅</span>
      </div>
    </label>
  );
}
