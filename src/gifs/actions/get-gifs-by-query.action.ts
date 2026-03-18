import { giphyApi } from "../api/giphy.api";

import type { Gif } from "../interfaces/gif.interface";
import type { GiphyResponse } from "../interfaces/giphy.response";

export const getGifsByQuery = async (query: string): Promise<Gif[]> => {
  if (query.trim().length === 0) {
    return [];
  }

  try {
    const response = await giphyApi<GiphyResponse>("/search", {
      params: {
        q: query,
        limit: 10,
      },
    });
    // console.log(response.data);

    return response.data.data.map((gif) => ({
      id: gif.id,
      title: gif.title,
      url: gif.images.original.url,
      width: Number(gif.images.original.width),
      height: Number(gif.images.original.height),
      size: Number(gif.images.original.size),
    }));
    /* fetch(
    `https://api.giphy.com/v1/gifs/search?api_key=xD2CkoK1VlJj4GeQcM4EtAPgoo8anUHe&q=${query}&limit=10&lang=es`
  ); */
  } catch (error) {
    console.error(error);
    return [];
  }
};
