/**
 * @returns {import("next").MetadataRoute.Sitemap}
 */
export default function sitemap() {
    return [
        {
            url: 'http://localhost:3000/',
            lastModified: new Date(),
            changeFrequency: 'monthly',
            priority: 0.8
        },
        {
            url: 'http://localhost:3000/contact',
            lastModified: new Date(),
            changeFrequency: 'yearly',
            priority: 0.3
        },
        {
            url: 'http://localhost:3000/crossfit',
            lastModified: new Date(),
            changeFrequency: 'monthly',
            priority: 0.8
        },
        {
            url: 'http://localhost:3000/kickboxing',
            lastModified: new Date(),
            changeFrequency: 'monthly',
            priority: 0.8
        },
        {
            url: 'http://localhost:3000/musculation',
            lastModified: new Date(),
            changeFrequency: 'monthly',
            priority: 0.8
        },
        {
            url: 'http://localhost:3000/personaltraining',
            lastModified: new Date(),
            changeFrequency: 'monthly',
            priority: 0.8
        },
        
    ]
}