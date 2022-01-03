let id_user = localStorage.getItem('user_id');
fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(users => {
        let user = users[id_user - 1];
        let bottom = document.createElement('div');
        bottom.classList.add('bottom');
        let left = document.createElement('div');
        left.classList.add('left');
        let right = document.createElement('right');
        right.classList.add('right');
        let button_post = document.createElement('button');
        button_post.classList.add('button_post')
        button_post.innerText = 'Posts';
        let posts = document.createElement('div');
        posts.classList.add('posts');
        posts.style.display = 'none';
        let posts_status = true;
        let user_div = document.createElement('div');
        user_div.classList.add('user_div');
        let name = document.createElement('div');
        name.classList.add('name');
        let username = document.createElement('div');
        username.classList.add('username');
        let email = document.createElement('div');
        email.classList.add('email');
        let address = document.createElement('div');
        address.classList.add('address');
        let address_h = document.createElement('div');
        address_h.classList.add('address_h');
        let street = document.createElement('div');
        street.classList.add('street');
        let suite = document.createElement('div');
        suite.classList.add('suite');
        let city = document.createElement('div');
        city.classList.add('city');
        let zipcode = document.createElement('div');
        zipcode.classList.add('zipcode');
        let geo = document.createElement('div');
        geo.classList.add('geo');
        let geo_h = document.createElement('div');
        geo_h.classList.add('geo_h');
        let lat = document.createElement('div');
        lat.classList.add('lat');
        let lng = document.createElement('div');
        lng.classList.add('lng');
        let phone = document.createElement('div');
        phone.classList.add('phone');
        let website = document.createElement('div');
        website.classList.add('website');
        let company = document.createElement('div');
        company.classList.add('company');
        let company_h = document.createElement('div');
        company_h.classList.add('company_h');
        let company_name = document.createElement('div');
        company_name.classList.add('company_name');
        let catchPhrase = document.createElement('div');
        catchPhrase.classList.add('catchPhrase');
        let bs = document.createElement('div');
        bs.classList.add('bs');
        document.body.append(user_div);
        user_div.append(name, bottom);
        bottom.append(left,right)
        left.append(username, email, address, phone, website, company, button_post);
        right.append(posts);
        address.append(address_h, street, suite, city, zipcode, geo);
        company.append(company_h, company_name, catchPhrase, bs);
        geo.append(geo_h,lat,lng);
        name.innerText = user.name;
        username.innerText = 'Username: ' + user.username;
        email.innerText = 'Email: ' + user.email;
        address_h.innerText = 'Address:'
        street.innerText = 'Street: ' + user.address.street ;
        suite.innerText = 'Suite: ' + user.address.suite ;
        city.innerText = 'City: ' + user.address.city;
        zipcode.innerText = 'ZipCode: ' + user.address.zipcode;
        geo_h.innerText = 'geo:';
        lat.innerText = 'lat: ' + user.address.geo.lat;
        lng.innerText = 'lng: ' + user.address.geo.lng;
        phone.innerText = 'Phone number: ' + user.phone;
        website.innerText = 'Website: ' + user.website;
        company_h.innerText = 'Company:';
        company_name.innerText = 'Name: ' + user.company.name;
        catchPhrase.innerText = 'CatchPhrase: ' + user.company.catchPhrase;
        bs.innerText = 'BS: ' + user.company.bs;



        button_post.onclick = function () {
                if (posts_status === true){
            posts.style.display = 'block';
            let url = 'https://jsonplaceholder.typicode.com/users/' + id_user + '/posts';
            fetch(url)
                .then(response => response.json())
                .then(json => {
                    for (const post of json) {
                        let post_div = document.createElement('div');
                        post_div.classList.add('post_div');
                        let post_title = document.createElement('div');
                        post_title.classList.add('post_title');
                        post_title.innerText = 'Title: ' + post.title;
                        posts.append(post_div);
                        let button_post_details = document.createElement('button');
                        button_post_details.classList.add('button_post_details');
                        button_post_details.innerText = 'Post details';
                        post_div.append(post_title,button_post_details);


                        button_post_details.onclick = function () {
                                localStorage.setItem('post_id', post.id);
                                document.location =  './postDetails.html'
                        }



                    }

                })
                posts_status = false}
                else if  ( posts_status === false) {
                        posts.style.display = 'none';
                        posts_status = 0;

                }
                else {
                        posts.style.display = 'block';
                        posts_status = false;
                }
        }



    })