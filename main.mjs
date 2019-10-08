// import * as townData from '/townData.mjs';
import { townData } from '/townData.mjs';


// Replaces all the spaces in town names with underscores "_"
for (let i = 0; i < townData.length; ++i) {
  let wiki_town_name = townData[i].townName;

  if (wiki_town_name.match(/ /g)) {
    for letter in wiki_town_name {
      if (wiki_town_name[letter].match(/ /g)) wiki_town_name[letter] = "_";
    }
  }

  townData[i].wikiLink = wiki_town_name
}



document.onload = function () {
  for (let i = 0; i < townData.length; i++) {
    let parent = document.createElement("div"),
    townTitle = document.createElement("a"),
    townDescription = document.createElement("div"),
    townPic = document.createElement("img");

    townTitle.innerHTML = `${ townData[i].townName } (${ townData[i].country })`;
    townTitle.setAttribute(href, `https://en.wikipedia.org/wiki/${ townData[i].wikiLink }`);

    townDescription.innerHTML = townData[i].description;
    townPic.setAttribute(src, townData[i].pictureUrl);

    parent.appendChild(townTitle)
    parent.appendChild(townDescription)
    parent.appendChild(townPic)
    document.querySelector("#cityList").appendChild(parent)
  }
}
