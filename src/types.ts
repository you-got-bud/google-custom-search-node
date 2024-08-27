export namespace Google {
  type SortDirection = 'asc' | 'desc'
  type SortName = 'date' | 'relevance'
  /**
   * Sorting bias
   * - h: (hard sort)
   * - w: (weak bias)
   * - s: (strong bias)
   */
  type SortStrength = 'h' | 'w' | 's'
  type SortExpression = `${SortName}:${SortDirection}:${SortStrength}`
  export interface SearchParams {
    c2coff?: '0' | '1'
    cr?: string
    cx: string
    dateRestrict?: `d${number}` | `w${number}` | `m${number}` | `y${number}`
    exactTerms?: string
    excludeTerms?: string
    fileType?: string
    filter?: '0' | '1'
    /**
     * Geolocation of end user. The gl parameter value is a two-letter country code. The gl parameter boosts search results whose country of origin matches the parameter value. See the Country Codes page.
     */
    gl?: string
    /**
     * @deprecated
     * Use the `gl` parameter instead.
     */
    googlehost?: string
    highRange?: string
    /**
     * Sets the user interface language.
     */
    hl?: string
    /**
     * Appends the specified query terms to the query, as if they were combined with a logical AND operator.
     */
    hq?: string
    key: string
    imgColorType?: 'color' | 'mono' | 'gray' | 'trans'
    imgDominantColor?:
      | 'black'
      | 'blue'
      | 'brown'
      | 'gray'
      | 'green'
      | 'orange'
      | 'pink'
      | 'purple'
      | 'red'
      | 'teal'
      | 'white'
      | 'yellow'
      | 'orange'
    imgSize?:
      | 'huge'
      | 'icon'
      | 'large'
      | 'medium'
      | 'small'
      | 'xlarge'
      | 'xxlarge'
    imgType?: 'clipart' | 'face' | 'lineart' | 'stock' | 'photo'
    linkSite?: string
    lowRange?: string
    /**
     * Document language
     */
    lr?:
      | 'lang_ar'
      | 'lang_bg'
      | 'lang_ca'
      | 'lang_cs'
      | 'lang_da'
      | 'lang_de'
      | 'lang_el'
      | 'lang_en'
      | 'lang_es'
      | 'lang_et'
      | 'lang_fi'
      | 'lang_fr'
      | 'lang_hr'
      | 'lang_hu'
      | 'lang_id'
      | 'lang_is'
      | 'lang_it'
      | 'lang_iw'
      | 'lang_ja'
      | 'lang_ko'
      | 'lang_lt'
      | 'lang_lv'
      | 'lang_nl'
      | 'lang_no'
      | 'lang_pl'
      | 'lang_pt'
      | 'lang_ro'
      | 'lang_ru'
      | 'lang_sk'
      | 'lang_sl'
      | 'lang_sr'
      | 'lang_sv'
      | 'lang_tr'
      | 'lang_zh-CN'
      | 'lang_zh-TW'
    /**
     * Number of search results to return.
     */
    num?: number
    orTerms?: string
    /**
     * Query
     */
    q: string
    rights?: string
    safe?: 'active' | 'moderate' | 'off'
    searchType?: 'image' | 'news' | 'video'
    siteSearch?: string
    siteSearchFilter?: 'e' | 'i'
    sort?: SortExpression
    start?: number
  }
  export interface Image {
    source: string
    width: number
    height: number
  }
  export interface PromotionBodyLine {
    title: string
    htmlTitle: string
    url: string
    link: string
  }
  export interface Promotion {
    title: string
    htmlTitle: string
    link: string
    displayLink: string
    image: Image
    bodyLines: PromotionBodyLine[]
  }
  export interface ImageResult {
    contextLink: string
    height: number
    width: number
    byteSize: number
    thumbnailLink: string
    thumbnailHeight: number
    thumbnailWidth: number
  }
  export interface Label {
    name: string
    displayName: string
    label_with_op: string
  }
  export interface Result {
    kind: string
    title: string
    htmlTitle: string
    link: string
    displayLink: string
    snippet: string
    htmlSnippet: string
    cacheId: string
    formattedUrl: string
    htmlFormattedUrl: string
    pagemap: Record<string, unknown>
    mime: string
    fileFormat: string
    image: ImageResult
    labels: Label
  }
  export type QueryKey = 'previousPage' | 'request' | 'nextPage'
  export type Queries = Record<QueryKey, Page[]>
  export interface SearchInformation {
    searchTime: number
    formattedSearchTime: string
    totalResults: string
    formattedTotalResults: string
  }
  export interface Page {
    title: string
    totalResults: string
    searchTerms: string
    count: number
    startIndex: number
    startPage: number
    language: string
    inputEncoding: string
    outputEncoding: string
    safe: string
    /**
     * The cx parameter is the custom search engine ID to use for this request.
     */
    cx: string
    sort: string
    filter: string
    gl: string
    cr: string
    googleHost: string
    disableCnTwTranslation: string
    hq: string
    hl: string
    siteSearch: string
    siteSearchFilter: string
    exactTerms: string
    excludeTerms: string
    linkSite: string
    orTerms: string
    relatedSite: string
    dateRestrict: string
    lowRange: string
    highRange: string
    fileType: string
    rights: string
    searchType: string
    imgSize: string
    imgType: string
    imgColorType: string
    imgDominantColor: string
  }
  export interface URL {
    type: string
    template: string
  }
  export interface Spelling {
    correctedQuery: string
    htmlCorrectedQuery: string
  }
  export interface Search {
    kind: string
    url: URL
    queries: Queries
    promotions: Promotion[]
    context: Record<string, unknown>
    searchInformation: SearchInformation
    spelling: Spelling
    items: Result[]
  }

  export type ImageFileType = 'jpg' | 'png' | 'gif' | 'bmp' | 'svg' | 'webp'
}
