function getYouTubeVideoId(url) {
  if (!url) return null;

  try {
    const parsed = new URL(url);
    const host = parsed.hostname.replace(/^www\./, "");

    if (host === "youtu.be") {
      return parsed.pathname.split("/").filter(Boolean)[0] || null;
    }

    if (host.endsWith("youtube.com")) {
      return parsed.searchParams.get("v");
    }
  } catch {
    return null;
  }

  return null;
}

function YouTubeEmbed({
  url,
  title = "YouTube video",
  className = "",
  iframeClassName = "",
  showControls = true,
  autoPlay = false
}) {
  const videoId = getYouTubeVideoId(url);
  const figureClasses = `m-0 ${className}`.trim();
  const iframeClasses = `h-full w-full rounded-xl border border-slate-700 bg-black ${iframeClassName}`.trim();

  if (!videoId) {
    return (
      <figure className={figureClasses}>
        <p className="rounded-xl border border-red-500/40 bg-red-500/10 p-3 text-sm text-red-100">
          Invalid YouTube URL. Please pass a valid youtu.be link.
        </p>
      </figure>
    );
  }

  const params = new URLSearchParams({
    autoplay: autoPlay ? "1" : "0",
    controls: showControls ? "1" : "0",
    rel: "0",
    playsinline: "1"
  });

  if (autoPlay) {
    // Autoplay is commonly blocked unless muted.
    params.set("mute", "1");
  }

  const embedUrl = `https://www.youtube.com/embed/${videoId}?${params.toString()}`;

  return (
    <figure className={figureClasses}>
      <div className="aspect-video w-full">
        <iframe
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
          className={iframeClasses}
          src={embedUrl}
          title={title}
        />
      </div>
    </figure>
  );
}

export default YouTubeEmbed;
