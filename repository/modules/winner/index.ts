import type { Winner, JsonApiLinks, JsonApiResponse } from './config';

export class WinnerModule {
  async fetch(pageNumber: number): Promise<{
    winners: Winner[];
    links: JsonApiLinks;
    meta?: any;
  }> {
    try {
      const response = await $fetch<JsonApiResponse<Winner>>(
        `/api/winner?page=${pageNumber}`,
      );

      return {
        winners: response.data ?? [],
        links: response.links ?? {},
        meta: response.meta,
      };
    } catch (err: any) {
      console.error('Failed to fetch winners:', err);
      throw new Error(`Failed to fetch winners: ${err.message}`);
    }
  }
}
