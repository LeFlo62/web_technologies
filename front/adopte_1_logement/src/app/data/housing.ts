export interface HousingListItem {
    id: string;
    title: string;
    authorName: string;
    rating: number;
    image: string;
    imageLoaded?: boolean;
};

export interface Housing {
    title: string, 
    img: string,
    rating: number,
    services: string[],
    constraints: string[],
    housingDescription: string,
    landlordDescription: string
}