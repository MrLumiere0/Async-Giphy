require('dotenv').config();

// Print out value of API key stored in .env file
console.log(process.env.API_KEY)

 async function getImages(query){
    const url =  `https://api.giphy.com/v1/gifs/search?
    api_key=${process.env.API_KEY}
    &q=${query}
    &limit=25
    &offset=0
    &rating=g
    &lang=en
    &bundle=messaging_non_clips`


     const response = await fetch(url);
     const data =  await response.json();
     return(data)


}

console.log(getImages("love"))
