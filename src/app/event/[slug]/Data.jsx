const Data = [
  {
    id: "1",
    image: "https://picsum.photos/700/250",
    title: "Festival 3 Days",
    by: "nick",
    date: "jan 05",
    location: "V. Bagrationi Bridge, Tbilisi",
  },
  {
    id: "2",
    image: "https://picsum.photos/700/250",
    title: "Festival 3 Days",
    by: "dsadas",
    date: "jan 05",
    location: "V. Bagrationi Bridge, Tbilisi",
  },
  {
    id: "3",
    image: "https://picsum.photos/700/250",
    title: "Festival 3 Days",
    by: "dsad33232as",
    date: "jan 05",
    location: "V. Bagrationi Bridge, Tbilisi",
  },
  {
    id: "4",
    image: "https://picsum.photos/700/250",
    title: "Festival 3 Days",
    by: "zzzz",
    date: "jan 05",
    location: "V. Bagrationi Bridge, Tbilisi",
  },
  {
    id: "5",
    image: "https://picsum.photos/700/250",
    title: "Festival 3 Days",
    by: "dsadas",
    date: "jan 05",
    location: "V. Bagrationi Bridge, Tbilisi",
  },
  {
    id: "6",
    image: "https://picsum.photos/700/250",
    title: "Festival 3 Days",
    by: "dsadas",
    date: "jan 05",
    location: "V. Bagrationi Bridge, Tbilisi",
  },
  {
    id: "7",
    image: "https://picsum.photos/700/250",
    title: "Festival 3 Days",
    by: "dsadsaddas",
    date: "jan 05",
    location: "V. Bagrationi Bridge, Tbilisi",
  },
  {
    id: "8",
    image: "https://picsum.photos/700/250",
    title: "Festival 3 Days",
    by: "dsadas",
    date: "jan 05",
    location: "V. Bagrationi Bridge, Tbilisi",
  },
  {
    id: "9",
    image: "https://picsum.photos/700/250",
    title: "Festival 3 Days",
    by: "dsadas",
    date: "jan 05",
    location: "V. Bagrationi Bridge, Tbilisi",
  },
  {
    id: "10",
    image: "https://picsum.photos/700/250",
    title: "Festival 3 Days",
    by: "dsadas",
    date: "jan 05",
    location: "V. Bagrationi Bridge, Tbilisi",
  },
];

export async function getdata(id) {
  const [FiletedData] = Data.filter((item) => item.id == id);
  return FiletedData;

  // const res = await fetch(Data);
  // const data = await res.json();
  // return data.filter((item) => item.id == id);
}
