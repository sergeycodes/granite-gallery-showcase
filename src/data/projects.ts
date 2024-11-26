export interface Project {
    id: number;
    title: string;
    description: string;
    mainImage: string;
    images: string[];
    material: string;
}

export const projects: Project[] = [
    {
        id: 1,
        title: "Modern Kitchen Renovation",
        description: "Elegant black granite countertops with waterfall edges",
        mainImage: "https://images.unsplash.com/photo-1600585154526-990dced4db0d",
        images: [
            "https://images.unsplash.com/photo-1600585154526-990dced4db0d",
            "https://images.unsplash.com/photo-1600585154526-990dced4db0d",
            "https://images.unsplash.com/photo-1600585154526-990dced4db0d",
            "https://images.unsplash.com/photo-1600585154526-990dced4db0d"
                ],
        material: "Black Granite",
    },
    {
        id: 2,
        title: "Luxury Bathroom",
        description: "White marble vanity with custom-cut granite details",
        mainImage: "https://images.unsplash.com/photo-1600566752355-35792bedcfea",
        images: [
            "https://images.unsplash.com/photo-1600566752355-35792bedcfea",
            "https://images.unsplash.com/photo-1600566752355-35792bedcfea",
            "https://images.unsplash.com/photo-1600566752355-35792bedcfea",
            "https://images.unsplash.com/photo-1600566752355-35792bedcfea"
        ],
        material: "White Marble",
    },
    {
        id: 3,
        title: "Contemporary Living",
        description: "Stunning granite fireplace surround and accent walls",
        mainImage: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c",
        images: [
            "https://images.unsplash.com/photo-1600585154340-be6161a56a0c",
            "https://images.unsplash.com/photo-1600585154340-be6161a56a0c",
            "https://images.unsplash.com/photo-1600585154340-be6161a56a0c",
            "https://images.unsplash.com/photo-1600585154340-be6161a56a0c"
        ],
        material: "Granite",
    },
    // Add more projects here
];