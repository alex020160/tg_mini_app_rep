import "./radio-card.css";

type RadioOption = {
  label: string;
};

type RadioCardProps = {
  options: RadioOption[];
  value: string;
  onChange: (value: string) => void;
};

export default function RadioCard({
  options,
  value,
  onChange,
}: RadioCardProps) {
  return (
    <section className="O-RadioCard">
      {options.map((option, index) => {
        const checked = value === option.label;

        return (
          <div key={option.label}>
            <button
              type="button"
              className="M-RadioRowButton"
              onClick={() => onChange(option.label)}
            >
              <div className="M-RadioRow">
                <span
                  className={`M-RadioRow__dot ${checked ? "is-checked" : ""}`}
                />
                <span className="M-RadioRow__label">{option.label}</span>
              </div>
            </button>

            {index !== options.length - 1 ? (
              <div className="O-RadioCard__divider" />
            ) : null}
          </div>
        );
      })}
    </section>
  );
}
