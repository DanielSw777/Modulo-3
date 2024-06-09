export const addProductShop = async (data, token) => {
    try {
        const params = {
            method: "POST",
            body: data,
            headers: {
                "Authorization": `Bearer ${token}`
            }
        };

        const response = await fetch(`https://panificados-patagonia-backend.vercel.app/api/v1/product`, params);
        const request = await response.json();

        if (response.status !== 201) throw response;
        return request.product;
    } catch (error) {
        throw error;
    }
};
