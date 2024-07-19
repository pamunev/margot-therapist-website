import pig from "../Assets/images/pygmy-pig.png";
import reversePig from "../Assets/images/reversed-pygmy-pig.png";

export default function Footer() {
  return (
    <div>
      <div className="copyright">
        <span className="reverse-pig-image">
          <img src={reversePig} />{" "}
        </span>
        <p>© 2024 Margot Goralczyk. All rights reserved.</p>
        <span className="pig-image">
          <img src={pig} />{" "}
        </span>
      </div>
    </div>
  );
}
