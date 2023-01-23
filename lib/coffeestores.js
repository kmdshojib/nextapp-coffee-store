export const fetchData = async () => {
    const options = {
        method: 'GET',
        headers: {
            accept: 'application/json',
            Authorization: process.env.PLACE_API
        }
    };
    const data = await fetch('https://api.foursquare.com/v3/places/search', options)
        .then(response => response.json())
    return await data.results;
}