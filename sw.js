self.addEventListener('install', (event) =>{
    console.log("SW: install");
});

self.addEventListener('fetch', (event) =>{
    if(event.request.url.includes('style.css')){
        console.log(event.request.url);

        const resp = new Response(
            `body{
                color: rgb(240, 6, 6);
                background-color: rgb(0, 0, 0);
            }`,
            {
                headers:{
                    'Content-Type':'text/css'
                }
            }
        );

        event.respondWith(resp);
    } 
    if(event.request.url.includes('img1.jpeg')){
        event.respondWith(fetch('./images/img2.jpg'));
    }    
});