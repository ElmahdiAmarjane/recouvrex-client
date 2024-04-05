import axios from "axios";
import {Case} from "src/models/case";



 
  export async function getFilteredCases(caseId: string, status: string, procedure: string): Promise<Case[]> {
    try {
      // Make the GET request
      const response = await axios.get<Case[]>(`http://localhost:8080/api/case/filter/${caseId}/status/${status}/procedure/${procedure}`);
      console.log(response.data)
      //setCases(response.data);
      return response.data;
     
    } catch (error) {
      // Handle errors here if needed
      throw new Error(`Failed to fetch data: ${error}`);
    }
  }

  export async function getFilteredCasesByUser(userId: string): Promise<Case[]> {
    try {
      // Make the GET request
      const response = await axios.get<Case[]>(`http://localhost:8080/api/case/filter/${userId}`);
      console.log(response.data);
      return response.data;
    } catch (error) {
      // Handle errors here if needed
      throw new Error(`Failed to fetch data: ${error}`);
    }
  }