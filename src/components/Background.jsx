import background from "./assets/background.jpg";

export default function Background() {
  return (
    <div
      className="Background"
      style={{
        backgroundImage: `url(${background})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "contain",
        //backgroundSize: "cover",
        height: "55vw",
        width: "230vh",

        // filter: "blur(2.5px)",
      }}
    ></div>
  );
}
