"use strict";
// IntroToJS.js

// The 7ExternalScript.html - Button click event handler.
function GoToInternalScript()
{
  //window.location.href = "6InternalScript.html";
  location.href = "6InternalScript.html";
}

function ShowWindowValues()
{
  //let elem = document.getElementById("windowValues");
  //let elem = window.windowValues;
  let elem = windowValues;
  //windows.elem.innerHTML = "Window Values<br />";
  elem.innerHTML = "Window Values<br />";
  elem.innerHTML += "document...<br />";
  elem.innerHTML += "location...<br />";
  elem.innerHTML += `&nbsp;&nbsp;location.href: ${location.href} <br />`;
}

function ShowDocumentValues()
{
  //let elem = document.getElementById("documentValues");
  //let elem = window.documentValues;
  let elem = documentValues;

  elem.innerHTML = "Document Values<br />";
  //elem.innerHTML += `nodeType: ${window.document.nodeType}<br />`;
  elem.innerHTML += `nodeType: ${document.nodeType}(Document)<br />`;
  elem.innerHTML += `nodeName: ${document.nodeName}<br />`
  elem.innerHTML += "documentElement(html)...<br />";
  elem.innerHTML += "head...<br />";
  elem.innerHTML += "body...<br />";
}

function ShowParagraphValues()
{
  //let elem = document.getElementById("paragraphValues");
  //let elem = window.paragraphValues;
  let elem = paragraphValues;
  elem.innerHTML = "Paragraph Values<br />";
  elem.innerHTML += `nodeType: ${elem.nodeType}(Element)<br />`;
  elem.innerHTML += `tagName: ${elem.tagName}<br />`
  elem.innerHTML += `localName: ${elem.localName}<br />`
  elem.innerHTML += `id: ${elem.id}<br />`
  elem.innerHTML += `className: ${elem.className}<br />`
}

class LJCTitleClass
{
  // Initializes an object instance.
  constructor()
  {
  }

  // Adds the required event handler assignment.
  AddEvents()
  {
    //let pageTitle = document.getElementById("pageTitle");
    pageTitle.addEventListener("click", this.TitleClick.bind(this));
  }

  // The title click event handler.
  TitleClick()
  {
    alert("The Title was clicked.");
  }
}
