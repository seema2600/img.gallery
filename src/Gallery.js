import Card from "./Card";
import galleryData from "./data";

function Gallery() {
  return (
    <div className="gallery">
      {galleryData.map((item) => (
        <Card
          key={item.id}
          image={item.image}
          title={item.title}
        />
      ))}
    </div>
  );
}

export default Gallery;