//@ts-expect-error type check does not work for this library
import { REBRICKABLE_API_KEY } from "@env";

export const fetchWithAuth = (url: string, options: RequestInit = {}) => {
  const headers = {
    Authorization: `key ${REBRICKABLE_API_KEY}`,
  };
  const updatedOptions = {
    ...options,
    headers: { ...headers, ...options.headers },
  };

  return fetch(url, updatedOptions);
};

export const fetchEverythingFromAllPages = async (
  url: string
): Promise<unknown[]> => {
  let fullResponse = [];
  let page = 1;

  while (true) {
    const response = await fetchWithAuth(url + `&page=${page}`);

    if (response.ok) {
      const data = await response.json();
      fullResponse = [...fullResponse, ...data.results];
      if (data.next === null) return fullResponse;
      page++;
      continue;
    }

    throw new Error(`Failed to fetch data, ${response.status}`);
  }
};
