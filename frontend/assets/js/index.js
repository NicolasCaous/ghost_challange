const commentTemplate = document.querySelector(
  ".ghc-comments-history template"
);

const newComment = commentTemplate.content.cloneNode(true);
newComment.querySelector(".ghc-comment-image-container img").src =
  "assets/img/profile-pic-1.png";
newComment.querySelector(".ghc-comment-author").textContent = "Rob Hope";
newComment.querySelector(".ghc-comment-timestamp").textContent =
  "・ 45 min ago";
newComment.querySelector(".ghc-comment-text-row-container").textContent =
  "Jeepers now that's a huge release with some big community earnings to back it - it must be so rewarding seeing creators quit their day jobs after monetizing (with real MRR) on the new platform.";
newComment.querySelector(".ghc-comment-button-upvote-count").textContent =
  "(2)";

document.querySelector(".ghc-comments-history").appendChild(newComment);

const newComment2 = commentTemplate.content.cloneNode(true);
newComment2.querySelector(".ghc-comment-image-container img").src =
  "assets/img/profile-pic-2.png";
newComment2.querySelector(".ghc-comment-author").textContent = "Sophie Brecht";
newComment2.querySelector(".ghc-comment-timestamp").textContent =
  "・ Yesterday";
newComment2.querySelector(".ghc-comment-text-row-container").textContent =
  "Switched our blog from Hubspot to Ghost a year ago -- turned out to be a great decision. Looking forward to this update....the in-platform analytics look especially delicious. :)";
newComment2.querySelector(".ghc-comment-button-upvote-count").textContent = "";

document.querySelector(".ghc-comments-history").appendChild(newComment2);
