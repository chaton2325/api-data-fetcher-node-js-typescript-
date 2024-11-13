const BASE_URL = 'http://192.168.X.X:8000'; //Change your ip on LAN NETWORK 
export const fetchData = async () => {
  try {
    const response = await fetch(`${BASE_URL}/`);
    const data = await response.json();
    console.log("data : ",data) //facultative
    return data;
  } catch (error) {
    console.error('Erreur to connect to the backend:', error);
    return null;
  }
};


