import { useState } from 'react'
import { Link } from 'react-router-dom'
import { getAllCheckIns } from '../../utils/storage'
import { generateNotifications } from '../../utils/notifications'
import NotificationBell from '../Notifications/NotificationBell'
import NotificationPanel from '../Notifications/NotificationPanel'

function Header() {
  const [isOpen, setIsOpen] = useState(false)

  const checkIns = getAllCheckIns()
  const notifications = generateNotifications(checkIns)

  function togglePanel() {
    setIsOpen(!isOpen)
  }

  return (
    <div className="relative flex justify-between items-center px-16 py-8 bg-purple-50 border-b border-gray-200">

      <div className='text-center'>
        <h1 className="text-5xl font-semibold text-green-500">MindCare</h1>
        <p className="text-4xl text-black-400">Check In. Understand. Heal.</p>
      </div>

      <nav className="flex gap-10 text-base font-medium text-black-500 items-center">
        <Link to="/" className="hover:text-green-600 text-3xl">Home</Link>
        <Link to="/history" className="hover:text-green-600 text-3xl">History</Link>
        <Link to="/insights" className="hover:text-green-600 text-3xl">Insights</Link>
        <Link to="/selfcare" className="hover:text-green-600 text-3xl">Self-Care</Link>

        <NotificationBell
          count={notifications.length}
          onClick={togglePanel}
        />
      </nav>

      {isOpen && (
        <NotificationPanel
          notifications={notifications}
          onClose={() => setIsOpen(false)}
        />
      )}

    </div>
  )
}
export default Header