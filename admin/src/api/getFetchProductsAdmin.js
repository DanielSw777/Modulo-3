export const getFetchProductsAdmin = async (url) => {
    try {
        const response = await fetch(url);
        const data = await response.json();
        if (response.status !== 200) throw response;
        return data;
    } catch (error) {
        throw error;
    }
};
