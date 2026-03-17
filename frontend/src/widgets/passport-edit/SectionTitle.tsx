import "./section-title.css";

type SectionTitleProps = {
  children: string;
};

export default function SectionTitle({ children }: SectionTitleProps) {
  return <h2 className="A-SectionTitleEdit">{children}</h2>;
}
