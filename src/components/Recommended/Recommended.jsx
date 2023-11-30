import "./Recommended.css";

function Recommended() {
  return (
    <>
      <section className="recommended_container">
        <h1 className="recommended_title">Recommended</h1>
        <div className="recommended_buttons">
          <button className="recommended_button">All Products</button>
          <button className="recommended_button">Nike</button>
          <button className="recommended_button">Adidas</button>
          <button className="recommended_button">Puma</button>
          <button className="recommended_button">Vans</button>
        </div>
      </section>
    </>
  );
}

export default Recommended;
