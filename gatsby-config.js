/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
  plugins: [
    {
      resolve: `gatsby-source-drupal`,
      options: {
        baseUrl: `http://192.168.99.135/contenta/web/`,
        apiBase: `api`, // optional, defaults to `jsonapi`
        filters:{
        	filter:{
        		type: 'allCategories',
                parameter: `filter[name]=Main course`

        	}
        }
      },
    },
    {
          resolve: `gatsby-plugin-client-side-redirect`,
    },
     {
          resolve: `gatsby-plugin-meta-redirect`,
    },
    
     {
          resolve: `gatsby-plugin-htaccess`,
          options:{
            RewriteBase: true,
            https:true,
            host:'vethanda.com',
             redirect: [
          'RewriteRule ^vethanda.com/?$ /vethanda.com/en [R=301,L,NE]',
          {
            from: 'vethanda.com',
            to: 'vethanda.com:8000/en',
          },
        ],
          }
    },
  ],
  
}


