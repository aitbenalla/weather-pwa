import './App.css';
import {useState} from "react";
import {fetchWeather} from "./fetchWeather";

function App() {

    const [query, setQuery] = useState('')
    const [weather, setWeather] = useState({})

    const search = async (e) => {
        if (e.key === 'Enter') {
            const data = await fetchWeather(query)
            setWeather(data)
            setQuery('')
        }
    }

    return (
        <div className="container mx-auto mt-32">
            <h1 className="text-white text-4xl text-center font-bold mb-6">Weather PWA</h1>
            <div className="grid grid-cols-1 gap-4 place-items-center">
                <div>
                    <input
                        className="border rounded h-10 p-2 w-80 focus:outline-none"
                        type="text" placeholder="City or Country" value={query}
                        onChange={(e) => setQuery(e.target.value)}
                        onKeyPress={search} aria-label="Full name"/>
                </div>
                {weather.main && (
                <div>
                    <div className="max-w-sm rounded-2xl shadow-2xl text-center bg-white bg-opacity-50">
                        <div className="p-20">
                            <div className="font-bold text-3xl mb-8">
                                <h1>
                                    {weather.name}
                                    <sup
                                        className="text-white bg-amber-500 p-1 rounded ml-1">{weather.sys.country}</sup>
                                </h1>
                            </div>
                            <div>
                                <h2 className="font-bold text-4xl">
                                    {Math.round(weather.main.temp)}
                                    <sup>&deg;C</sup>
                                </h2>
                                <p>
                                    <img className="mx-8"
                                         src={`http://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`}
                                         alt={weather.weather[0].description}/>
                                </p>
                                <p className="text-base uppercase">
                                    {weather.weather[0].description}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                )}
            </div>
        </div>
    );
}

export default App;
