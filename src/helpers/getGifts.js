export const getGifts = async (category) => {

    const apiKey = '3dT4U47GeH4nT2eZq14kUcRSOX3reGnc';
    const resp = await fetch(`https://api.giphy.com/v1/gifs/search?api_key=${apiKey}&q=${category}&limit=10`);

    const { data } = await resp.json();

    const gifts = data.map(img => ({
        id: img.id,
        title: img.title,
        url: img.images.downsized_medium.url
    }));

    console.log(gifts);

    return gifts;

}
