import "./Appp.css";
function FancyCard(props) {
  return (
    <>
      <div className="card">
        <div className="cardHead">
          <img className="cardImg" src={props.src} alt="card head img"></img>
        </div>
        <div className="cardBody">
          <h1 className="cardTitle">{props.title}</h1>
          <p className="cardText">{props.text}</p>
        </div>
      </div>
    </>
  );
}
function Card1() {
  return (
    <FancyCard
      title="Chorsu"
      text="card text Lorem ipsum fsdasdf sadfds gniol nldsjajfnjkladsj g;kdsj gkladjg kldjg rpig jkldaj origjldkajgflkhbgjlk hsdgjhdarlughr"
      src="https://www.imgacademy.com/themes/custom/imgacademy/images/helpbox-contact.jpg"
    ></FancyCard>
  );
}
function Card2() {
  return (
    <FancyCard
      title="PDP akademy"
      text="card text Lorem ipsum fsdasdf sadfds gniol nldsjajfnjkladsj g;kdsj gkladjg kldjg rpig jkldaj origjldkajgflkhbgjlk hsdgjhdarlughr"
      src="https://smapse.com/storage/2019/07/j7.jpg"
    ></FancyCard>
  );
}
function Card3() {
  return (
    <FancyCard
      title="Stadion"
      text="card text Lorem ipsum fsdasdf sadfds gniol nldsjajfnjkladsj g;kdsj gkladjg kldjg rpig jkldaj origjldkajgflkhbgjlk hsdgjhdarlughr"
      src="https://www.imgacademy.com/sites/default/files/2009-stadium-about.jpg"
    ></FancyCard>
  );
}
function Cards() {
  return (
    <>
      <div className="Cards">
        <Card1 />
        <Card2 />
        <Card3 />
      </div>
    </>
  );
}
export default Cards;
