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

  const response = await $fetch<JsonApiResponse<Winner>>(url);
  return response;
});
