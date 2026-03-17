import "./textarea-field.css";

type TextareaFieldProps = {
  label: string;
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
  error?: boolean;
  hint?: string;
  rows?: number;
};

export default function TextareaField({
  label,
  value,
  onChange,
  placeholder,
  error = false,
  hint,
  rows = 3,
}: TextareaFieldProps) {
  return (
    <div className="W-TextareaFieldWrap">
      <label className={`O-TextareaField ${error ? "is-error" : ""}`}>
        <span className="O-TextareaField__label">{label}</span>

        <textarea
          className="O-TextareaField__input"
          value={value}
          onChange={(e) => onChange(e.target.value)}
          placeholder={placeholder}
          rows={rows}
        />
      </label>

      {hint ? <div className="O-TextareaField__hint">{hint}</div> : null}
    </div>
  );
}
