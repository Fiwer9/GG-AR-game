import type { SVGProps } from "react"

type IconProps = SVGProps<SVGSVGElement>

function base(props: IconProps) {
  return {
    width: 24,
    height: 24,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 1.8,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
    ...props,
  }
}

export function IconHome(props: IconProps) {
  return (
    <svg {...base(props)}>
      <path d="M4 10.5 12 4l8 6.5V20a1 1 0 0 1-1 1h-5v-6H10v6H5a1 1 0 0 1-1-1z" />
    </svg>
  )
}

export function IconUser(props: IconProps) {
  return (
    <svg {...base(props)}>
      <circle cx="12" cy="8" r="3.2" />
      <path d="M5 19.2c1.4-3 3.8-4.5 7-4.5s5.6 1.5 7 4.5" />
    </svg>
  )
}

export function IconBag(props: IconProps) {
  return (
    <svg {...base(props)}>
      <path d="M6.5 8h11l-.8 11.2a1 1 0 0 1-1 .8H8.3a1 1 0 0 1-1-.8z" />
      <path d="M9 8V6.8A3 3 0 0 1 12 3.8 3 3 0 0 1 15 6.8V8" />
    </svg>
  )
}

export function IconTrophy(props: IconProps) {
  return (
    <svg {...base(props)}>
      <path d="M8 4h8v5a4 4 0 0 1-8 0z" />
      <path d="M8 6H5.5A2.5 2.5 0 0 0 8 10M16 6h2.5A2.5 2.5 0 0 1 16 10M12 13v3M9 20h6M10 17h4" />
    </svg>
  )
}

export function IconWheel(props: IconProps) {
  return (
    <svg {...base(props)}>
      <circle cx="12" cy="12" r="8" />
      <circle cx="12" cy="12" r="1.4" fill="currentColor" stroke="none" />
      <path d="M12 4v3.2M12 16.8V20M4 12h3.2M16.8 12H20M6.4 6.4l2.2 2.2M15.4 15.4l2.2 2.2M17.6 6.4l-2.2 2.2M8.6 15.4l-2.2 2.2" />
    </svg>
  )
}

export function IconPin(props: IconProps) {
  return (
    <svg {...base(props)}>
      <path d="M12 21s6-5.2 6-10a6 6 0 1 0-12 0c0 4.8 6 10 6 10z" />
      <circle cx="12" cy="11" r="1.6" />
    </svg>
  )
}

export function IconCoin(props: IconProps) {
  return (
    <svg {...base(props)}>
      <circle cx="12" cy="12" r="8" />
      <path d="M12 8.2v7.6M9.6 10.2c.6-.8 1.4-1.2 2.4-1.2 1.6 0 2.6.8 2.6 2s-1 1.8-2.6 1.8-2.6.8-2.6 2 1 2 2.6 2c1 0 1.8-.4 2.4-1.2" />
    </svg>
  )
}

export function IconLock(props: IconProps) {
  return (
    <svg {...base(props)}>
      <rect x="5" y="10" width="14" height="10" rx="2" />
      <path d="M8 10V8a4 4 0 0 1 8 0v2" />
    </svg>
  )
}

export function IconCheck(props: IconProps) {
  return (
    <svg {...base(props)}>
      <path d="M5 12.5 9.2 17 19 7" />
    </svg>
  )
}

export function IconQr(props: IconProps) {
  return (
    <svg {...base(props)}>
      <path d="M4 4h6v6H4zM14 4h6v6h-6zM4 14h6v6H4zM14 14h2v2h-2zM18 14h2v2h-2zM14 18h2v2h-2zM18 18h2v2h-2z" />
    </svg>
  )
}

export function IconCamera(props: IconProps) {
  return (
    <svg {...base(props)}>
      <path d="M4 8h3l1.4-2h7.2L17 8h3a1 1 0 0 1 1 1v9a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V9a1 1 0 0 1 1-1z" />
      <circle cx="12" cy="13" r="3" />
    </svg>
  )
}

export function IconBell(props: IconProps) {
  return (
    <svg {...base(props)}>
      <path d="M6 16V11a6 6 0 1 1 12 0v5l1.2 2H4.8z" />
      <path d="M10 19a2 2 0 0 0 4 0" />
    </svg>
  )
}

