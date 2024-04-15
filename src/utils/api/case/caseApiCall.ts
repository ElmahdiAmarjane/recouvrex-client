import axios from "axios";
import {Case} from "src/models/case";
const apiUrl = import.meta.env.VITE_BACKEND_URL;

const userId:number=5;

 
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
      const response = await axios.get<Case[]>(`${apiUrl}/api/case/filter/${userId}`);
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
      const response = await axios.get<Case[]>(`${apiUrl}/api/case/filter/?userConnectedId=${userId}&status=${statusId}`);
     
      console.log('filterd cases by user connected id and status id : ', statusId);
      console.log(response.data);
      return response.data;
    } catch (error) {
      // Handle errors here if needed
      throw new Error(`Failed to fetch data: ${error}`);
    }
  }