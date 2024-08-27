export async function get<T extends {}, K extends object>(
  url: string,
  params: K
): Promise<T> {
  const searchParams = new URLSearchParams(params as Record<string, string>)
  return fetch(`${url}?${searchParams}`).then(response => response.json())
}
