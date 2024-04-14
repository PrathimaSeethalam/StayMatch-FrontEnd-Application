import axios from "axios";

export const baseUrl = 'https://bayut.p.rapidapi.com';

export const fetchApi = async (url) => {
  const { data } = await axios.get((url), {
    headers: {
      'x-rapidapi-host': 'bayut.p.rapidapi.com',
      'x-rapidapi-key': '59a31fff76mshd2f14c6ee5337f5p131394jsn1f7ce26bdb9f' ,
    },
  });
    
  return data;
}