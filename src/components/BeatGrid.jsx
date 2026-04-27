import { useEffect, useState } from "react";

function BeatGrid() {
  const [playheadPos, setPlayheadPos] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setPlayheadPos((prev) => (prev + 1) % 100);
    }, 80);
    return () => clearInterval(interval);
  }, []);

  const clips = [
    { lane: 0, start: 5, end: 25, label: "CAM 1", active: playheadPos > 5 && playheadPos < 25 },
    { lane: 0, start: 30, end: 45, label: "CAM 2", active: playheadPos > 30 && playheadPos < 45 },
    { lane: 0, start: 50, end: 70, label: "CAM 3", active: playheadPos > 50 && playheadPos < 70 },
    { lane: 0, start: 75, end: 95, label: "CAM 1", active: playheadPos > 75 && playheadPos < 95 },
    
    { lane: 1, start: 10, end: 35, label: "CAM 2", active: playheadPos > 10 && playheadPos < 35 },
    { lane: 1, start: 40, end: 60, label: "CAM 3", active: playheadPos > 40 && playheadPos < 60 },
    { lane: 1, start: 65, end: 85, label: "CAM 1", active: playheadPos > 65 && playheadPos < 85 },
    
    { lane: 2, start: 15, end: 40, label: "CAM 3", active: playheadPos > 15 && playheadPos < 40 },
    { lane: 2, start: 45, end: 65, label: "CAM 1", active: playheadPos > 45 && playheadPos < 65 },
    { lane: 2, start: 70, end: 90, label: "CAM 2", active: playheadPos > 70 && playheadPos < 90 },
  ];

  return (
    <div className="beat-grid">
      <div className="lanes">
        <div className="lane">
          {clips.filter(c => c.lane === 0).map((clip, i) => (
            <div
              key={i}
              className={`clip ${clip.active ? "active" : ""}`}
              style={{ left: `${clip.start}%`, right: `${100 - clip.end}%` }}
            >
              {clip.label}
            </div>
          ))}
        </div>
        <div className="lane">
          {clips.filter(c => c.lane === 1).map((clip, i) => (
            <div
              key={i}
              className={`clip ${clip.active ? "active" : ""}`}
              style={{ left: `${clip.start}%`, right: `${100 - clip.end}%` }}
            >
              {clip.label}
            </div>
          ))}
        </div>
        <div className="lane">
          {clips.filter(c => c.lane === 2).map((clip, i) => (
            <div
              key={i}
              className={`clip ${clip.active ? "active" : ""}`}
              style={{ left: `${clip.start}%`, right: `${100 - clip.end}%` }}
            >
              {clip.label}
            </div>
          ))}
        </div>
      </div>
      <div className="playhead" style={{ left: `${playheadPos}%` }} />
    </div>
  );
}

export default BeatGrid;