import axios from 'axios';

export const getCoordinates = async (address) => {
  try {
    const response = await axios.get(`https://stagingapi.eurekalogistics.co.id/monitoring/get-latlong?address=${encodeURIComponent(address)}`);
    if (response.data.status === "OK") {
      return response?.data?.results[0].geometry.location;
    } else {
      throw new Error("Failed to get coordinates");
    }
  } catch (error) {
    console.error(error);
    return null;
  }
};
