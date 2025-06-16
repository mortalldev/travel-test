import "./SectionTitle.css";

export default function SectionTitle({ label = "", children }) {
    return (
        <div className="section__title title__font-family">
            {label ? label : children}
        </div>
    );
}
