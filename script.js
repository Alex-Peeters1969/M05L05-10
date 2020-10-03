const displayQuote = async function () {
    const data = await getData();    
    alert(data.value);
  };
   
  document
    .querySelector(".quote")
    .addEventListener("click", displayQuote); 