import Axios from 'axios';

const apiKey = '5387587bd1589681f82ded2b3ad203add911ec7439eb3ff2c0f67288';

export default {
  getUserLocation,
}

async function getUserLocation() {
  try {
    const res = await Axios.get((`https://api.ipdata.co/?api-key=${apiKey}`));
    return res.data;
  }
  catch (err) {
    throw err;
  }
}




