import axios from "axios";
import {Case} from "src/models/case";
const apiUrl = import.meta.env.VITE_BACKEND_URL;

const userId:number=7;

 
  export async function getFilteredCases(caseId: string, status: string, procedure: string): Promise<Case[]> {
    try {
      // Make the GET request
      const response = await axios.get<Case[]>(`${apiUrl}/api/case/filter/${caseId}/status/${status}/procedure/${procedure}`);
      console.log(response.data)
      //setCases(response.data);
      return response.data;
     
    } catch (error) {
      // Handle errors here if needed
      throw new Error(`Failed to fetch data: ${error}`);
    }
  }

  export async function getFilteredCasesByUser(): Promise<Case[]> {
    try {
      // Make the GET request
      const response = await axios.get<Case[]>(`${apiUrl}/api/case/filterOne/?userConnectedId=${userId}`);
      console.log(response.data);
      return response.data;
    } catch (error) {
      // Handle errors here if needed
      throw new Error(`Failed to fetch data: ${error}`);
    }
  }

  
  export async function getFilteredCasesByStatusId(statusId:number): Promise<Case[]> {
    try {
      // Make the GET request
      const response = await axios.get<Case[]>(`${apiUrl}/api/case/filterOne/?userConnectedId=${userId}&statusId=${statusId}`);
     
      console.log('filterd cases by user connected id and status id : ', statusId);
      console.log(response.data);
      return response.data;
    } catch (error) {
      // Handle errors here if needed
      throw new Error(`Failed to fetch data: ${error}`);
    }
  }

  export async function getFilteredCasesByKeyWord(keyword:string,statusId:number|string): Promise<Case[]> {
    try {
      if(statusId==0){
        statusId ="";
      }
      // Make the GET request
      const response = await axios.get<Case[]>(`${apiUrl}/api/case/filterOne/?userConnectedId=${userId}&searchText=${keyword.trim()}&statusId=${statusId}`);
      // case/filterOne/?userConnectedId=2&searchText=radi
      console.log('filterd cases searching key word : ', keyword);
      console.log('----searchCasesByKeyWord')
      console.log(response.data);
      console.log('--------------------');
      return response.data;
    } catch (error) {
      // Handle errors here if needed
      console.log(`filterd cases searching key word : "${keyword.trim()}"`);

      throw new Error(`Failed to fetch data: ${error}`);
    }
  }


  // filter cases by caseId
  export async function getFilteredCasesByCaseId(userId:number,caseId:string): Promise<Case[]> {
    try {
      // Make the GET request
      const response = await axios.get<Case[]>(`${apiUrl}/api/case/filter/?userConnectedId=${userId}&caseId=${caseId}`);
      console.log(response.data);
      return response.data;
    } catch (error) {
      // Handle errors here if needed
      throw new Error(`Failed to fetch data: ${error}`);
    }
  }