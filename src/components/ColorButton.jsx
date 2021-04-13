export default function ColorButton({ variant, setColor }) {
  const handleClick = (e) => {
    document.querySelectorAll(".color-button").forEach((btn) => {
      if (btn.classList.contains("active")) {
        btn.classList.remove("active");
      }
    });
    e.target.classList.add("active");
    setColor(variant);
  };
  return (
    <div onClick={handleClick} className={`color-button ${variant}`}></div>
  );
}
