import { useState } from "react"
import data from "./data.json"
import Header from "./components/Header"
import arrow from "./assets/icon-source.svg"

export default function App() {
  // We never use the setPlanets function so you can remove it
  const [planets] = useState(data)
  const [value, setValue] = useState(0)
  const [view, setView] = useState(true)
  const [internal, setInternal] = useState(false)
  const [geo, setGeo] = useState(false)

  const {
    name,
    overview,
    structure,
    geology,
    rotation,
    revolution,
    radius,
    temperature,
    images,
  } = planets[value]

  const handleShowOverview = () => {
    setView(true)
    setInternal(false)
    setGeo(false)
  }

  const handleShowInternal = () => {
    setView(false)
    setInternal(true)
    setGeo(false)
  }

  const handleShowGeology = () => {
    setView(false)
    setInternal(false)
    setGeo(true)
  }

  return (
    <>
      <section className="text-white">
        <Header setValue={setValue} />

        <div className="p-5 grid grid-cols-1 gap-8 md:grid-cols-2 md:gap-12 lg:gap-36 max-w-6xl mx-auto pt-20 text-center md:text-left">
          <article>
            {view && (
              <img
                src={images.planet}
                alt={name}
                className="planets block mx-auto md:inline"
              />
            )}

            {/* Change images depending on the overview, structure or geology */}
            {internal && (
              <img
                src={images.internal}
                alt={name}
                className="planets block mx-auto md:inline"
              />
            )}

            {geo && (
              <img
                src={images.geology}
                alt={name}
                className="planets block mx-auto md:inline"
              />
            )}
          </article>

          {/* Overview */}
          {/* Refactor this into a different component and use props / context to reference state values */}
          {view && (
            <article>
              <h1 className="oswald font-bold text-5xl mb-8 uppercase tracking-wider">
                {name}
              </h1>
              <p className="mb-8">{overview.content}</p>
              <p className="flex items-center justify-center md:justify-start">
                Source:{" "}
                <a
                  href={overview.source}
                  target="_blank"
                  rel="noreferrer"
                  className="text-gray-400 underline hover:text-white transition-all duration-100 flex items-center ml-2"
                >
                  Wikipedia <img src={arrow} alt="" className="ml-2" />
                </a>
              </p>

              <ul className="mt-8">
                <li className="mb-3">
                  <button
                    onClick={handleShowOverview}
                    className={`font-bold tracking-widest bg-transparent border border-gray-700 py-3 px-8 w-full text-white uppercase cursor-pointer transition-all duration-500 ${
                      view && "bg-purple-600"
                    }`}
                  >
                    <span className="text-gray-400 mr-5">01</span>Overview
                  </button>
                </li>
                <li className="mb-3">
                  <button
                    onClick={handleShowInternal}
                    className={`font-bold tracking-widest bg-transparent border border-gray-700 py-3 px-8 w-full text-white uppercase cursor-pointer transition-all duration-500`}
                  >
                    <span className="text-gray-400 mr-5">02</span>Internal
                    Structure
                  </button>
                </li>
                <li>
                  <button
                    onClick={handleShowGeology}
                    className={`font-bold tracking-widest bg-transparent border border-gray-700 py-3 px-8 w-full text-white uppercase cursor-pointer transition-all duration-500`}
                  >
                    <span className="text-gray-400 mr-5">03</span>Surface
                    Geology
                  </button>
                </li>
              </ul>
            </article>
          )}

          {/* Internal Structure */}
          {/* Refactor this into a different component and use props / context to reference state values */}
          {internal && (
            <article>
              <h1 className="oswald font-bold text-5xl mb-8 uppercase tracking-wider">
                {name}
              </h1>
              <p className="mb-8">{structure.content}</p>
              <p>
                Source:{" "}
                <a
                  href={structure.source}
                  target="_blank"
                  rel="noreferrer"
                  className="text-gray-400 underline hover:text-white transition-all duration-100"
                >
                  Wikipedia
                </a>
              </p>
              <ul className="mt-8">
                <li className="mb-3">
                  <button
                    onClick={handleShowOverview}
                    className={`font-bold tracking-widest bg-transparent border border-gray-700 py-3 px-8 w-full text-white uppercase cursor-pointer transition-all duration-500`}
                  >
                    <span className="text-gray-400 mr-5">01</span>Overview
                  </button>
                </li>
                <li className="mb-3">
                  <button
                    onClick={handleShowInternal}
                    className={`font-bold tracking-widest bg-transparent border border-gray-700 py-3 px-8 w-full text-white uppercase cursor-pointer transition-all duration-500 ${
                      internal && "bg-purple-600"
                    }`}
                  >
                    <span className="text-gray-400 mr-5">02</span>Internal
                    Structure
                  </button>
                </li>
                <li>
                  <button
                    onClick={handleShowGeology}
                    className={`font-bold tracking-widest bg-transparent border border-gray-700 py-3 px-8 w-full text-white uppercase cursor-pointer transition-all duration-500`}
                  >
                    <span className="text-gray-400 mr-5">03</span>Surface
                    Geology
                  </button>
                </li>
              </ul>
            </article>
          )}

          {/* Geology */}
          {/* Refactor this into a different component and use props / context to reference state values */}
          {geo && (
            <article>
              <h1 className="oswald font-bold text-5xl mb-8 uppercase tracking-wider">
                {name}
              </h1>
              <p className="mb-8">{geology.content}</p>
              <p>
                Source:{" "}
                <a
                  href={geology.source}
                  target="_blank"
                  rel="noreferrer"
                  className="text-gray-400 underline hover:text-white transition-all duration-100"
                >
                  Wikipedia
                </a>
              </p>
              <ul className="mt-8">
                <li className="mb-3">
                  <button
                    onClick={handleShowOverview}
                    className={`font-bold tracking-widest bg-transparent border border-gray-700 py-3 px-8 w-full text-white uppercase cursor-pointer transition-all duration-500`}
                  >
                    <span className="text-gray-400 mr-5">01</span>Overview
                  </button>
                </li>
                <li className="mb-3">
                  <button
                    onClick={handleShowInternal}
                    className={`font-bold tracking-widest bg-transparent border border-gray-700 py-3 px-8 w-full text-white uppercase cursor-pointer transition-all duration-500`}
                  >
                    <span className="text-gray-400 mr-5">02</span>Internal
                    Structure
                  </button>
                </li>
                <li>
                  <button
                    onClick={handleShowGeology}
                    className={`font-bold tracking-widest bg-transparent border border-gray-700 py-3 px-8 w-full text-white uppercase cursor-pointer transition-all duration-500 ${
                      geo && "bg-purple-600"
                    }`}
                  >
                    <span className="text-gray-400 mr-5">03</span>Surface
                    Geology
                  </button>
                </li>
              </ul>
            </article>
          )}
        </div>

        <div className="max-w-6xl mx-auto grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-4 pb-20 pt-10 px-5 text-center md:text-left">
          <article className="border border-slate-700 p-5">
            <h3 className="uppercase text-slate-500 tracking-widest mb-3">
              Rotation Time
            </h3>
            <h2 className="oswald uppercase font-bold text-4xl text-white tracking-wide">
              {rotation}
            </h2>
          </article>

          <article className="border border-slate-700 p-5">
            <h3 className="uppercase text-slate-500 tracking-widest mb-3">
              Revolution Time
            </h3>
            <h2 className="oswald uppercase font-bold text-4xl text-white tracking-wide">
              {revolution}
            </h2>
          </article>

          <article className="border border-slate-700 p-5">
            <h3 className="uppercase text-slate-500 tracking-widest mb-3">
              Radius
            </h3>
            <h2 className="oswald uppercase font-bold text-4xl text-white tracking-wide">
              {radius}
            </h2>
          </article>

          <article className="border border-slate-700 p-5">
            <h3 className="uppercase text-slate-500 tracking-widest mb-3">
              Average Temp
            </h3>
            <h2 className="oswald uppercase font-bold text-4xl text-white tracking-wide">
              {temperature}
            </h2>
          </article>
        </div>
      </section>
    </>
  )
}
