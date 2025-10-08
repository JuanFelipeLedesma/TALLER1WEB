import { Link } from 'react-router-dom'

export default function NavLinkButton({ to, title, subtitle }) {
  return (
    <Link to={to} className="card">
      <h3>{title}</h3>
      <div className="muted">{subtitle}</div>
      <div className="actions">
        <div className="btn">Ir al reto</div>
      </div>
    </Link>
  )
}
