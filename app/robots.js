export const dynamic = "force-static";

export default function robots() {
    return {
        rules: {
            userAgent: '*',
            allow: '/',
        },
        sitemap: 'https://hemanth-portfolio-app.web.app/sitemap.xml',
    };
}
