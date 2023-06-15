const posts = [
    {title: 'post one', body: 'some content for post'},
    {title: 'post two', body: 'some content for post two'}
];


function createPost(post, cb){
    setTimeout(() => {
        posts.push(post);
        cb();
    }, 2000);
}
function getPosts(){
    setTimeout(() =>{
        posts.forEach(post => {
            const div = document.createElement('div');
            div.innerHTML = `<strong>${post.title}</strong> - ${post.body}`;
            document.querySelector('#posts').appendChild(div);
        });
    }, 1000);
}


createPost({title: 'Post 3', body: 'This third post was submitted'}, getPosts);
document.getElementById('getPosts').addEventListener('click', getPosts);