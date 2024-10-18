// export const api_baseURL = "http://localhost:4748/api/v1";
export const api_baseURL = "http://v4.checkprojectstatus.com:4748/api/v1"



//for img
export const api_img_url = "http://v4.checkprojectstatus.com:4748"
// export const api_img_url = "http://localhost:4748"




export const randomtestID = async function() {
    // Generate a random number between 0 and 99999
    const randomNumber = Math.floor(Math.random() * 100000);
    
    // Ensure it has 5 digits, padding with zeros if necessary
    const formattedNumber = String(randomNumber).padStart(5, '0');
    
    // Prefix with 'sm'
    return `SCOREMORE-${formattedNumber}`;
};
