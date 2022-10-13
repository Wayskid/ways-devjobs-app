
export default function Button({children, type, version}) {
  return (
    <button type={type} className={version}>
        {children}
    </button>
  )
}
