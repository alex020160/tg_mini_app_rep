import "./toggle-row.css";

type ToggleRowProps = {
  title: string;
  subtitle?: string;
  active?: boolean;
  error?: boolean;
  onClick?: () => void;
  clickable?: boolean;
};

export default function ToggleRow({
  title,
  subtitle,
  active = false,
  error = false,
  onClick,
  clickable = false,
}: ToggleRowProps) {
  return (
    <button
      type="button"
      className={`O-ToggleRowButton ${clickable ? "is-clickable" : ""}`}
      onClick={onClick}
    >
      <div className={`O-ToggleRow ${error ? "is-error" : ""}`}>
        <div className="O-ToggleRow__content">
          <div className="O-ToggleRow__title">{title}</div>
          {subtitle ? (
            <div className="O-ToggleRow__subtitle">{subtitle}</div>
          ) : null}
        </div>

        <div className={`O-ToggleRow__switch ${active ? "is-active" : ""}`}>
          <span className="O-ToggleRow__thumb" />
        </div>
      </div>
    </button>
  );
}
