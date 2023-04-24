export interface HousingListItem {
    id: string;
    title: string;
    authorName: string;
    rating: number;
    image: string;
    imageLoaded?: boolean;
};

export interface Review {
    author: string;
    date: string;
    content: string;
    useful: number;
    useless: number;
};

export interface Housing {
    title: string, 
    images: any[],
    rating: number,
    services: string[],
    constraints: string[],
    housingDescription: string,
    landlordDescription: string,
    reviews: Review[]
}