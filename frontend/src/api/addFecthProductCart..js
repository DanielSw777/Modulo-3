export const addFetchProductCart = async (productId, token) => {
    try {
        const params = {
            method: "POST",
            body: JSON.stringify({
                productId: productId
            }),
            headers: {
                "Content-Type": "Application/json; charset=UTF-8",
                Authorization: `Bearer ${token}`
            }
        };
        const response = await fetch(`https://modulo-3-backend-aj6p2biq3-daniel777.vercel.app/api/v1/cart/addProduct`, params);
        const result = await response.json();
        return result.append;
    } catch (error) {
        throw error;
    }
};
