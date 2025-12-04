let random = randint(1, 4)
if (random == 1) {
    weather.setWeather(weather.WeatherType.Rain)
    pause(5000)
    game.reset()
} else if (random == 2) {
    weather.setWeather(weather.WeatherType.HeavyRain)
    pause(5000)
    game.reset()
} else if (random == 3) {
    weather.setWeather(weather.WeatherType.Snow)
    pause(5000)
    game.reset()
} else {
    weather.setWeather(weather.WeatherType.Wind)
    pause(5000)
    game.reset()
}
