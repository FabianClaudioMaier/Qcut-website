function VideoBlock({ src, poster, title, type = "video/mp4" }) {
  return (
    <figure className="m-0">
      <video className="w-full rounded-xl border border-slate-300 bg-black" controls preload="metadata" poster={poster}>
        <source src={src} type={type} />
        Your browser does not support the video tag.
      </video>
      {title ? <figcaption className="mt-2 text-sm text-slate-600">{title}</figcaption> : null}
    </figure>
  );
}

export default VideoBlock;
