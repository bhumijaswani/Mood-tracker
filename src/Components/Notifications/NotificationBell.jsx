function NotificationBell({ count, onClick }) {
  return (
    <button
      onClick={onClick}
      className="relative p-2 rounded-full hover:bg-green-50 transition-all"
    >
      <span className="text-6xl">🔔</span>

      {count > 0 && (
        <span className="absolute top-0 right-0 w-5 h-5 bg-red-500 text-white text-3xl font-bold rounded-full flex items-center justify-center">
          {count}
        </span>
      )}
    </button>
  )
}

export default NotificationBell