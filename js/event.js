
document.getElementById('post-comments').addEventListener('click', function(){

    var commentBox = document.getElementById('new-comments');

    var newComments = document.createElement('p');
    newComments.innerText = commentBox.value;

    var commentContainer = document.getElementById('comments-container');
    commentContainer.appendChild(newComments);

    commentBox.value = '';
    })