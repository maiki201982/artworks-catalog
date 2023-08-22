export interface ArtWorkPagination {
    total?: number,
    limit?: number,
    offset?: number,
    total_pages?: number,
    current_page?: number,
    next_url?: string
}

export interface ArtWork {
    id: number;
    title: string;
    image_id: string;
    artist_display: string;
}

export interface ArtWorkState {
    pagination: ArtWorkPagination,
    artworks: ArtWork[],
    search: string,
    loading?: boolean
}