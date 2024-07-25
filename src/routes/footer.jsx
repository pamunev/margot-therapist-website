import dogLookingLeft from "../Assets/images/dog-transparent-zoom.png";
import dogLookingRight from "../Assets/images/dog-looking-right.png";

export default function Footer() {
  return (
    <div>
      <div className="copyright">
        <span className="reverse-pig-image">
          <img src={dogLookingRight} />{" "}
        </span>
        <p>© 2024 Margot Goralczyk. All rights reserved.</p>
        <span className="pig-image">
          <img src={dogLookingLeft} />{" "}
        </span>
      </div>
    </div>
  );
}
