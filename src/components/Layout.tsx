import { NavLink, Outlet, useLocation } from "react-router-dom"
import { user } from "../data/mock"
import { IconBag, IconHome, IconTrophy, IconUser, IconWheel } from "../icons"
import { useAppState } from "../state"

const links = [
  { to: "/", label: "Главная", icon: IconHome, end: true },
  { to: "/profile", label: "Профиль", icon: IconUser, end: false },
  { to: "/shop", label: "Магазин", icon: IconBag, end: false },
  { to: "/leaderboard", label: "Таблица лидеров", icon: IconTrophy, end: false },
  { to: "/wheel", label: "Колесо фортуны", icon: IconWheel, end: false },
]

export function Layout() {
  const { photoUrl } = useAppState()
  const location = useLocation()
  const homeActive = location.pathname === "/" || location.pathname === "/main-not-in-office"
  const profileActive = location.pathname.startsWith("/profile")

  return (
    <div className="shell">
      <aside className="sidebar">
        <div className="brand">
          <span className="brand-mark">A</span>
          <span>AR Game</span>
        </div>
        <nav className="side-nav" aria-label="Разделы">
          {links.map((link) => {
            const Icon = link.icon
            return (
              <NavLink
                key={link.to}
                to={link.to}
                end={link.end}
                className={({ isActive }) => {
                  const active = link.to === "/" ? homeActive : link.to === "/profile" ? profileActive : isActive
                  return active ? "nav-link active" : "nav-link"
                }}
              >
                <Icon />
                <span>{link.label}</span>
              </NavLink>
            )
          })}
        </nav>
        <div className="side-user">
          <Avatar photoUrl={photoUrl} size="sm" />
          <div>
            <strong>{user.shortName}</strong>
            <span>{user.role}</span>
          </div>
        </div>
      </aside>
      <div className="workspace">
        <Outlet />
      </div>
      <nav className="tabbar" aria-label="Разделы">
        {links.map((link) => {
          const Icon = link.icon
          return (
            <NavLink
              key={link.to}
              to={link.to}
              end={link.end}
              className={({ isActive }) => {
                const active = link.to === "/" ? homeActive : link.to === "/profile" ? profileActive : isActive
                return active ? "tab active" : "tab"
              }}
            >
              <Icon />
              <span>{link.label}</span>
            </NavLink>
          )
        })}
      </nav>
    </div>
  )
}

export function Avatar({ photoUrl, size }: { photoUrl: string | null; size: "sm" | "lg" }) {
  return (
    <span className={size === "lg" ? "avatar avatar-lg" : "avatar"}>
      {photoUrl ? <img src={photoUrl} alt="" /> : user.initials}
    </span>
  )
}
