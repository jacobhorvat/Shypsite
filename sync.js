.videoWrapper {
  position: relative;
  padding-bottom: 56.25%; /* 16:9 */
  padding-top: 25px;
  height: 0;
  
}
.videoWrapper iframe {
  position: absolute;
  top: 0;
  left: -80px;
  width: 100%;
  height: 100%;
}
  .articles{
    position: relative;
    height:450;
    width:200;
  }
  #tutorialTitle{
    font-size: 40px;
    text-align: center;
    font-family: "Comic Sans MS", cursive, sans-serif;
  }
  .articles{
    left: 550px;
    top:-475px;
  }



.js article{
  position:absolute;
  left: -99999px;
}
.js article.current{
  position:relative;
  left:0;
  height:50px;
  width:50px;
}


/*
 *  CSS3 Media queries
 */

@media all and (orientation:portrait) { 
  
}

@media all and (orientation:landscape) { 
  
}

@media screen and (max-device-width: 200px) {
  
}

@media print {
  * { background: transparent !important; color: #444 !important; text-shadow: none !important; }
  a, a:visited { color: #444 !important; text-decoration: underline; }
  a:after { content: " (" attr(href) ")"; } 
  abbr:after { content: " (" attr(title) ")"; }
  .ir a:after { content: ""; }  /* Don't show links for images */
  pre, blockquote { border: 1px solid #999; page-break-inside: avoid; }
  thead { display: table-header-group; } /* css-discuss.incutio.com/wiki/Printing_Tables */ 
  tr, img { page-break-inside: avoid; }
  @page { margin: 0.5cm; }
  p, h2, h3 { orphans: 3; widows: 3; }
  h2, h3{ page-break-after: avoid; }
}

