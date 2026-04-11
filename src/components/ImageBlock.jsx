function ImageBlock({ src, alt, caption }) {
  return (
    <figure className="m-0">
      <img src={src} alt={alt} className="block w-full rounded-xl border border-slate-300" />
      {caption ? <figcaption className="mt-2 text-sm text-slate-600">{caption}</figcaption> : null}
    </figure>
  );
}

export default ImageBlock;
