export const loginFetch = async (data) => {
    try {
        const params = {
            method: "POST",
            body: JSON.stringify({
                email: data.email,
                password: data.password
            }),
            headers: {
                "Content-Type": "Application/json; charset=UTF-8"
            }
        };

        const response = await fetch(`https://modulo-3-backend-aj6p2biq3-daniel777.vercel.app/api/v1/auth/login`, params);
        const request = await response.json();

        if (response.status !== 200) throw response;
        return request;
    } catch (error) {
        throw error;
    }
};
