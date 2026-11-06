import axios from "axios";

const makeRequest = async (inputValue: string, selectedParameter: string) => {
  // const apiKey = process.env.REACT_APP_API_KEY;
  // const apiHost = process.env.REACT_APP_API_HOST;

  const options = {
    method: "GET",
    url: `https://wordsapiv1.p.rapidapi.com/words/${inputValue}/${selectedParameter}`,
    headers: {
      "X-RapidAPI-Key": 'test-key',
      "X-RapidAPI-Host": 'wordsapiv1.p.rapidapi.com',
    },
    withCredentials: true,
  };

  try {
    const response = await axios.request(options);
    if (response.data && response.data[selectedParameter]) {
      return response.data[selectedParameter] || [];
    } else {
      return [];
    }
  } catch (error) {
    console.error(error);
    throw error;
  }
};

export default makeRequest;
