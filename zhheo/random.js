var posts=["2023/05/09/My-New-Post/","2023/07/17/study1/","2023/07/09/article/","2023/05/09/hello-world/"];function toRandomPost(){pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);};