import axios from 'axios';

const url = 'https://covid19-brazil-api.now.sh/api/report/v1';

export const fetchData = async (option, uf) => {
  try {
    if (uf !== undefined) {
      const { data } = await axios.get(`${url}/brazil/uf/${uf}`);
      return data;
    } else {
      const { data } = await axios.get(`${url}/${option}`);
      return data.data;
    }
  } catch (error) {}
};

export const fetchDataDetails = async (option) => {
  try {
    if (option === 'countries') {
      const { data } = await axios.get(`${url}/countries`);
      return data.data;
    } else if (option === null || option === undefined) {
      const { data } = await axios.get(`${url}/`);
      return data.data;
    } else {
      const { data } = await axios.get(`${url}/${option}`);
      return data.data;
    }
  } catch (error) {}
};

export const fetchDataNews = async () => {
  try {
    const { data } = await axios.get(
      `https://newsapi.org/v2/top-headlines?q=covid&country=br&category=health&apiKey=ffbaf2162c4c4670ab2bdbe3643e51cd`
    );

    return data.articles.filter((x) => x.urlToImage !== null);
  } catch (error) {}
};
