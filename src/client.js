import sanityClient from '@sanity/client'


export default sanityClient({
    projectId: '4bhbsx0k',
    dataset: 'production',
    useCdn: true,
})