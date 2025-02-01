interface SecData {
    id: string;       // Added 'id' property for each product
    image: string;
    title: string;
    price: number;
}

const secData: SecData[] = [
    {
        id: "1",  // Unique ID for each product
        image: "/shortsec/modulasofa.png",
        title: "Trenton Modular Sofa_3",
        price: 25000
    },
    {
        id: "2",
        image: "/shortsec/granitediningtable.png",
        title: "Granite Dining Table With Dining Chair",
        price: 25000
    },
    {
        id: "3",
        image: "/shortsec/Outdoorbartable.png",
        title: "Out Door Bar Table & Stool", 
        price: 25000
    },
    {
        id: "4",
        image: "/shortsec/Plainconsole.png",
        title: "Plain Console With Teak Mirror",
        price: 25000
    }
];

export { secData };
export type { SecData };