export function IconTarget(props: IconProps) {
  return (
    <svg {...base(props)}>
      <circle cx="12" cy="12" r="7.5" />
      <circle cx="12" cy="12" r="3.5" />
      <circle cx="12" cy="12" r="1" fill="currentColor" stroke="none" />
    </svg>
  )
}

export function IconCalendar(props: IconProps) {
  return (
    <svg {...base(props)}>
      <rect x="4" y="5" width="16" height="15" rx="2" />
      <path d="M8 3.5V7M16 3.5V7M4 10h16" />
    </svg>
  )
}

export function IconTasks(props: IconProps) {
  return (
    <svg {...base(props)}>
      <rect x="4" y="4" width="16" height="16" rx="3" />
      <path d="M8 12.2 10.4 14.5 16 9" />
    </svg>
  )
}

export function IconHeadphones(props: IconProps) {
  return (
    <svg {...base(props)}>
      <path d="M4.5 13v3.5A2.5 2.5 0 0 0 7 19h1v-6H7a2.5 2.5 0 0 0-2.5 2.5zM19.5 13v3.5A2.5 2.5 0 0 1 17 19h-1v-6h1a2.5 2.5 0 0 1 2.5 2.5z" />
      <path d="M4.5 13a7.5 7.5 0 0 1 15 0" />
    </svg>
  )
}

export function IconCoffee(props: IconProps) {
  return (
    <svg {...base(props)}>
      <path d="M5 8h11v6.5A4.5 4.5 0 0 1 11.5 19h-1A4.5 4.5 0 0 1 6 14.5V8z" />
      <path d="M16 9h2.2A2.8 2.8 0 0 1 21 11.8 2.8 2.8 0 0 1 18.2 14.5H16M7 4.5c.6.8.6 1.4 0 2.2M10.5 4.5c.6.8.6 1.4 0 2.2" />
    </svg>
  )
}

export function IconBook(props: IconProps) {
  return (
    <svg {...base(props)}>
      <path d="M5 5.5A2.5 2.5 0 0 1 7.5 3H19v16H7.5A2.5 2.5 0 0 0 5 21.5z" />
      <path d="M5 5.5A2.5 2.5 0 0 1 7.5 8H19" />
    </svg>
  )
}

export function IconDrop(props: IconProps) {
  return (
    <svg {...base(props)}>
      <path d="M12 3.5s6 6.2 6 10a6 6 0 0 1-12 0c0-3.8 6-10 6-10z" />
    </svg>
  )
}

export function IconGlasses(props: IconProps) {
  return (
    <svg {...base(props)}>
      <circle cx="7.5" cy="13" r="3.2" />
      <circle cx="16.5" cy="13" r="3.2" />
      <path d="M10.7 13h2.6M4.3 12.2 3 9.5M19.7 12.2 21 9.5" />
    </svg>
  )
}

export function IconCap(props: IconProps) {
  return (
    <svg {...base(props)}>
      <path d="M4 14c2.2-4 4.2-6 8-6s5.8 2 8 6" />
      <path d="M3 14.5h18M8 14c.4 2 1.8 3.2 4 3.2s3.6-1.2 4-3.2" />
    </svg>
  )
}

export function IconShirt(props: IconProps) {
  return (
    <svg {...base(props)}>
      <path d="M8 5.5 12 8l4-2.5 4 2.5-2 3.2V20H6V11.2L4 8z" />
    </svg>
  )
}

export function IconStar(props: IconProps) {
  return (
    <svg {...base(props)}>
      <path d="m12 3.8 2.1 4.6 5 .6-3.7 3.4.9 5-4.3-2.4-4.3 2.4.9-5L4.9 9l5-.6z" />
    </svg>
  )
}

export function IconPalette(props: IconProps) {
  return (
    <svg {...base(props)}>
      <path d="M12 4a8 8 0 1 0 0 16h1.2a2 2 0 0 0 0-4H12a2 2 0 0 1 0-4 8 8 0 0 0 0-8z" />
      <circle cx="8" cy="10" r="1" fill="currentColor" stroke="none" />
      <circle cx="10" cy="7.2" r="1" fill="currentColor" stroke="none" />
      <circle cx="14" cy="7.4" r="1" fill="currentColor" stroke="none" />
    </svg>
  )
}

export function IconInfo(props: IconProps) {
  return (
    <svg {...base(props)}>
      <circle cx="12" cy="12" r="8" />
      <path d="M12 11v5M12 8h.01" />
    </svg>
  )
}
