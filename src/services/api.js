import axios from 'axios';

const API_KEY = '32551916-52acd45cb85fdadfb1e78d261';
const URL = `https://pixabay.com/api/`;
const perPage = 12;

const fetchImagesWithQuery = async (searchQuery, page = 1) => {
  const axiosParams = {
    key: API_KEY,
    q: searchQuery,
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: true,
    per_page: perPage,
    page: page,
  };

  const response = await axios.get(URL, {
    params: axiosParams,
  });
  const availablePages = Math.ceil(response.data.totalHits / perPage);

  return { images: response.data.hits, totalPages: availablePages };
};

const handleFetchData = images => {
  return images.map(({ id, tags, webformatURL, largeImageURL }) => {
    return { id, tags, webImgURL: webformatURL, lgImgURL: largeImageURL };
  });
};

export { fetchImagesWithQuery, handleFetchData };