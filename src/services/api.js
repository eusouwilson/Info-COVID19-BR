import axios from 'axios';

const url = 'https://covid19-brazil-api.now.sh/api/report/v1';

/* export const fetchData = async (option) => {
  try {
    if (uf !== undefined) {
      const { data } = await axios.get(`${url}/brazil/uf/${uf}`);
      return data;
    } else {
      const { data } = await axios.get(`${url}/${option}`);
      return data.data;
    }
  } catch (error) {}
}; */

export const fetchData = async (country) => {
  try {
    const { data } = await axios.get(`${url}/${country}`);
    return data.data;
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

export const fetchDataStates = async (uf) => {
  try {
    if (uf === null) {
      const { data } = await axios.get(
        'https://brasil.io/api/dataset/covid19/caso/data?is_last=True&place_type=state'
      );
      return data;
    } else {
      const { data } = await axios.get(
        'https://brasil.io/api/dataset/covid19/caso/data?is_last=True&place_type=state'
      );
      return data.results.filter((state) => state.state === uf);
    }
  } catch (error) {}
};

export const fetchDataState = async (uf) => {
  try {
    const { data } = await axios.get(
      `https://brasil.io/api/dataset/covid19/caso_full/data?is_last=True&place_type=state&state=${uf}`
    );
    return data;
  } catch (error) {}
};
