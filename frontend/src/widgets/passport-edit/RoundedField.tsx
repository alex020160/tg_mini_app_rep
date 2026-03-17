import "./rounded-field.css";

type RoundedFieldProps = {
  title: string;
  subtitle?: string;
  error?: boolean;
  trailing?: string;
};

export default function RoundedField({
  title,
  subtitle,
  error = false,
  trailing,
}: RoundedFieldProps) {
  return (
    <div className="W-RoundedFieldWrap">
      <div className={`O-RoundedField ${error ? "is-error" : ""}`}>
        <div className="O-RoundedField__content">
          <div className="O-RoundedField__title">{title}</div>
          {subtitle ? (
            <div className="O-RoundedField__subtitle">{subtitle}</div>
          ) : null}
        </div>

        {trailing ? (
          <div className="O-RoundedField__trailing">{trailing}</div>
        ) : null}
      </div>
    </div>
  );
}
