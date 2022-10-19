import React, { useRef } from "react";
import SvgComponent from "./SvgComponent"; // Компонент для SVG картинок
import { useDispatch, useSelector } from "react-redux"; // Хуки редакса
import { setSearch } from "../store/appSlice"; // Редюсер для изменения значения строки поиска
import { showSearchResult, clearSearchResult } from "../store/usersSlice"; // Редюсер для изменения массива результатов поиска

export default function InputSearch() {
  const dispatch = useDispatch();
  const usersLength = useSelector((state) => state.users.users.length); // длинна  массива пользователей
  const search = useSelector((state) => state.app.search); // Значение строки поиска
  const total = useSelector((state) => state.app.total); // Колличестов пользователей
  const debounceRef = useRef(); // Значение таймкера для задержки выполнения поиска при изменении значения в инпуте

  // Функция задержки выполнения поиска при вводе в строку поиска
  function debunceSearch(value) {
    if (debounceRef.current) {
      clearTimeout(debounceRef.current);
    }
    debounceRef.current = setTimeout(() => {
      if (value.length > 2) {
        dispatch(showSearchResult({ targetString: value }));
      }
    }, 500);
  }

  // Функция изменяет значение строки поиска и запускает поиск по массиву рользователей
  function inputSearch(e) {
    dispatch(setSearch({ searchString: e.target.value }));
    debunceSearch(e.target.value);
  }

  // Функция очищаетстроку поиска
  function deletTextSearch() {
    dispatch(setSearch({ searchString: "" }));
    dispatch(clearSearchResult());
  }

  let out = (
    <div
      className={`relative w-full max-w-[35%] ${
        usersLength < total && "hidden"
      }`}
    >
      <div className="absolute w-4 h-4 top-2 left-2 cursor-pointer">
        <SvgComponent name="search" />
      </div>
      <input
        type="text"
        placeholder="Поиск..."
        className="input  input-sm input-bordered indent-[20px] w-full"
        value={search}
        onChange={inputSearch}
      />
      <div
        className="absolute w-3 h-3 top-[6px] right-[10px] cursor-pointer"
        onClick={deletTextSearch}
      >
        <SvgComponent name="close" />
      </div>
    </div>
  );

  return out;
}
