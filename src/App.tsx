import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom"
import { Layout } from "./components/Layout"
import { homeAway, homeInOffice } from "./data/mock"
import { HomePage } from "./pages/HomePage"
import { ProfilePage } from "./pages/ProfilePage"
import { ScanPage, StubPage } from "./pages/StubPage"
import { AppStateProvider } from "./state"

export default function App() {
  return (
    <AppStateProvider>
      <BrowserRouter>
        <Routes>
          <Route element={<Layout />}>
            <Route index element={<HomePage data={homeInOffice} />} />
            <Route path="main-not-in-office" element={<HomePage data={homeAway} />} />
            <Route path="profile" element={<ProfilePage tab="purchases" />} />
            <Route path="profile-customization" element={<ProfilePage tab="customize" />} />
            <Route path="scan/:pointId" element={<ScanPage />} />
            <Route
              path="shop"
              element={
                <StubPage
                  title="Магазин"
                  text="Каталог наград, подтверждение покупки и награды за достижения ещё не сверстаны. Кнопки «Выбрать награду», «Изменить» и «В магазине» ведут сюда."
                />
              }
            />
            <Route
              path="leaderboard"
              element={
                <StubPage
                  title="Таблица лидеров"
                  text="Рейтинг за неделю, месяц и всё время появится отдельными экранами. Сейчас это заглушка."
                />
              }
            />
            <Route
              path="wheel"
              element={
                <StubPage
                  title="Колесо фортуны"
                  text="Вращение, результат, нехватка коинов и экран «вне офиса» будут отдельными состояниями. Сейчас колесо недоступно."
                />
              }
            />
            <Route
              path="activity"
              element={
                <StubPage
                  title="Моя активность"
                  text="Подробная статистика за день и неделю будет приходить с бэкенда. На главной уже показаны сегодняшние числа."
                />
              }
            />
            <Route
              path="notifications"
              element={
                <StubPage
                  title="Уведомления"
                  text="Лента уведомлений пока пустая: сервер ещё не присылает события."
                />
              }
            />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </AppStateProvider>
  )
}
