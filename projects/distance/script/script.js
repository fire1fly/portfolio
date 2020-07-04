document.addEventListener("DOMContentLoaded", () => {
  const createPostInput = document.querySelector(".create-post-input"),
        postLikeList = document.querySelectorAll(".post-like"),
        likeCountList = document.querySelectorAll(".like-count"),
        postList = document.querySelectorAll(".post"),
        shareBtnsList = document.querySelectorAll(".post-footer-item__share"),
        shareModalList = document.querySelectorAll(".share-modal");
  
  const shareBtnsArray = Array.prototype.slice.call(shareBtnsList),
        likeCountArray = Array.prototype.slice.call(likeCountList),
        postLikeArray = Array.prototype.slice.call(postLikeList),
        postArray = Array.prototype.slice.call(postList),
        shareModalArray = Array.prototype.slice.call(shareModalList);

  const handlerCreatePost = event => {
    const target = event.target;
    if ((!target.classList.contains("create-post-input") && (createPostInput.textContent === '')) || 
      (event.keyCode === 27 && (createPostInput.textContent === ''))) {
      createPostInput.textContent = 'What’s on your mind, Daniel?';
      createPostInput.style.color = "#8C8C8C";
    }
    if (event.keyCode === 27) createPostInput.blur();
  };

  createPostInput.addEventListener("click", (event) => {
    if (createPostInput.textContent === 'What’s on your mind, Daniel?') {
      createPostInput.textContent = "";
    }
    createPostInput.style.color = "#595959";
  });

  postLikeArray.forEach((elem, i) => {
    let index = i;
    elem.addEventListener("click", () => {
      let like = likeCountArray[index].textContent; 
      likeCountArray[index].textContent = ++like;
    });
  });

  shareBtnsArray.forEach((elem, i) => {
    let index = i;
    elem.addEventListener("mouseover", event => {
      const shareBtnTarget = event.target.closest('.post-footer-item__share');
      if (shareBtnTarget) {
        shareModalArray[index].classList.remove('disFadeUpShareModal');
        shareModalArray[index].classList.add('fadeUpShareModal');
      }
    });
  });

  postArray.forEach((elem, i) => {
    let index = i;
    elem.addEventListener("mouseout", (event) => {
      const shareBtnTarget = event.target.closest('.post-footer-item__share'),
            shareModalTarget = event.target.closest('.share-modal');
      if (!shareBtnTarget && !shareModalTarget) {
        shareModalArray[index].classList.remove('fadeUpShareModal');
        shareModalArray[index].classList.add('disFadeUpShareModal');
      }
    });

    document.addEventListener("keyup", event => {
      if (event.keyCode === 27) {
        shareModalArray[index].classList.remove('fadeUpShareModal');
        shareModalArray[index].classList.add('disFadeUpShareModal');
      }
    });
  });

  document.addEventListener("click", handlerCreatePost);
  document.addEventListener("keyup", handlerCreatePost);
});