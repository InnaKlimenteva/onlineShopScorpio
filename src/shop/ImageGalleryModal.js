import './Shop.css';

export default function ImageGalleryModal({ selectedPhoto, onClose, Slider, settings }) {
    return (
      <div className="galleryContainer" onClick={onClose}>
        <div onClick={(e) => e.stopPropagation()} style={{ width: '90%' }}>
          <button className="galleryClose" onClick={onClose}>✕</button>
          <Slider {...settings}>
            {selectedPhoto.gallery.map((src, index) => (
              <div key={index}>
                <img className="galleryImage" src={src} alt={`slide-${index}`} width='90%' />
              </div>
            ))}
          </Slider>
        </div>
      </div>
    );
  }
  