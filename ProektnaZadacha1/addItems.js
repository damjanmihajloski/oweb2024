document.getElementById('addPostButton').addEventListener('click', function() {
    let imageUrl = prompt("Enter the URL of the image:");
    if (!imageUrl) return;

    let articleName = prompt("Enter the name of the article:");
    let newElement = createNewElement(imageUrl, articleName);

    let containers = document.getElementsByClassName('mycontainer');
    let lastContainer = containers[containers.length - 1];

    if (!lastContainer || lastContainer.children.length >= 3) {
        let newContainer = document.createElement('div');
        newContainer.className = 'mycontainer';
        document.body.appendChild(newContainer);
        newContainer.appendChild(newElement);
    } else {
        lastContainer.appendChild(newElement);
    }
});

function createNewElement(imageUrl, articleName) {
    let elementDiv = document.createElement('div');
    elementDiv.className = 'elements';

    let titleH2 = document.createElement('h2');
    titleH2.textContent = articleName || 'Unnamed Article';

    let image = document.createElement('img');
    image.src = imageUrl;
    image.alt = 'Added Image';

    let infoDiv = document.createElement('div');
    infoDiv.className = 'info';

    let commentInput = document.createElement('input');
    commentInput.type = 'text';
    commentInput.placeholder = 'Add a comment';
    commentInput.addEventListener('keypress', function(e) {
        if (e.key === 'Enter') {
            let comment = commentInput.value.trim();
            if (comment) {
                addComment(comment, commentSection);
                commentInput.value = '';
            }
        }
    });

    let likeIcon = document.createElement('i');
    likeIcon.className = 'bx bx-like';
    likeIcon.addEventListener('click', function() {
        this.nextElementSibling.textContent = parseInt(this.nextElementSibling.textContent) + 1;
    });

    let likeCount = document.createElement('span');
    likeCount.className = 'like-count';
    likeCount.textContent = '0';

    let commentSection = document.createElement('div');
    commentSection.className = 'comment-section';

    infoDiv.appendChild(commentInput);
    infoDiv.appendChild(likeIcon);
    infoDiv.appendChild(likeCount);

    elementDiv.appendChild(titleH2);
    elementDiv.appendChild(image);
    elementDiv.appendChild(infoDiv);
    elementDiv.appendChild(commentSection);

    return elementDiv;
}

function addComment(comment, commentSection) {
    let commentDiv = document.createElement('div');
    commentDiv.textContent = comment;
    commentSection.appendChild(commentDiv);
}



document.querySelectorAll('.info .bx-like').forEach(likeIcon => {
    likeIcon.addEventListener('click', function() {
        let likeCount = this.nextElementSibling;
        likeCount.textContent = parseInt(likeCount.textContent) + 1;
    });
});


    
