import "../styles/components/ImageBlock.css";

function ImageBlock({ src, alt, caption }) {
  return (
    <figure className="image-block">
      <img src={src} alt={alt} className="image-block__media" />
      {caption ? <figcaption className="image-block__caption">{caption}</figcaption> : null}
    </figure>
  );
}

export default ImageBlock;
