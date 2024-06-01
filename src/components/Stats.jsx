export default function Stats({
  stats
}) {
  return (
    <section className="stats">
      <Stat number={stats.numberOfWords} label="Words"/>
      <Stat number={stats.numberOfCharacters} label="Characters"/>
      <Stat number={stats.instagramCharactersLeft} label="Instagram"/>
      <Stat number={stats.facebookCharactersLeft} label="Facebook"/>
    </section>
  )
}

function Stat({ number, label}) {
  return <section className="stat">
  <sapn className={`stat__number ${number < 0 ? "stat__number--limit" : ""}`}>{number}</sapn>
  <h3 className="second-heading">{label}</h3>
</section>
}