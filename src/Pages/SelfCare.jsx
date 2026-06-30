const suggestions = {
  happy: [
    { emoji: "🎨", title: "Creative time",     desc: "Channel your energy into art, music, or writing."   },
    { emoji: "🚶", title: "Go for a walk",     desc: "Enjoy the outdoors and soak in the good vibes."     },
    { emoji: "💌", title: "Spread kindness",   desc: "Text someone you love and brighten their day."      },
  ],
  calm: [
    { emoji: "📖", title: "Read a book",       desc: "Deepen the calm with something you enjoy reading."  },
    { emoji: "🧘", title: "Meditate",          desc: "5 minutes of mindfulness to stay grounded."         },
    { emoji: "🌿", title: "Nature time",       desc: "Sit near a plant or window and breathe slowly."     },
  ],
  okay: [
    { emoji: "💧", title: "Drink water",       desc: "Hydration helps more than you think!"               },
    { emoji: "🎵", title: "Listen to music",   desc: "Put on your favourite playlist and relax."          },
    { emoji: "📝", title: "Journal",           desc: "Write down 3 things you are grateful for today."   },
  ],
  sad: [
    { emoji: "🫂", title: "Talk to someone",   desc: "Share how you feel with a friend or family."        },
    { emoji: "🛌", title: "Rest well",         desc: "Give yourself permission to rest today."            },
    { emoji: "🍵", title: "Warm drink",        desc: "Make yourself a warm tea or coffee and breathe."   },
  ],
  stressed: [
    { emoji: "🌬️", title: "Box breathing",    desc: "Inhale 4s → Hold 4s → Exhale 4s → Hold 4s."       },
    { emoji: "🚶", title: "Short walk",        desc: "Even 10 minutes outside reduces stress hormones."  },
    { emoji: "📵", title: "Screen break",      desc: "Step away from screens for 20 minutes."            },
  ],
}

import { getAllCheckIns } from '../utils/storage'

function SelfCare() {
  const checkIns = getAllCheckIns()
  const latest = checkIns[checkIns.length - 1]
  const mood = latest?.mood || null
  const cards = mood ? suggestions[mood] : null

  return (
    <div className="min-h-screen bg-purple-50 p-8">

      <div className="mb-6">
        <h1 className="text-4xl font-semibold text-green-700">Self-Care 🌸</h1>
        <p className="text-3xl text-black-400 mt-1">Personalised suggestions based on your latest mood</p>
      </div>

      {!mood ? (
        <div className="flex flex-col items-center justify-center mt-20 gap-3">
          <span className="text-6xl">🌱</span>
          <p className="text-gray-400 text-3xl">No check-in found.</p>
          <p className="text-gray-400 text-3xl">Complete a check-in first to get suggestions!</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-6xl">
          {cards.map((card, index) => (
            <div key={index} className="rounded-3xl p-6 border border-black-100 bg-orange-100 shadow-sm flex flex-col gap-3">
              <span className="text-5xl">{card.emoji}</span>
              <h3 className="text-3xl font-semibold text-black-700">{card.title}</h3>
              <p className="text-2xl text-black-400 leading-relaxed">{card.desc}</p>
            </div>
          ))}
        </div>
      )}

    </div>
  )
}

export default SelfCare