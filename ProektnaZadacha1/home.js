document.addEventListener("DOMContentLoaded", function() {
    document.querySelectorAll(".all-products-button").forEach(function(button) {
        button.addEventListener("click", function() {
            window.location.href = "allproducts.html";
        });
    });
});


document.addEventListener('DOMContentLoaded', function() {
    // Handle comments
    document.querySelectorAll('.info input[type="text"]').forEach(inputField => {
        inputField.addEventListener('keypress', function(e) {
            if (e.key === 'Enter' && this.value.trim() !== '') {
                addComment(this.value, this.parentElement);
                this.value = ''; 
            }
        });
    });

    // Handle likes
    document.querySelectorAll('.info .bx-like').forEach(likeIcon => {
        likeIcon.addEventListener('click', function() {
            let likeCount = this.nextElementSibling;
            likeCount.textContent = parseInt(likeCount.textContent) + 1;
        });
    });
});

function addComment(comment, infoDiv) {
    let commentDiv = document.createElement('div');
    commentDiv.textContent = comment;
    commentDiv.classList.add('comment');
    infoDiv.appendChild(commentDiv);
}

document.addEventListener('DOMContentLoaded', function() {
    setTimeout(function() {
        document.getElementById('ratingPopup').style.display = 'flex';
    }, 10000);

    document.querySelector('.close-btn').addEventListener('click', function() {
        document.getElementById('ratingPopup').style.display = 'none';
    });

    let stars = document.querySelectorAll('.star-rating .bx');
    stars.forEach(star => {
        star.addEventListener('click', function() {
            let rating = this.getAttribute('data-value');
            alert("You rated us " + rating + " stars!"); // Placeholder action
            document.getElementById('ratingPopup').style.display = 'none';
        });
    });
});


