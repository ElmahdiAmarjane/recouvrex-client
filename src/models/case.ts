export type CaseStatus = 
  'Précontentieux' | 
  'Radié' | 
  'Prêt douteux' | 
  'Terminé' | 
  'Saisie conservatoire immobilière initiée' | 
  'Comité des impayés' | 
  'Pré-douteux' | 
  'Douteux' | 
  'Comité de déclassement agence' | 
  'Contentieux' | 
  'Pré-contentieux' | 
  'Saisie conservation immobilière initiée';

// export interface Case {
//   identifiant: string;
//   date: string; // or Date if you intend to convert the string to a Date object
//   statut: CaseStatus;
//   nom: string;
//   type: string; // This can also be a union type if there is a finite list of known types
//   contrat: string;
//   facture: string; // or number if you convert it to a numerical value
//   montant: number;
//   fournisseur: string; // Replace with the actual attribute name for the supplier
// }

export interface Case {
  id: string;
  caseId:number;
  date: string; // or Date if you intend to convert the string to a Date object
  status: {
    id: number;
    status: CaseStatus;
  };
  procedure: {
    id: number;
    procedureLabel: string;
  };
  thirdParty: {
    id: number;
    thirdPartyId: string | null;
    tiersType: string;
    title: string;
    lastName: string;
    firstName: string;
    companyName: string;
    birthDate: string; // or Date if you intend to convert the string to a Date object
    nationality: string;
    countryOfResidence: string;
    businessSector: string;
    legalForm: string;
    occupation: string;
    personalEmail: string;
    businessEmail: string;
    privatePhone: string;
    businessPhone: string;
    landLinePhone: string;
    faxNumber: string;
    commercialRegister: string;
    supportingDocumentType: string;
    supportingDocumentNumber: string;
    supportingDocumentExpirationDate: string; // or Date if you intend to convert the string to a Date object
    maritalStatus: string;
  };
  assignedAgent: {
    id: number;
    identificationNumber: string;
    userName: string;
    firstName: string;
    lastName: string;
    profile: {
      id: number;
      profile: string;
    };
    manager: any; // or whatever type is appropriate
  };
  startDate: string; // or Date if you intend to convert the string to a Date object
  principalAmount: number;
  interestAmount: number;
  penaltyAmount: number;
  totalAmount: number;
  commissionAmount: number;
  insuranceSettlementAmout: number;
  contributor: any; // or whatever type is appropriate
}

