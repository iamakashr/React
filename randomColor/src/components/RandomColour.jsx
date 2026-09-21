import { useEffect, useState } from "react";

const RandomColour = () => {
  const [typeOfColor, setTypeOfColor] = useState("hex");
  const [color, setColor] = useState("#000000");

  function randomColorUtility(length) {
    return Math.floor(Math.random() * length);
  }

  function handleCreateRandomHexColor() {
    const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];

    let hexColor = "#";

    for (let i = 0; i < 6; i++) {
      hexColor += hex[randomColorUtility(hex.length)];
    }

    setColor(hexColor);
  }

  function handleCreateRandomRgbColor() {
    const r = randomColorUtility(256);
    const g = randomColorUtility(256);
    const b = randomColorUtility(256);

    setColor(`rgb(${r}, ${g}, ${b})`);
  }

  function handleGenerateColor() {
    if (typeOfColor === "hex") {
      handleCreateRandomHexColor();
    } else if (typeOfColor === "rgb") {
      handleCreateRandomRgbColor();
    } else {
      setTypeOfColor("hex");
    }
  }

  useEffect(() => {
    handleGenerateColor();
  }, [typeOfColor]);

  return (
    <div
      style={{
        minHeight: "100vh",
        background: color,
        color: "#fff",
        textAlign: "center",
        paddingTop: "40px",
      }}>
      <button onClick={() => setTypeOfColor("hex")}>HEX</button>

      <button onClick={() => setTypeOfColor("rgb")}>RGB</button>

      <button onClick={handleGenerateColor}>Generate</button>

      <div style={{ marginTop: "50px" }}>
        <h2>{typeOfColor === "hex" ? "HEX Color" : "RGB Color"}</h2>
        <p>{color}</p>
      </div>
    </div>
  );
};

export default RandomColour;
