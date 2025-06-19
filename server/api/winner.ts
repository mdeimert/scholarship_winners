import qs from 'qs';
import type {
  JsonApiResponse,
  Winner,
} from '~/repository/modules/winner/config';

export default defineEventHandler(async (event) => {
  const config = useRuntimeConfig();
  const baseUrl = config.public.apiBase;

  const query = getQuery(event);
  const page = parseInt((query.page as string) || '1');

  const params = {
    page: {
      size: 10,
      number: page,
    },
    fields: {
      winner: ['winnerName', 'amountWon', 'wonAt', 'winnerPhoto'],
    },
    filter: {
      published: 1,
    },
  };

  const queryString = qs.stringify(params, {
    encode: false,
    arrayFormat: 'comma',
  });
  const url = `${baseUrl}/winner?${queryString}`;

  const response = await $fetch<JsonApiResponse<Winner>>(url, {
    headers: {
      'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64)',
      Accept: 'application/vnd.api+json',
      Referer: 'https://scholarshipowl.com/',
    },
  });
  return response;
});
