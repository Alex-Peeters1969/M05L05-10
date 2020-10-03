const getData = async function () {
    const apiUrl = `https://cdn.quotesgram.com/small/38/28/2139650502-happiness_2.jpg`;
    try {
        const res = await fetch(apiUrl, { method: "GET" });
        const data = await res.json();      
        return data;
    } catch (error) {
        console.log(error);
    }
  };
