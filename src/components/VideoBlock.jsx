import "../styles/components/VideoBlock.css";

function VideoBlock({ src, poster, title, type = "video/mp4" }) {
  return (
    <figure className="video-block">
      <video className="video-block__media" controls preload="metadata" poster={poster}>
        <source src={src} type={type} />
        Your browser does not support the video tag.
      </video>
      {title ? <figcaption className="video-block__caption">{title}</figcaption> : null}
    </figure>
  );
}

export default VideoBlock;
