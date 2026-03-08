import { useMemo, useState } from 'react'

type Screen = 'welcome' | 'affirmations'

const affirmations = [
  'Estoy construyendo la vida que merezco con calma y propósito.',
  'Confío en mí y en mi proceso, incluso cuando avanzo paso a paso.',
  'Hoy elijo pensamientos que me nutren y me impulsan.',
  'Mi energía es valiosa, la cuido y la enfoco en lo importante.',
  'Cada reto es una oportunidad para crecer con más confianza.',
  'Soy suficiente tal como soy, y también capaz de evolucionar.',
  'Merezco descanso, alegría y bienestar en mi día a día.',
  'Tengo claridad para decidir y valentía para actuar.',
]

function App() {
  const [screen, setScreen] = useState<Screen>('welcome')
  const [index, setIndex] = useState(0)

  const currentAffirmation = useMemo(() => affirmations[index], [index])

  const nextAffirmation = () => {
    setIndex((prev) => {
      const next = Math.floor(Math.random() * affirmations.length)
      if (next === prev) {
        return (next + 1) % affirmations.length
      }
      return next
    })
  }

  return (
    <main className="app-shell">
      <div className="glow glow-top" />
      <div className="glow glow-bottom" />

      {screen === 'welcome' ? (
        <section className="card" aria-labelledby="welcome-title">
          <p className="eyebrow">Mini app de bienestar</p>
          <h1 id="welcome-title">Bienvenida 🌸</h1>
          <p className="description">
            Regálate un momento para respirar, reconectar y recibir una afirmación positiva.
          </p>
          <button className="button" onClick={() => setScreen('affirmations')}>
            Empezar
          </button>
        </section>
      ) : (
        <section className="card" aria-live="polite">
          <p className="eyebrow">Afirmación del momento</p>
          <p className="affirmation">“{currentAffirmation}”</p>
          <div className="actions">
            <button className="button" onClick={nextAffirmation}>
              Cambiar afirmación
            </button>
            <button className="button button-secondary" onClick={() => setScreen('welcome')}>
              Volver
            </button>
          </div>
        </section>
      )}
    </main>
  )
}

export default App
