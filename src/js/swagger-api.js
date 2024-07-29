import axios from 'axios';

const BASE_URL = 'https://portfolio-js.b.goit.study/api';

async function postData(obj) {
  try {
    const response = await axios.post(`${BASE_URL}/requests`, obj);
    return response.data;
  } catch (error) {
    throw error;
  }
}

export { postData };
