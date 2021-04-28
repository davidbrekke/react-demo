import Link from '../Link'
import './nav.css'

export default function Nav() {
  return (
    <nav>
      <Link title="intro" to="#intro" />
      <Link title="getting started" to="#getting-started" />
    </nav>
  )
}
