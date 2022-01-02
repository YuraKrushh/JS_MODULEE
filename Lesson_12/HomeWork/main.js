// Отримати відповідь з цього ресурсу відповідь, та вивести в документ об'єкти.
// Застилізувати, за допомоги css, щоб отримати 5 елементів в рядку.
// Для кожного елементу свій блок div.post
// Всі характеристики повинні мати свої блоки всередені div.post

let wrapper = document.getElementsByClassName('wrapper')[0];
fetch('https://jsonplaceholder.typicode.com/posts')
    .then(response => response.json())
    .then(posts => {
        for (const post of posts) {
            let div_post = document.createElement('div');
            div_post.classList.add('post');
            wrapper.append(div_post);
            let title = document.createElement('div');
            let body = document.createElement('div');
            let id = document.createElement('div');
            title.classList.add('title');
            body.classList.add('body');
            id.classList.add('id');
            title.innerText = post.title;
            body.innerText = post.body;
            id.innerText = 'id:' + post.id + ' - ' + 'userId:' + post.userId;
            div_post.append(title, body, id);

}})

let wrapperComments = document.getElementsByClassName('wrapper_com')[0];
fetch('https://jsonplaceholder.typicode.com/comments')
    .then(response => response.json())
    .then(comments => {
        for (const comment of comments) {
            let div_comment = document.createElement('div');
            div_comment.classList.add('comment');
            wrapperComments.append(div_comment);
            let name = document.createElement('div');
            let body_com = document.createElement('div');
            let id_post = document.createElement('div');
            name.classList.add('name');
            body_com.classList.add('body_com');
            id_post.classList.add('id_post');
            name.innerText = 'Name: ' + comment.name + '\nEmail: ' + comment.email;
            body_com.innerText = comment.body;
            id_post.innerText = 'id:' + comment.id + ' - ' + 'idPost:' + comment.postId;
            div_comment.append(name,body_com,id_post);
        }
        })