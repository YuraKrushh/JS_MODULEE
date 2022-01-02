fetch('https://jsonplaceholder.typicode.com/posts')
    .then(response => response.json())
    .then(json => {
        for (const one of json) {
            let h = document.createElement('h2');
            h.innerText = one.title;
            let div = document.createElement('div');
            div.innerText = one.body;
            let btn = document.createElement('button');
            btn.innerText = 'Open comments'
            btn.style.marginTop = '5px'
            let divCom = document.createElement('div');
            divCom.style.marginTop = '10px'
            divCom.style.display = 'none'
            document.body.append(h, div, btn,divCom);


            let first_click = true

            btn.onclick = function () {
                if(first_click){
                    h.style.color = 'red';
                    btn.innerText = 'Hide comments'
                fetch('https://jsonplaceholder.typicode.com/comments')
                    .then(response => response.json())
                    .then(json => {
                        for (const elem of json) {
                            if(one.id === elem.postId) {
                                divCom.style.display = 'block';
                                let nameCom = document.createElement('h5');
                                nameCom.innerText = 'Name: ' + elem.name + '  -  ' + 'Email: ' + elem.email ;
                                nameCom.style.marginLeft = '10px'
                                divCom.append(nameCom);
                                let comment = document.createElement('div');
                                comment.style.borderBottom = '2px solid black'
                                comment.style.marginLeft = '15px';
                                comment.style.marginTop = '-30px';
                                comment.style.width = '500px'
                                comment.style.padding = '10px'
                                divCom.append(comment)
                                comment.innerText = elem.body;
                            }
                        }
                    })
                    first_click = false;
            } else if (first_click === false ) {
                   divCom.style.display = 'none';
                    h.style.color = 'black';
                   first_click = 0;
                    btn.innerText = 'Open comments'
                }
                else {
                    divCom.style.display = 'block';
                    h.style.color = 'red';
                    first_click = false;
                    btn.innerText = 'Hide comments'
                }
            }


        }
    })

