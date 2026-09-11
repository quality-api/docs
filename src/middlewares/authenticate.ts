import QualityApi from "@quality-api/core";

const unauthorizedResponse = new Response(null, { status: 401 });

const authenticate = QualityApi.createMiddleware(request => {
    
    const header = request.headers["admin-key"];

    if (!header) return unauthorizedResponse;

    if (header !== process.env.ADMIN_KEY) return unauthorizedResponse;

    return request;
});

export default authenticate;