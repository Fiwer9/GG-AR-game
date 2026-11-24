export type PointStatus = "available" | "done" | "closed" | "pending"

export type GamePoint = {
  id: string
  title: string
  place: string
  reward: number
  status: PointStatus
  statusLabel: string
}

export type ActivityStat = {
  id: string
  label: string
  value: string
}

export type Goal = {
  title: string
  price: number
  saved: number
  hint: string
} | null

export type HomeSnapshot = {
  dateLabel: string
  greeting: string
  name: string
  lead: string
  balance: number
  visit: {
    ok: boolean
    title: string
    when: string
    note: string
  }
  pointsTitle: string
  pointsHint: string
  points: GamePoint[]
  goal: Goal
  activity: ActivityStat[]
}

export type Purchase = {
  id: string
  title: string
  received: string
  source: string
  tone: "pink" | "peach" | "lilac" | "mint"
  icon: "shirt" | "coffee" | "star" | "book"
}

export type Cosmetic = {
  id: string
  title: string
  tone: "pink" | "lilac" | "gray" | "peach" | "cream" | "mint"
  icon: "cap" | "glasses" | "headphones" | "palette" | "star" | "shirt"
  owned: boolean
}

export const user = {
  initials: "AC",
  shortName: "Анна Смирнова",
  fullName: "Смирнова Анна Сергеевна",
  role: "Отдел аналитики",
  division: "Департамент данных",
  office: "Офис «Москва-Сити», башня Восток",
  inOffice: true,
  coins: 1240,
  coinsUpdated: "обновлено сейчас",
}

export const profileStats = {
  period: "Период: за всё время участия · с 1 сентября 2026",
  items: [
    { label: "Всего заработано", value: "4 860", note: "за всё время", coin: true },
    { label: "Выполнено заданий", value: "198", note: "за всё время", coin: false },
    {
      label: "Дней игровой активности",
      value: "46",
      note: "всего активных дней с 01.09 (не сбрасывается)",
      coin: false,
    },
    { label: "Дней активности", value: "4 / 5", note: "текущая неделя", coin: false },
  ],
}

export const purchases: Purchase[] = [
  {
    id: "hoodie",
    title: "Худи «Альфа-коины»",
    received: "Получено 02.11.2026",
    source: "Покупка",
    tone: "pink",
    icon: "shirt",
  },
  {
    id: "mug",
    title: "Кружка-термос",
    received: "Получено 24.10.2026",
    source: "Покупка",
    tone: "peach",
    icon: "coffee",
  },
  {
    id: "tickets",
    title: "Билет в кино ×2",
    received: "Получено 15.10.2026",
    source: "Колесо фортуны",
    tone: "lilac",
    icon: "star",
  },
  {
    id: "book",
    title: "Книга «Код»",
    received: "Получено 01.10.2026",
    source: "Награда за достижение",
    tone: "mint",
    icon: "book",
  },
]

export const cosmetics: Cosmetic[] = [
  { id: "cap", title: "Кепка", tone: "pink", icon: "cap", owned: true },
  { id: "glasses", title: "Очки", tone: "lilac", icon: "glasses", owned: true },
  { id: "headphones", title: "Наушники", tone: "gray", icon: "headphones", owned: true },
  { id: "sunset", title: "Палитра «Закат»", tone: "peach", icon: "palette", owned: true },
  { id: "star-bg", title: "Звёздный фон", tone: "cream", icon: "star", owned: false },
  { id: "hoodie", title: "Худи", tone: "mint", icon: "shirt", owned: false },
]

const points: GamePoint[] = [
  {
    id: "coffee",
    title: "Кофе-поинт «Север»",
    place: "3 этаж · у лифтов, рядом с кофемашиной",
    reward: 20,
    status: "available",
    statusLabel: "Доступна",
  },
  {
    id: "library",
    title: "Библиотека",
    place: "5 этаж · переговорная «Книга», стеллаж справа",
    reward: 30,
    status: "available",
    statusLabel: "Доступна",
  },
  {
    id: "lounge",
    title: "Зона отдыха",
    place: "2 этаж · за ресепшеном, у дивана",
    reward: 15,
    status: "done",
    statusLabel: "Выполнено сегодня",
  },
  {
    id: "gym",
    title: "Спортзал",
    place: "−1 этаж · вход с лестницы Б",
    reward: 25,
    status: "closed",
    statusLabel: "Откроется в 18:00",
  },
]

export const homeInOffice: HomeSnapshot = {
  dateLabel: "Понедельник, 9 ноября",
  greeting: "Добрый день,",
  name: "Анна!",
  lead: "Выполняйте игровые задания на точках офиса и получайте Альфа-коины. Обменивайте их на награды в магазине.",
  balance: 1240,
  visit: {
    ok: true,
    title: "Посещение зарегистрировано",
    when: "9 ноября · отмечено в 09:12",
    note: "Игровые точки и колесо фортуны доступны, пока вы в офисе.",
  },
  pointsTitle: "Игровые точки · 4 в офисе",
  pointsHint: "Выберите точку и отсканируйте QR-код на месте",
  points,
  goal: {
    title: "Беспроводные наушники",
    price: 2000,
    saved: 1240,
    hint: "Осталось 760 коинов — это ≈ 31 задание или ~8 дней активности",
  },
  activity: [
    { id: "tasks", label: "Заданий сегодня", value: "3" },
    { id: "earned", label: "Заработано сегодня", value: "+65" },
    { id: "days", label: "Дней активности на неделе", value: "4 из 5" },
  ],
}

export const homeAway: HomeSnapshot = {
  dateLabel: "Понедельник, 9 ноября",
  greeting: "Добрый день,",
  name: "Анна!",
  lead: "Выполняйте игровые задания на точках офиса и получайте Альфа-коины. Обменивайте их на награды в магазине.",
  balance: 1240,
  visit: {
    ok: false,
    title: "Посещение не зарегистрировано",
    when: "9 ноября",
    note: "Чтобы отметиться, отсканируйте QR-код на ресепшене или приложите пропуск к турникету.",
  },
  pointsTitle: "Игровые точки · 4 в офисе",
  pointsHint: "Выберите точку и отсканируйте QR-код на месте",
  points: points.map((point) => ({
    ...point,
    status: "pending" as const,
    statusLabel: "Отметьте посещение",
  })),
  goal: null,
  activity: [
    { id: "tasks", label: "Заданий сегодня", value: "0" },
    { id: "earned", label: "Заработано сегодня", value: "+0" },
    { id: "days", label: "Дней активности на неделе", value: "1 из 5" },
  ],
}

export function formatCoins(value: number) {
  return new Intl.NumberFormat("ru-RU").format(value)
}
