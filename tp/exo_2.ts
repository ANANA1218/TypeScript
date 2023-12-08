interface Administrateur {
    nom: string;
    email: string;
    ip: string;
    dt_connexion: Date;
    login: string;
    password: string;
}

type UtilisateurAnonyme = Omit<Administrateur, 'email' | 'dt_connexion' | 'login' | 'password'> & {
    nom?: string;
    ip: string;
};

// Exemple d'utilisation 
const utilisateurAnonyme: UtilisateurAnonyme = {
    nom: 'Utilisateur Anonyme',
    ip: '192.168.1.1'
    // Les autres propriétés sont optionnelles car elles sont omises
};
