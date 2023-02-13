const getData = async () => {
    const response = await fetch('https://catfact.ninja/fact');
    if (response.ok) {
      const data = await response.json();
      console.log(data);
    } else { console.error(`${response.status} ${response.statusText}`); }
};
  
getData();