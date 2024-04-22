export const getCurrentDateTime = () => {
    const now = new Date();
    const year = now.getFullYear();
    const month = String(now.getMonth() + 1).padStart(2, '0');
    const day = String(now.getDate()).padStart(2, '0');
    const hour = String(now.getHours()).padStart(2, '0');
    const minute = String(now.getMinutes()).padStart(2, '0');
    return `${year}-${month}-${day}T${hour}:${minute}`;
  };
  export  const getCurrentDate = () => {
    const now = new Date();
    const year = now.getFullYear();
    const month = String(now.getMonth() + 1).padStart(2, '0');
    const day = String(now.getDate()).padStart(2, '0');
    return `${day}-${month}-${year}`;
  };

  export function formatDate(dateString:any) {
    const date = new Date(dateString);
    const day = date.getDate().toString().padStart(2, '0');
    const month = (date.getMonth() + 1).toString().padStart(2, '0');
    const year = date.getFullYear();
    const hours = date.getHours().toString().padStart(2, '0');
    const minutes = date.getMinutes().toString().padStart(2, '0');
  
    return `${day}-${month}-${year} ${hours}:${minutes}`;
  }

  export function formatDateWithDifferentFormat(dateString:any) {
    const parts = dateString.split('-');
    if (parts.length === 3) {
      // Assuming format is YYYY-MM-DD
      const [year, month, day] = parts;
      const formattedDate = `${day}-${month}-${year}`;
      return formattedDate;
    } else {
      // Assuming format is YYYY-MM-DDTHH:mm:ss.ssssss
      return formatDate(dateString);
    }
  }

