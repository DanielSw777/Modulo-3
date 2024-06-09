export const getMeFetch = async (token) => {
    try {
        const params = {
            headers: {
                "Content-Type": "Application/json",
                "Authorization": `Bearer ${token}`
            }
        };

        const response = await fetch(`https://panificados-patagonia-backend.vercel.app/api/v1/admin/me`, params);
        const results = await response.json();
        if (response.status !== 200) throw response;
        return results;
    } catch (error) {
        throw error;
    }
};
