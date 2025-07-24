function ImageCard({ image, title, description }) {
  const cardStyle = {
    width: "280px",
    border: "1px solid #ccc",
    borderRadius: "10px",
    overflow: "hidden",
    backgroundColor: "#fff",
    boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
    transition: "transform 0.2s ease-in-out",
  };

  const imgStyle = {
    width: "100%",
    height: "200px",
    objectFit: "cover",
    display: "block",
  };

  const infoStyle = {
    padding: "12px",
    textAlign: "center",
  };

  const titleStyle = {
    margin: "0",
    fontSize: "1.1em",
    color: "#333",
  };

  const descStyle = {
    marginTop: "8px",
    fontSize: "0.95em",
    color: "#666",
  };

  return (
    <div style={cardStyle}>
      <img src={`http://localhost:5000/uploads/${image}`} alt={title} style={imgStyle} />
      <div style={infoStyle}>
        <h3 style={titleStyle}>{title}</h3>
        <p style={descStyle}>{description}</p>
      </div>
    </div>
  );
}

function App() {
  const [images, setImages] = React.useState([]);

  React.useEffect(() => {
    fetch("http://localhost:5000/uploads")
      .then(res => res.json())
      .then(data => setImages(data));
  }, []);

  const galleryStyle = {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))",
    gap: "20px",
    padding: "20px",
    backgroundColor: "#f7f7f7",
  };

  return (
    <div style={galleryStyle}>
      {images.map((img, idx) => (
        <ImageCard
          key={idx}
          image={img.filename}
          title={img.title}
          description={img.description}
        />
      ))}
    </div>
  );
}


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);

function verify_func(){
  window.location.href = "admin.html";
}