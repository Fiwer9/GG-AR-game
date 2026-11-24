import { useRef, useState } from "react"
import { Link, NavLink } from "react-router-dom"
import { cosmetics, formatCoins, profileStats, purchases, user, type Cosmetic } from "../data/mock"
import { Avatar } from "../components/Layout"
import {
  IconBell,
  IconBook,
  IconCamera,
  IconCap,
  IconCheck,
  IconCoffee,
  IconCoin,
  IconGlasses,
  IconHeadphones,
  IconLock,
  IconPalette,
  IconShirt,
  IconStar,
} from "../icons"
import { useAppState } from "../state"

const itemIcons = {
  cap: IconCap,
  glasses: IconGlasses,
  headphones: IconHeadphones,
  palette: IconPalette,
  star: IconStar,
  shirt: IconShirt,
  coffee: IconCoffee,
  book: IconBook,
}

export function ProfilePage({ tab }: { tab: "purchases" | "customize" }) {
  const { photoUrl, setPhotoUrl, equippedId, equip, equippedTitle } = useAppState()
  const [photoOpen, setPhotoOpen] = useState(false)

  return (
    <div className="page profile-page">
      <header className="profile-top">
        <div>
          <h1>Профиль</h1>
          <p>Личная информация, баланс и награды</p>
        </div>
        <div className="profile-tools">
          <span className={user.inOffice ? "office-pill on" : "office-pill"}>
            {user.inOffice ? "В офисе" : "Не в офисе"}
          </span>
          <span className="coin-pill">
            <IconCoin /> {formatCoins(user.coins)}
          </span>
          <Link className="icon-btn" to="/notifications" aria-label="Уведомления">
            <IconBell />
          </Link>
        </div>
      </header>

      <div className="profile-hero">
        <section className="card identity">
          <span className="avatar-wrap">
            <Avatar photoUrl={photoUrl} size="lg" />
            <span className="avatar-cam">
              <IconCamera />
            </span>
          </span>
          <div>
            <h2>{user.fullName}</h2>
            <p>
              {user.role} · {user.division}
            </p>
            <p>{user.office}</p>
          </div>
          <button className="btn btn-ghost" type="button" onClick={() => setPhotoOpen(true)}>
            <IconCamera /> Изменить фото
          </button>
        </section>
        <section className="balance-card">
          <span>Доступный баланс</span>
          <strong>
            <IconCoin /> {formatCoins(user.coins)}
          </strong>
          <em>Альфа-коинов · {user.coinsUpdated}</em>
        </section>
      </div>

      <section className="card stats">
        <header className="card-head split">
          <h2>Статистика</h2>
          <p>{profileStats.period}</p>
        </header>
        <div className="stat-grid">
          {profileStats.items.map((item) => (
            <article key={item.label}>
              <span>{item.label}</span>
              <strong>
                {item.coin ? <IconCoin /> : null}
                {item.value}
              </strong>
              <em>{item.note}</em>
            </article>
          ))}
        </div>
      </section>

      <section className="card inventory">
        <h2>Инвентарь</h2>
        <div className="tabs" role="tablist">
          <NavLink to="/profile" end className={({ isActive }) => (isActive ? "tab-btn active" : "tab-btn")} role="tab">
            Мои покупки · {purchases.length}
          </NavLink>
          <NavLink
            to="/profile-customization"
            className={({ isActive }) => (isActive ? "tab-btn active" : "tab-btn")}
            role="tab"
          >
            Кастомизация · {cosmetics.length}
          </NavLink>
        </div>

        {tab === "purchases" ? (
          <div className="purchase-list">
            {purchases.map((item) => {
              const Icon = itemIcons[item.icon]
              return (
                <article key={item.id} className="purchase">
                  <span className={`swatch ${item.tone}`}>
                    <Icon />
                  </span>
                  <div>
                    <strong>{item.title}</strong>
                    <p>{item.received}</p>
                  </div>
                  <em>{item.source}</em>
                </article>
              )
            })}
          </div>
        ) : (
          <div className="cosmetic-grid">
            <article className="character">
              <span className="swatch pink character-face">
                {photoUrl ? <img src={photoUrl} alt="" /> : <b>{user.initials}</b>}
              </span>
              <strong>Мой персонаж</strong>
              <p>Применено: {equippedTitle}</p>
            </article>
            {cosmetics.map((item) => (
              <CosmeticCard
                key={item.id}
                item={item}
                equipped={item.id === equippedId}
                onEquip={() => equip(item.id)}
              />
            ))}
          </div>
        )}
      </section>

      {photoOpen ? (
        <PhotoDialog
          photoUrl={photoUrl}
          onClose={() => setPhotoOpen(false)}
          onSave={setPhotoUrl}
        />
      ) : null}
    </div>
  )
}

