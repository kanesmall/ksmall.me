export interface IPagedApiResponse<T> {
    page: number
    total_results: number
    total_pages: number
    result: T
}
