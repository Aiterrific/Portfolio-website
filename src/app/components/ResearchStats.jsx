import "./ResearchStats.css";

/* Only verified survey stats. Do not add numbers without source confirmation. */
const STATS = [
  {
    value: 41.1,
    display: "41.1%",
    label: "cited lack of capital as their primary barrier to investing",
  },
  {
    value: 68.5,
    display: "68.5%",
    label: "prefer handling their investments entirely online",
  },
  {
    value: 64.4,
    display: "64.4%",
    label: "accept moderate risk in exchange for better returns",
  },
];

export default function ResearchStats() {
  return (
    <div className="rs-grid">
      {STATS.map((s) => (
        <div className="rs-stat" key={s.display}>
          <p className="rs-value">{s.display}</p>
          <div
            className="rs-bar"
            role="img"
            aria-label={`${s.display} of survey respondents`}
          >
            <span className="rs-bar-fill" style={{ width: `${s.value}%` }} />
          </div>
          <p className="rs-label">{s.label}</p>
        </div>
      ))}
    </div>
  );
}
