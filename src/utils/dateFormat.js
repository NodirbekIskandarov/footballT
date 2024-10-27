export function formatDateToYMD(dateString) {
    const date = new Date(dateString);
    const year = date.getFullYear();
    const month = (date.getMonth() + 1).toString().padStart(2, '0'); // Oy 0 dan boshlanadi
    const day = date.getDate().toString().padStart(2, '0');
  
    return `${year}.${month}.${day}`;
}
export function formatDateToHMS(dateString) {
    const date = new Date(dateString);
    const hours = date.getHours().toString().padStart(2, '0');
    const minutes = date.getMinutes().toString().padStart(2, '0');

    return `${hours}:${minutes}`;
}