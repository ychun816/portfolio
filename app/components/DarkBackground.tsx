export default function DarkBackground() {
  return (
    <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      {/* soft radial gradients */}
      <div
        className="absolute -left-64 -top-40 w-[900px] h-[900px] rounded-full opacity-40 blur-3xl"
        style={{
          background: 'radial-gradient(closest-corner at 30% 30%, rgba(124,58,237,0.22), transparent 30%), radial-gradient(closest-corner at 70% 70%, rgba(6,182,212,0.12), transparent 40%)'
        }}
      />

      <div
        className="absolute -right-64 -bottom-40 w-[700px] h-[700px] rounded-full opacity-30 blur-2xl"
        style={{
          background: 'radial-gradient(closest-corner at 20% 20%, rgba(14,165,233,0.14), transparent 30%), radial-gradient(closest-corner at 80% 80%, rgba(168,85,247,0.08), transparent 40%)'
        }}
      />

      {/* subtle noise overlay using SVG data URI */}
      <div
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage:
            "url('data:image/svg+xml;utf8,<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"200\" height=\"200\"><filter id=\"n\"><feTurbulence baseFrequency=\"0.9\" numOctaves=\"2\" stitchTiles=\"stitch\"/></filter><rect width=\"100%\" height=\"100%\" filter=\"url(%23n)\" opacity=\"0.6\"/></svg>')",
          backgroundRepeat: 'repeat',
          mixBlendMode: 'overlay'
        }}
      />

    </div>
  );
}
