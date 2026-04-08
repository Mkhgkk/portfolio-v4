export function NoiseOverlay() {
  return (
    <div
      className="pointer-events-none fixed inset-0 z-[99] opacity-[0.06] dark:opacity-[0.08]"
      style={{
        backgroundImage: 'url(/assets/noise.png)',
        backgroundSize: '256px 256px',
      }}
    />
  )
}
