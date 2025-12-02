document.addEventListener("DOMContentLoaded", function () {
    const commentsDisplay = document.getElementById("comments-display");

    fetch("comments.json")
        .then((response) => response.json())
        .then((data) => {
            commentsDisplay.innerHTML = "";

            data.reverse().forEach((comment) => {
                const div = document.createElement("div");
                div.classList.add("comment-box");

                div.innerHTML = `
                    <p><strong>${comment.name}</strong> 
                    <span style="font-size:12px; color:#666">(${comment.time})</span></p>
                    <p>${comment.comment}</p>
                    <hr>
                `;
                commentsDisplay.appendChild(div);
            });
        })
        .catch((err) => {
            commentsDisplay.innerHTML = "<p>No comments yet.</p>";
        });
});

