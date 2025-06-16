import "./SectionPath.css";

export default function SectionPath({ label = "", children }) {
    return <div className="section__path">{label ? label : children}</div>;
}
