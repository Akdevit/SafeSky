import { configureStore } from "@reduxjs/toolkit";
import WeatherApiSlice from "./redux/WeatherApiSlice";
import WeatherForcastSlice from "./redux/WeatherForcastSlice";
import pollustionSlice from "./redux/Pollustion";
import inputSlice from "./redux/Searchvalue";
export const store = configureStore({
  reducer: {
    weather: WeatherApiSlice,
    weatherforcast: WeatherForcastSlice,
    pollustion: pollustionSlice,
    input: inputSlice
  },
});
