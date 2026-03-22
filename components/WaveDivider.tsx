export default function WaveDivider() {
  return (
    <div className="w-full overflow-hidden leading-[0]" aria-hidden="true">
      <svg viewBox="0 0 1440 60" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg" className="block w-full">
        <rect width="1440" height="60" fill="#2C3E2D" />
        <path
          d="M0,60 L0,20 Q180,60 360,30 Q540,0 720,30 Q900,60 1080,30 Q1260,0 1440,20 L1440,60 Z"
          fill="#FDFAF4"
        />
      </svg>
    </div>
  )
}
