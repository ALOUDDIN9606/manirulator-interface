
export const fetchData = async () => {
  const response = await fetch("https://api.example.com");
  return response.json();
};
