function VideoBlock({
  src,
  poster,
  title,
  type = "video/mp4",
  className = "",
  videoClassName = "",
  autoPlay = false,
  loop = false,
  muted = false,
  playsInline = false,
  showControls = true
}) {
  const figureClasses = `m-0 ${className}`.trim();
  const videoClasses = `w-full rounded-xl border border-slate-700 bg-black ${videoClassName}`.trim();

  return (
    <figure className={figureClasses}>
      <video
        autoPlay={autoPlay}
        className={videoClasses}
        controls={showControls}
        loop={loop}
        muted={muted}
        playsInline={playsInline}
        poster={poster}
        preload="metadata"
      >
        <source src={src} type={type} />
        Your browser does not support the video tag.
      </video>
      {title ? <figcaption className="mt-2 text-sm text-slate-400">{title}</figcaption> : null}
    </figure>
  );
}

export default VideoBlock;