function CosmeticCard({
  item,
  equipped,
  onEquip,
}: {
  item: Cosmetic
  equipped: boolean
  onEquip: () => void
}) {
  const Icon = itemIcons[item.icon]
  return (
    <article className={equipped ? "cosmetic selected" : "cosmetic"}>
      <span className={`swatch ${item.tone}`}>
        <Icon />
      </span>
      <strong>{item.title}</strong>
      {item.owned ? (
        equipped ? (
          <button className="btn btn-soft" type="button" disabled>
            <IconCheck /> Применено
          </button>
        ) : (
          <button className="btn btn-red" type="button" onClick={onEquip}>
            Применить
          </button>
        )
      ) : (
        <Link className="btn btn-muted" to="/shop">
          <IconLock /> В магазине
        </Link>
      )}
    </article>
  )
}

function PhotoDialog({
  photoUrl,
  onClose,
  onSave,
}: {
  photoUrl: string | null
  onClose: () => void
  onSave: (url: string | null) => void
}) {
  const inputRef = useRef<HTMLInputElement>(null)
  const [draft, setDraft] = useState<string | null>(photoUrl)
  const [error, setError] = useState("")

  function onFile(file: File | undefined) {
    if (!file) return
    if (!file.type.startsWith("image/")) {
      setError("Нужен файл изображения.")
      return
    }
    const reader = new FileReader()
    reader.onload = () => {
      setDraft(typeof reader.result === "string" ? reader.result : null)
      setError("")
    }
    reader.readAsDataURL(file)
  }

  return (
    <div className="modal-back" role="presentation" onMouseDown={onClose}>
      <div
        className="modal"
        role="dialog"
        aria-modal="true"
        aria-labelledby="photo-title"
        onMouseDown={(event) => event.stopPropagation()}
      >
        <h2 id="photo-title">Изменить фото</h2>
        <p>Сейчас фото хранится только в браузере. Позже его будет отдавать бэкенд.</p>
        <button className="avatar avatar-lg preview" type="button" onClick={() => inputRef.current?.click()}>
          {draft ? <img src={draft} alt="" /> : user.initials}
        </button>
        <input
          ref={inputRef}
          type="file"
          accept="image/*"
          hidden
          onChange={(event) => onFile(event.target.files?.[0])}
        />
        {error ? <p className="form-error">{error}</p> : null}
        <div className="modal-actions">
          <button className="btn btn-ghost" type="button" onClick={() => inputRef.current?.click()}>
            Выбрать файл
          </button>
          <button
            className="btn btn-ghost"
            type="button"
            onClick={() => {
              setDraft(null)
              setError("")
            }}
          >
            Сбросить
          </button>
          <button
            className="btn btn-red"
            type="button"
            onClick={() => {
              onSave(draft)
              onClose()
            }}
          >
            Сохранить
          </button>
        </div>
        <button className="modal-close" type="button" onClick={onClose}>
          Закрыть
        </button>
      </div>
    </div>
  )
}
