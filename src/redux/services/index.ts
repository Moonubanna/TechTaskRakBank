import axios from 'axios';
export default async (method: any) => {
  return new Promise((resolve, reject) => {
    setTimeout(async () => {
      return resolve(await postApiCall(method));
    }, 100);
  });
};

export async function postApiCall(method: any) {
  let formData = new FormData();
  try {
    for (const [key, value] of Object.entries(method.payload)) {
      formData.append(`${key}`, value);
    }
    let response = axios.post(method.type, formData)

    let responseJson = await (await response).data;
    console.log('response>>>>>>>>>>', responseJson);
    return responseJson;
  } catch (error) {
    console.error(error);
  }
}