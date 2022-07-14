import { useState } from "react"
import { v4 as uuidv4 } from "uuid"

// Required to create tab indices
const links = [
  {
    id: uuidv4(),
    title: "Mercury",
  },
  {
    id: uuidv4(),
    title: "Venus",
  },
  {
    id: uuidv4(),
    title: "Earth",
  },
  {
    id: uuidv4(),
    title: "Mars",
  },
  {
    id: uuidv4(),
    title: "Jupiter",
  },
  {
    id: uuidv4(),
    title: "Saturn",
  },
  {
    id: uuidv4(),
    title: "Uranus",
  },
  {
    id: uuidv4(),
    title: "Neptune",
  },
]

export default function Header({ setValue }) {
  const [isOpen, setIsOpen] = useState(false)

  // Close mobile navbar and go to homepage when you click on the logo
  const handleLogoClick = () => {
    setValue(0)
    setIsOpen(false)
  }

  // Close mobile navbar and go to corresponding page
  const handleLinkClick = (index) => {
    if (isOpen) setIsOpen(false)
    setValue(index)
  }

  return (
    <>
      <header className="flex items-center justify-between text-white border-b border-white p-5">
        <div
          onClick={handleLogoClick}
          className="oswald font-bold uppercase tracking-wider hover:opacity-75 transition-all duration-200 cursor-pointer"
        >
          The planets
        </div>

        <nav className={`${isOpen && "open"}`}>
          <ul className="flex flex-col items-center justify-around oswald lg:flex-row">
            {links.map((link, index) => (
              <li key={link.id}>
                <button
                  onClick={() => handleLinkClick(index)}
                  className="uppercase tracking-wide"
                >
                  {link.title}
                </button>
              </li>
            ))}
          </ul>
        </nav>

        <button
          onClick={() => setIsOpen(!isOpen)}
          className="uppercase tracking-widest text-sm font-semibold lg:hidden"
        >
          {isOpen ? "Close" : "Menu"}
        </button>
      </header>
    </>
  )
}
