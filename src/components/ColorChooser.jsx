import ColorButton from "./ColorButton";

export default function ColorChooser({ setColor }) {
  const colors = ["green", "blue", "violet", "orange"];
  return (
    <div className="color-chooser">
      <label>Pick your color</label>
      <div className="pallete">
        {colors.map((color, idx) => (
          <ColorButton key={idx} setColor={setColor} variant={color} />
        ))}
      </div>
    </div>
  );
}
