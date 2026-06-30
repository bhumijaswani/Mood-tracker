const STORAGE_KEY = "mindcare_checkins"

export function getAllCheckIns() {
  const data = localStorage.getItem(STORAGE_KEY)
  return data ? JSON.parse(data) : []
}

export function saveCheckIn(newCheckIn) {
  const existing = getAllCheckIns()
  const updated = [...existing, { ...newCheckIn, date: new Date().toISOString() }]
  localStorage.setItem(STORAGE_KEY, JSON.stringify(updated))
}
export function getStreak(checkIns) {
  if (checkIns.length === 0) return 0

  let streak = 0
  const today = new Date()

  for (let i = 0; i < 30; i++) {
    const date = new Date(today)
    date.setDate(today.getDate() - i)
    const dateStr = date.toDateString()

    const found = checkIns.find(c =>
      new Date(c.date).toDateString() === dateStr
    )
    if (found) streak++
    else break
  }
  return streak
}