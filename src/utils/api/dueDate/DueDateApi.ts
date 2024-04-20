import axios from "axios";
const apiUrl = import.meta.env.VITE_BACKEND_URL;
import { DueDate } from "src/models/DueDate";
export async function createNewDueDate(dueDate: DueDate) {
    console.log("dueDate from createNewDueDate: ", dueDate);
    try {
        // Make the POST request
        const response = await axios.post(`${apiUrl}/api/dueDate/`, dueDate);
        console.log(response.data);
    } catch (error) {
        // Handle errors here if needed
        throw new Error(`Failed to fetch data: ${error}`);
    }
}

export async function getDueDatesByCaseId(id: number) {
    console.log("dueDate from createNewDueDate: ", id);
    try {
        // Make the POST request
        const response = await axios.get(`${apiUrl}/api/dueDate/getDueDates?caseId=${id}`);
        console.log(response.data);
        return response.data;
    } catch (error) {
        // Handle errors here if needed
        throw new Error(`Failed to fetch dueDatesByCaseId: ${error}`);
    }
}
