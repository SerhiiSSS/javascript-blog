// document.getElementById('test-button').addEventListener('click', function(){
//     const links = document.querySelectorAll('.titles a');
//     console.log('links:', links);

// const { active } = require("browser-sync");

//   });
{
  'use strict';
    
  const titleClickHandler = function(event){
    const clickedElement = this;
    event.preventDefault();

    console.log('Link was clicked!');
    console.log('links:', event);
    

    /*[DONE] remove class 'active' from all article links  */
    const activeLinks = document.querySelectorAll('.titles a.active');
    
    for(let activeLink of activeLinks){
      activeLink.classList.remove('active');
    }
  
    /*[DONE] add class 'active' to the clicked link */
    clickedElement.classList.add('active');
    console.log('clickedElement (with plus): ' + clickedElement);
        
    /*DONE] remove class 'active' from all articles */
    const activeArticles = document.querySelectorAll('.posts article.active');
    for(let activeArticle of activeArticles){
      activeArticle.classList.remove('active');
    }
  
    /*[DONE] get 'href' attribute from the clicked link */
    const articleSelector = clickedElement.getAttribute('href');
    console.log(articleSelector);
  
    /*[DONE] find the correct article using the selector (value of 'href' attribute) */
    const targetArticle = document.querySelector(articleSelector);
    console.log(targetArticle);  
  
    /*[DONE]add class 'active' to the correct article */
    targetArticle.classList.add('active');


  } ;
   
 

  const optArticleSelector = '.post',
    optTitleSelector = '.post-title',
    optTitleListSelector = '.titles',
    optArticleTagSelector = '.post-tags .list';
    

  function generateTitleLinks(){

    /*[DONE] remove contents of titleList */
    const titleList = document.querySelector(optTitleListSelector);
    console.log(titleList);

    
    function clearMessages(){
      titleList.innerHTML = '';
    }


    /*[DONE] for each article */
    const articles = document.querySelectorAll(optArticleSelector);
    console.log(articles);

    let html = '';

    for (let article of articles) {
      console.log(article);
  
      /*[DONE] get the article id */
      const articleId = article.getAttribute('id');
      console.log(articleId);
 
      /*[DONE]find the title element */
      const articleTitle = article.querySelector(optTitleSelector).innerHTML;
      console.log(articleTitle);
      /*[DONE]get the title from the title element */
      const linkHTML = '<li><a href="#' + articleId + '"><span>' + articleTitle + '</span></a></li>';
      console.log(linkHTML);

      /*[DONE] create HTML of the link */
      titleList.innerHTML = titleList.innerHTML + linkHTML;

      /*[DONE] insert link into titleList */
      html = html + linkHTML;
    
    }
  
  }
  generateTitleLinks();
    const links = document.querySelectorAll('.titles a');
      for(let link of links){
        link.addEventListener('click', titleClickHandler);
      }
 
} 
function generateTags(){

  /* find all articles */
  const articles = document.querySelectorAll(optArticleSelector);
  
  /* START LOOP: for every article: */
  for(let article of articles){
    
    /* find tags wrapper */
    const titleList = article.querySelector(optArticleTagsSelector);

    /* make html variable with empty string */
    let html = '' ;
    /* get tags from data-tags attribute */
    const articleTags = article.getAttribute('data-tags');
    console.log(articleTags); 
    /* split tags into array */
    const articleTagsArray = articleTags.split(' ');
    console.log(articleTagsArray);
    /* START LOOP: for each tag */
    for(let tag of articleTagsArray){
    console.log(tag) 
    /* generate HTML of the link */
    const taglinkHTML = '<li><a href="#tag-' + tag + '"><span>' + tag + '</span></a></li>';
    /* add generated code to html variable */
    html = html + tagLinkHTML;
    /* END LOOP: for each tag */
    }
    /* insert HTML of all the links into the tags wrapper */
    titleList.innerHTML = html;
  /* END LOOP: for every article: */
  }
}

generateTags(); 
