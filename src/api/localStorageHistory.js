export const saveHistory = (newValue) => {
  const history = getHistory() || [];
  if (!history.includes(newValue)) {
    history.push(newValue)
    localStorage.setItem('search-history', JSON.stringify(history));
  }
};
export const getHistory = () => {
  return JSON.parse(localStorage.getItem('search-history'));
}