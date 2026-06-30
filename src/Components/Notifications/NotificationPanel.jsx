const typeStyles = {
  reminder: "bg-blue-50 border-blue-200 text-blue-700",
  warning:  "bg-red-50 border-red-200 text-red-700",
  success:  "bg-green-50 border-green-200 text-green-700",
}

function NotificationPanel({ notifications, onClose }) {
  return (
    <div className="absolute right-8 top-16 w-80 bg-white rounded-3xl shadow-lg border border-gray-100 p-4 flex flex-col gap-3 z-50">

      <div className="flex justify-between items-center mb-1">
        <p className="text-3xl font-semibold text-gray-700">Notifications</p>
        <button
          onClick={onClose}
          className="text-xl text-gray-400 hover:text-gray-600"
        >
          close ✕
        </button>
      </div>

      {notifications.length === 0 ? (
        <p className="text-2xl text-gray-400 text-center py-4">
          All caught up! 🌿
        </p>
      ) : (
        notifications.map((notif) => (
          <div
            key={notif.id}
            className={`text-xs px-4 py-3 rounded-2xl border ${typeStyles[notif.type]}`}
          >
            {notif.message}
          </div>
        ))
      )}

    </div>
  )
}

export default NotificationPanel