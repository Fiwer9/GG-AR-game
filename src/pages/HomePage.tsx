import { Link } from "react-router-dom"
import type { GamePoint, HomeSnapshot } from "../data/mock"
import { formatCoins } from "../data/mock"
import {
  IconBook,
  IconCalendar,
  IconCheck,
  IconCoffee,
  IconCoin,
  IconDrop,
  IconHeadphones,
  IconInfo,
  IconLock,
  IconPin,
  IconQr,
  IconTarget,
  IconTasks,
} from "../icons"

const pointIcons = {
  coffee: IconCoffee,
  library: IconBook,
  lounge: IconHeadphones,
  gym: IconDrop,
}

export function HomePage({ data }: { data: HomeSnapshot }) {
  const progress = data.goal ? Math.round((data.goal.saved / data.goal.price) * 100) : 0

  return (
    <div className="page home-page">
      <p className="page-date">{data.dateLabel}</p>
      <div className="home-top">
        <section className="hero">
          <div>
            <p>{data.greeting}</p>
            <h1>{data.name}</h1>
            <p className="hero-lead">{data.lead}</p>
          </div>
          <div className="hero-balance">
            <span>Ваш баланс</span>
            <strong>
              <IconCoin />
              {formatCoins(data.balance)}
            </strong>
            <em>Альфа-коинов</em>
          </div>
        </section>
        <section className={data.visit.ok ? "visit visit-ok" : "visit"}>
          <div className={data.visit.ok ? "visit-icon ok" : "visit-icon"}>
            {data.visit.ok ? <IconCheck /> : <IconCalendar />}
          </div>
          <div>
            <h2>{data.visit.title}</h2>
            <p>{data.visit.when}</p>
            <p className="visit-note">
              <IconInfo />
              {data.visit.note}
            </p>
          </div>
        </section>
      </div>

      <div className="home-grid">
        <section className="card">
          <header className="card-head">
            <h2>{data.pointsTitle}</h2>
            <p>{data.pointsHint}</p>
          </header>
          <ul className="points">
            {data.points.map((point) => (
              <PointRow key={point.id} point={point} />
            ))}
          </ul>
        </section>

        <div className="side-stack">
          <section className="card">
            <header className="card-head split">
              <h2>Моя цель</h2>
              {data.goal ? (
                <Link to="/shop">Изменить ›</Link>
              ) : null}
            </header>
            {data.goal ? (
              <div className="goal">
                <div className="goal-icon">
                  <IconHeadphones />
                </div>
                <div>
                  <strong>{data.goal.title}</strong>
                  <span>
                    <IconCoin /> {formatCoins(data.goal.price)}
                  </span>
                </div>
                <div className="progress-meta">
                  <span>
                    {formatCoins(data.goal.saved)} из {formatCoins(data.goal.price)}
                  </span>
                  <span>{progress}%</span>
                </div>
                <div className="progress" aria-hidden="true">
                  <span style={{ width: `${progress}%` }} />
                </div>
                <p>{data.goal.hint}</p>
              </div>
            ) : (
              <div className="goal goal-empty">
                <div className="goal-icon empty">
                  <IconTarget />
                </div>
                <strong>Цель ещё не выбрана</strong>
                <p>Выберите награду в магазине — мы покажем, сколько осталось накопить</p>
                <Link className="btn btn-red" to="/shop">
                  Выбрать награду
                </Link>
              </div>
            )}
          </section>

          <section className="card">
            <header className="card-head split">
              <h2>Моя активность</h2>
              <Link to="/activity">Подробнее ›</Link>
            </header>
            <ul className="activity">
              {data.activity.map((item) => (
                <li key={item.id}>
                  <span className={`activity-icon ${item.id}`}>
                    {item.id === "tasks" ? <IconTasks /> : null}
                    {item.id === "earned" ? <IconCoin /> : null}
                    {item.id === "days" ? <IconCalendar /> : null}
                  </span>
                  <span>{item.label}</span>
                  <strong>{item.value}</strong>
                </li>
              ))}
            </ul>
          </section>
        </div>
      </div>
    </div>
  )
}

function PointRow({ point }: { point: GamePoint }) {
  const Icon = pointIcons[point.id as keyof typeof pointIcons] ?? IconPin

  return (
    <li className={`point point-${point.status} point-${point.id}`}>
      <span className="point-icon">
        <Icon />
      </span>
      <div className="point-copy">
        <div className="point-title">
          <strong>{point.title}</strong>
          <em>{point.statusLabel}</em>
        </div>
        <p>
          <IconPin />
          {point.place}
        </p>
      </div>
      <div className="reward">
        <span>Награда</span>
        <strong>
          <IconCoin />+{point.reward}
        </strong>
      </div>
      {point.status === "available" ? (
        <Link className="btn btn-red" to={`/scan/${point.id}`}>
          <IconQr /> Сканировать QR
        </Link>
      ) : (
        <button className="btn btn-muted" type="button" disabled>
          {point.status === "done" ? <IconCheck /> : <IconLock />}
          {point.status === "done" ? "Выполнено" : "Недоступно"}
        </button>
      )}
    </li>
  )
}
