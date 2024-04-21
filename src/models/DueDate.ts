export class DueDate {
    id: number;
    dueDateId: string;
    paymentDueDate: string;
    dueDateStatus: string;
    principalAmount: number;
    interestAmount: number;
    insuranceAmount: number;
    ancillaryCharge: number;
    remainingPrincipalBalance: number;
    startDate: string;
    modificationDate: string;
    totalInstallmentAmount: number;
    latePaymentCharge: number;
    unpaidPrincipalAmount: number;
    accruedInterest: number;
    unpaidInsurancePrenium: number;
    unpaidAncillaryCharges: number;
    _case: {
       id: number 


    }; // Si _case est un objet avec une propriété id
  
    constructor(data: any) {
      this.id = data.id;
      this.dueDateId = data.dueDateId;
      this.paymentDueDate = data.paymentDueDate;
      this.dueDateStatus = data.dueDateStatus;
      this.principalAmount = data.principalAmount;
      this.interestAmount = data.interestAmount;
      this.insuranceAmount = data.insuranceAmount;
      this.ancillaryCharge = data.ancillaryCharge;
      this.remainingPrincipalBalance = data.remainingPrincipalBalance;
      this.startDate = data.startDate;
      this.modificationDate = data.modificationDate;
      this.totalInstallmentAmount = data.totalInstallmentAmount;
      this.latePaymentCharge = data.latePaymentCharge;
      this.unpaidPrincipalAmount = data.unpaidPrincipalAmount;
      this.accruedInterest = data.accruedInterest;
      this.unpaidInsurancePrenium = data.unpaidInsurancePrenium;
      this.unpaidAncillaryCharges = data.unpaidAncillaryCharges;
      this._case = { id: data._case.id };
    }
  }
  
  // Define an interface based on the properties of the DueDate class
export interface DueDateInterface {
  id: number;
  dueDateId: string;
  paymentDueDate: string;
  dueDateStatus: string;
  principalAmount: number;
  interestAmount: number;
  insuranceAmount: number;
  ancillaryCharge: number;
  remainingPrincipalBalance: number;
  startDate: string;
  modificationDate: string;
  totalInstallmentAmount: number;
  latePaymentCharge: number;
  unpaidPrincipalAmount: number;
  accruedInterest: number;
  unpaidInsurancePrenium: number;
  unpaidAncillaryCharges: number;
  _case: {
    id: number;
    caseId: string;
    status: {
      id: number;
      status: string;
    };
    procedure: {
      id: number;
      procedureLabel: string;
    };
    thirdParty: {
      id: number;
      thirdPartyId: any; // Change 'any' to the correct type if possible
      tiersType: string;
      title: string;
      lastName: string;
      firstName: string;
      companyName: string;
      birthDate: string;
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
      supportingDocumentExpirationDate: string;
      maritalStatus: string;
      // Add other properties if needed
    };
   
    }
    reglements: null
}