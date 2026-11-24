import { Link, useParams } from "react-router-dom"
import { homeInOffice } from "../data/mock"

export function StubPage({ title, text }: { title: string; text: string }) {
  return (
    <div className="page">
      <section className="card stub">
        <p className="eyebrow">Заглушка</p>
        <h1>{title}</h1>
        <p>{text}</p>
        <Link className="btn btn-red" to="/">
          На главную
        </Link>
      </section>
    </div>
  )
}

export function ScanPage() {
  const { pointId } = useParams()
  const point = homeInOffice.points.find((item) => item.id === pointId)

  return (
    <div className="page">
      <section className="card stub scan">
        <p className="eyebrow">Сканирование QR</p>
        <h1>{point ? point.title : "Точка не найдена"}</h1>
        <p>
          {point
            ? `${point.place}. Награда +${point.reward} коинов. Камера и проверка кода появятся вместе с бэкендом.`
            : "Такой игровой точки нет в текущих данных."}
        </p>
        <div className="qr-frame" aria-hidden="true">
          <span />
        </div>
        <div className="stub-actions">
          <Link className="btn btn-ghost" to="/">
            Закрыть
          </Link>
          <Link className="btn btn-red" to="/">
            Готово
          </Link>
        </div>
      </section>
    </div>
  )
}
