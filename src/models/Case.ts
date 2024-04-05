// Interface for the entire response object
import { Procedure } from "./Procedure";
import { ThirdParty } from "./ThirdParty";
import { Contributor } from "./Contributor";
export interface Case {
    id: number;
    caseId: string;
    status: Status;
    procedure: Procedure;
    thirdParty: ThirdParty;
    startDate: string;
    principalAmount: number;
    interestAmount: number;
    penaltyAmount: number;
    totalAmount: number;
    commissionAmount: number;
    insuranceSettlementAmout: number;
    contributor: Contributor;
  }