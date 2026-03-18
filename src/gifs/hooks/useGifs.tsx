import { useRef, useState } from "react";
import type { Gif } from "../interfaces/gif.interface";
import { getGifsByQuery } from "../actions/get-gifs-by-query.action";

// const gifsCache: Record<string, Gif[]> = {};

export const useGifs = () => {
  const [gifs, setGifs] = useState<Gif[]>([]);
  const [previousTerms, setPreviousTerms] = useState<string[]>([]);

  //useRef se usa para re render al momento, de no perder la data de cache.
  const gifsCache = useRef<Record<string, Gif[]>>({});

  const handleTermClicked = async (term: string) => {
    // console.log({ term });

    if (gifsCache.current[term]) {
      setGifs(gifsCache.current[term]);
      return;
    }

    const gifs = await getGifsByQuery(term);
    setGifs(gifs);
    gifsCache.current[term] = gifs;
  };

  const handleSearch = async (query: string = "") => {
    // console.log({ query });
    query = query.trim().toLowerCase();

    if (query.length === 0) return;

    if (previousTerms.includes(query)) return;

    /* const currentTerms = previousTerms.slice(0, 6);
        currentTerms.unshift(query);
        setPreviousTerms(currentTerms); */
    setPreviousTerms([query, ...previousTerms].slice(0, 8));

    const gifs = await getGifsByQuery(query);
    // console.log({ gifs });
    setGifs(gifs);

    gifsCache.current[query] = gifs;
    // console.log(gifsCache);
  };

  return {
    // Values o Props
    gifs,
    previousTerms,

    // Methods o Actions
    handleTermClicked,
    handleSearch,
  };
};
