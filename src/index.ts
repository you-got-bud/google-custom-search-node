import {SEARCH_URL} from './constants'
import {Google} from './types'
import {get} from './util'

export type GoogleAuthorization = Pick<Google.SearchParams, 'key' | 'cx'>
export async function search(
  query: string,
  authorization: GoogleAuthorization,
  extraSearchParams: Partial<Google.SearchParams> = {}
): Promise<Google.Search> {
  const searchParams = {
    q: query,
    ...authorization,
    ...extraSearchParams,
  } satisfies Google.SearchParams
  return get(SEARCH_URL, searchParams)
}
