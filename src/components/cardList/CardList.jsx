import "./cardList.css";
import Card from "../card/Card";
import SteppeWolf from "../../assets/SteppeWolf.jpg";
import theAlchemist from "../../assets/theAlchemist.jpg";
import harryPotter from "../../assets/harryPotter.jpg";
import CritiqueOfPureReason from "../../assets/CritiqueOfPureReason.jpg";

function CardList() {
  return (
    <div className="cardList">
      <Card
        image={SteppeWolf}
        title={"Steppe Wolf"}
        description={"Description of Steppe Wolf"}
        author={"hermann hesse"}
      />
      <Card
        image={theAlchemist}
        title={"The Alchemist"}
        description={"Description of The Alchemist"}
        author={"paulo koelio"}
      />
      <Card
        image={harryPotter}
        title={"Harry Potter"}
        description={"Description of Harry Potter"}
        author={"joanne rowling"}
      />
      <Card
        image={CritiqueOfPureReason}
        title={"Critique Of Pure Reason"}
        description={"Description of Critique Of Pure Reason"}
        author={"immanuel kant"}
      />
    </div>
  );
}

export default CardList;
