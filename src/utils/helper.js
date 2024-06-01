

export function filterData(searchTxt, allRestaurants) {
  const filterData = allRestaurants.filter((restaurant) => {
    return restaurant?.info?.name
      ?.toLowerCase()
      .includes(searchTxt.toLowerCase());
  });
  return filterData;
}
// export const toggleTheme = () => {
//   const [theme, setTheme] = useState("light");
//   if (theme === "light") {
//     setTheme("dark");
//   } else {
//     setTheme("light");
//   }
//   return {theme,setTheme};
// };

