
//functions re-usables
//dom hide or show function
function dom_hide_show(x, y) { 

//hid <div>
if(x=="hide"){
return document.getElementById(y).style.display="none";
}

if(x=="show"){ //show <div>

return document.getElementById(y).style.display="block";
}
}
//dom content change function
function dom_change(x,y){
    return document.getElementById(x).innerHTML=y;
}
//background color change
function background_color(x,y){
return document.getElementById(x).style.backgroundColor=y;
}

//reusables --- end ---

//menu open
document.getElementById("menu").onclick=function(){
        dom_change("announce","menu");
        dom_hide_show("hide", "menu_text");
        dom_hide_show("hide", "about_me_text_container");
        dom_hide_show("hide", "projects_text");
        dom_hide_show("hide", "contact_me_text");
        dom_hide_show("hide", "skills_text")
        dom_hide_show("show","menu_pop_container");
}
//about me choose
document.getElementById("about_me").onclick=function(){
        dom_change("announce","about me");
        dom_hide_show("hide","menu_pop_container");
        dom_hide_show("hide", "skills_text");
        dom_hide_show("hide", "projects_text");
        dom_hide_show("hide", "contact_me_text");
        dom_hide_show("show", "menu_text");
        dom_hide_show("show", "about_me_text_container"); }
//skills
document.getElementById("skills").onclick=function(){
        dom_change("announce","skills");
        dom_hide_show("hide","menu_pop_container"); 
        dom_hide_show("hide", "about_me_text_container");
        dom_hide_show("hide", "projects_text");
        dom_hide_show("hide", "contact_me_text");
        dom_hide_show("show", "menu_text");
        dom_hide_show("show", "skills_text");

}
//project
document.getElementById("projects").onclick=function(){
        dom_change("announce","projects");
        dom_hide_show("hide","menu_pop_container"); 
        dom_hide_show("hide", "about_me_text_container");
        dom_hide_show("hide", "skills_text");
        dom_hide_show("hide", "contact_me_text");
        dom_hide_show("show", "menu_text");
        dom_hide_show("show", "projects_text");

}
//contact me
document.getElementById("contact_me").onclick=function(){
        dom_change("announce","contact me");
        dom_hide_show("hide","menu_pop_container"); 
        dom_hide_show("hide", "about_me_text_container");
        dom_hide_show("hide", "projects_text");
        dom_hide_show("hide", "skills_text");
        dom_hide_show("show", "menu_text");
        dom_hide_show("show", "contact_me_text");
}

//submit button
document.getElementById("submit").onclick=function(){
         background_color("submit", "green");
         dom_change("submit", "Message transmitted");
         
 }
 
 