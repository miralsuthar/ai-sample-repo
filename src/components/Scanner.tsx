export const Scanner = ({ className }: { className: string }) => {
  return (
    <div className={className}>
      <svg width="252" height="252" viewBox="0 0 252 252" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="126" cy="126" r="126" fill="url(#paint0_angular_54_2105)" />
        <defs>
          <radialGradient id="paint0_angular_54_2105" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(126 126) rotate(90) scale(126)">
            <stop stopColor="#9681FF" />
            <stop offset="0.25" stopColor="#9681FF" stopOpacity="0" />
            <stop offset="1" stopColor="#9681FF" stopOpacity="0" />
          </radialGradient>
        </defs>
      </svg>
    </div>
  )
}
