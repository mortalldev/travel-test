import "./CardTitle.css";

export default function CardTitle({ label = "", children }) {
    return (
        <div className="card__title title__font-family">
            {label ? label : children}
        </div>
    );
}
