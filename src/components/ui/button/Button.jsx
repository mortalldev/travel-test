import "./Button.css";

export default function Button({
    label = "",
    children,
    width = "",
    height = "",
}) {
    return (
        <div className="button primary-background" style={{ width, height }}>
            {label ? label : children}
        </div>
    );
}
