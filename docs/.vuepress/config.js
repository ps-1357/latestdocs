module.exports = {
    title: 'Lorem ipsum',
    description: 'Information about lorem ipsum',
    themeConfig: {
        smoothScroll: true,
        nav: [
            {text: 'Home', link:'/'},
            {text: 'Guide', link:'/guide/'},
            {text: 'About me', link:'http://praduyotsaikia.s3-website.ap-south-1.amazonaws.com/'},
        ],
        sidebar: [
            {
              title: 'Introduction',      
              collapsable: true, 
              sidebarDepth: 2,    
              children: [
                '/guide/',
                '/installation/',
                '/qTunelling/'
              ]
            },
            {
              title: 'Counter',
              sidebarDepth: 2,
              children: [ 
                  '/counter/',

              ]
            }
          ]
    }
}