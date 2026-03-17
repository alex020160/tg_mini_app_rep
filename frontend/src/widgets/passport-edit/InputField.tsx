import "./input-field.css";

type InputFieldProps = {
  label: string;
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
  error?: boolean;
  hint?: string;
  type?: "text" | "date" | "number";
};

export default function InputField({
  label,
  value,
  onChange,
  placeholder,
  error = false,
  hint,
  type = "text",
}: InputFieldProps) {
  return (
    <div className="W-InputFieldWrap">
      <label className={`O-InputField ${error ? "is-error" : ""}`}>
        <span className="O-InputField__label">{label}</span>

        <input
          className="O-InputField__input"
          type={type}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          placeholder={placeholder}
        />
      </label>

      {hint ? <div className="O-InputField__hint">{hint}</div> : null}
    </div>
  );
}
