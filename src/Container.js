import './Container.css'
import React from 'react';


export default  function Container({currentIndex, changeCitate, quotes, currentBackground, oldIndex, check}) {

    console.log(currentBackground)
    var cssProperties = {
        "--defined-color" : currentBackground.newColor,
        "--defined-color-old" : currentBackground.oldColor
    }

    setTimeout(() => {
        let element = document.getElementsByClassName('quote');
        let element2 = document.getElementsByClassName('author')
        //console.log(element[0])
        element[0].innerHTML = quotes[currentIndex].quote+".";
        element2[0].innerHTML = "- "+quotes[currentIndex].name;
        //console.log(element[0])
    }, 500)
    console.log(check)

    return (
        <div id="quote-box" className="container" style={cssProperties}><div className={`${check === false || check === undefined ? '' : 'animation-text-opacity'}`}><p className="icon quote" id="text">{quotes[oldIndex === null ? currentIndex : oldIndex].quote}.</p>
        <p className='author' id="author">- {quotes[oldIndex === null ? currentIndex : oldIndex].name}</p></div>
        <nav><div><a id="tweet-quote" href={`https://twitter.com/intent/tweet?hashtags=${'quotes'}&text="${quotes[currentIndex].quote}" ${quotes[currentIndex].name}`} target='_blank'><i className="fa-brands fa-square-twitter"></i></a>
        <a href={`https://www.tumblr.com/share?posttype=quote&tags=quotes,freecodecamp&caption=${quotes[currentIndex].name}&content=${quotes[currentIndex].quote}&canonicalUrl=https://www.tumblr.com/buttons&shareSource=tumblr_share_button`} target='_blank'><i className="fa-brands fa-square-tumblr"></i></a></div><button onClick={changeCitate} id="new-quote">New quote</button></nav>
        </div>
        )

}

