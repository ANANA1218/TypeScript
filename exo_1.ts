export type User = {
    name: string;
    age: number;
    occupation?: string; // Occupation est facultatif
    compentences?: string[]; // Compétences peut être un tableau de chaînes
    adresse?: { // Adresse est un objet optionnel
        rue: string;
        cp: number;
        ville: string;
    };
   
};
export const users: User[] = [
    {
        name: 'Alain',
        age: 25,
        occupation: 'Boulanger',
        compentences: ["js", "node"]
    },
    {
        name: 'Béatrice',
        age: 23,
        occupation: 'Astronaute',
        adresse: {
            rue: "75 rue de Paris",
            cp: 75000,
            ville: "Paris"
        }
    }
];
export function logPerson(user: User) {
    console.log(` - ${user.name}, ${user.age}`);
}
