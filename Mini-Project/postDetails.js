let id_post = localStorage.getItem('post_id');
let url = 'https://jsonplaceholder.typicode.com/posts/' + id_post;
fetch(url)
    .then(response => response.json())
    .then(post =>
    {
        let div = document.createElement('div');
        div.classList.add('div');
        let title = document.createElement('div');
        title.classList.add('title');
        let body = document.createElement('div');
        body.classList.add('body');
        let comments_div = document.createElement('div')
        let com_word = document.createElement('div')
        com_word.innerText = 'Comments:'
        com_word.classList.add('com_word');
        comments_div.classList.add('comments_div')
        document.body.append(div);
        div.append(title, body,com_word, comments_div);
        title.innerText = post.title;
        body.innerText = post.body;


        let url_comments = url + '/comments'

        fetch(url_comments)
            .then(response => response.json())
            .then(comments => {
                for (const comment of comments) {
                    let comment_div = document.createElement('div')
                    comment_div.classList.add('comments')
                    comments_div.append(comment_div);
                    let com_name = document.createElement('div')
                    com_name.classList.add('com_name');
                    let com_email = document.createElement('div')
                    com_email.classList.add('com_email')
                    let com_body = document.createElement('div')
                    com_body.classList.add('com_body');
                    com_name.innerText = comment.name;
                    com_email.innerText = comment.email;
                    com_body.innerText = comment.body;
                    comment_div.append(com_name,com_email,com_body);


                }
            });
    })