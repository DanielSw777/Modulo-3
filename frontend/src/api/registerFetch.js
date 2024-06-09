export const registerFetch = async (data) => {
    try {
        const params = {
            method: "POST",
            body: JSON.stringify(data),
            headers: {
                "Content-Type": "Application/json; charset=UTF-8"
            }
        };

        const response = await fetch(`https://modulo-3-backend-production.up.railway.app/api/v1/auth/register`, params);
        const request = await response.json();

        if (response.status !== 200) return response;
        return request;
    } catch (error) {
        throw error;
    }
};
