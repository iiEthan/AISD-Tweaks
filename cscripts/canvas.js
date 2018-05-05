/**
Copyright 2018 MarioCMFlys

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
**/

// Edit the dashboard cards
if(window.location.pathname == "/"){
  var aisdDBCards = document.querySelectorAll('div.ic-DashboardCard__header > a.ic-DashboardCard__link');
  for(j = 0; j < aisdDBCards.length; j++){
    i = aisdDBCards[j];
    i.href = i.href+"/modules";
    i.onclick = 'window.location = "'+i.href+'";';
  }
}

// Edit the ConnectED button
if(window.location.pathname.startsWith("/courses/")){
  var aisdCourse = document.querySelector('li.section > a[title="Home"]').href;
  var aisdConEd = document.querySelector('li.section > a[title="ConnectED"]');
  var aisdConEdLoc = aisdConEd.href;
  aisdConEd.parentElement.remove();

  var aisdSectionTabs = document.querySelector('nav > ul#section-tabs'); // section-tabs
  var aisdSectionName = document.createElement("p");
  aisdSectionName.style = "color: hsla(207,4%,40%,1);font-size:9pt;margin-top:20px;margin-bottom:0px;margin-left:5px;";
  aisdSectionName.innerHTML = "AISD TWEAKS";
  aisdSectionTabs.appendChild(aisdSectionName);

  var aisdConEdSrc = document.createElement("li");
  aisdConEdSrc.classList.add("section");
  var aisdConEd = document.createElement("a");
  aisdConEd.innerHTML = "ConnectED";
  aisdConEd.title = "ConnectED";
  aisdConEd.href = aisdConEdLoc;
  //aisdConEd.style.color = "#7A8085";
  /**aisdConEd.addEventListener("click", function(){
    if(confirm("Press OK to open ConnectED")){
      window.location = aisdConEdLoc;
    }
  });**/

  // People / users link
  if(document.querySelector('li.section > a[title="People"]')){
    document.querySelector('li.section > a[title="People"]').remove();
  }
  aisdPeopleClass = "";
  if(window.location.pathname.endsWith("/users") || window.location.pathname.endsWith("/groups")){aisdPeopleClass = "active";}
  aisdSectionTabs.innerHTML = aisdSectionTabs.innerHTML+'<li class="section"><a href="'+aisdCourse+'/users" class="'+aisdPeopleClass+'" tabindex="0" title="People">People</a></li>';
  // Append the ConnectED link
  aisdSectionTabs.appendChild(aisdConEdSrc);
  aisdConEdSrc.appendChild(aisdConEd);
}

// Edit the navbar courses
document.getElementById("global_nav_courses_link").addEventListener('click', function(){
  setTimeout(function(){
    var aisdNavCrs = document.querySelectorAll('li > span > a[href^="/courses/"]');
    for(j = 0; j < aisdNavCrs.length; j++){
      i = aisdNavCrs[j];
      i.href = i.href+"/modules";
    }
  }, 70);
});