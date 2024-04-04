export type CaseStatus = 'Précontentieux' | 'Radié' | 'Prêt douteux' | 'Terminé' | 'Saisie conservatoire immobilière initiée' | 'Comité des impayés';

export interface Case {
  identifiant: string;
  date: string; // or Date if you intend to convert the string to a Date object
  statut: CaseStatus;
  nom: string;
  type: string; // This can also be a union type if there is a finite list of known types
  contrat: string;
  facture: string; // or number if you convert it to a numerical value
  montant: number;
  fournisseur: string; // Replace with the actual attribute name for the supplier
}
