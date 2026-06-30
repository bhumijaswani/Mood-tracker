export function generateNotifications(checkIns) {
  const notifications = []

  // 1. aaj ka checkin hai ya nahi
  const today = new Date().toDateString()
  const todayCheckIn = checkIns.find(c =>
    new Date(c.date).toDateString() === today
  )
  if (!todayCheckIn) {
    notifications.push({
      id: 1,
      message: "You haven't completed today's check-in 🔔",
      type: "reminder"
    })
  }

  // 2. last 3 din high stress
  const last3 = checkIns.slice(-3)
  if (last3.length === 3 && last3.every(c => c.stress > 7)) {
    notifications.push({
      id: 2,
      message: "Your stress has been high for 3 consecutive days ⚠️",
      type: "warning"
    })
  }

  // 3. 7 day streak
  if (checkIns.length >= 7) {
    notifications.push({
      id: 3,
      message: "Congratulations! 7-day wellness streak 🎉",
      type: "success"
    })
  }

  // 4. low sleep warning
  const last5 = checkIns.slice(-5)
  if (last5.length === 5 && last5.every(c => c.sleep < 6)) {
    notifications.push({
      id: 4,
      message: "You've been sleeping less than 6 hours. Take care! 😴",
      type: "warning"
    })
  }

  return notifications
}