

interface SeedData {
    entries: SeedEntry[];
}


interface SeedEntry {
    description: string;
    status: string;
    createdAt: number;
}



export const seedData: SeedData = {
    entries: [
        {
            description: 'Pendiente: Quisque porttitor quam nisi, vel laoreet massa auctor in. Nam eget ipsum quis ante rhoncus blandit nec ut elit.',
            status: 'pending',
            createdAt: Date.now(),
        },
        {
            description: 'In-Progress: Vivamus dapibus pretium elit, quis facilisis lectus dictum ut. Sed imperdiet porta ex in convallis.',
            status: 'in-progress',
            createdAt: Date.now() - 1,
        },
        {
            description: 'Terminadas: Nam libero velit, rutrum non nisi at, efficitur vulputate augue. Sed neque tortor, aliquet facilisis nisi id, gravida.',
            status: 'finished',
            createdAt: Date.now() - 2,
        },
    ]
}