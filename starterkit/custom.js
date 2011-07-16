jQuery(document).ready(function() {
	// do something here
	// tests
	// look # means ID
   $("#orderedlist").addClass("red");
   // this says for the ID ordered list get all child li tags
   $("#orderedlist > li").addClass("blue");
   // from the tut  therefore $("#orderedlist").find("li") is mostly the same as $("#orderedlist li"). ORLY k lits see
   //$("#orderedlist li").addClass("blue");
   // wooooot that so helpfull
   // this is for every link
   $("a").click(function() {
     alert("Hello world!");
 	});
 
   // I suppose we should seperat functions # something to not is li:last is any li at the bottom and not just in the scope of th
   // id while > li seems to be only direct child
   $("#orderedlist li:last").hover(function() {
     $(this).addClass("green");
   },function(){
     $(this).removeClass("green");
   });
   // lesson here like almost everything but CF arrays start at 0
	$("#orderedlist2").find("li").each(function(i) {
     $(this).append( " BAM! " + Number(i + 1)  );
   });
	
	// use this to reset a single form
/*
   $("#reset").click(function() {
     $("form")[0].reset();
   });
*/
   // use this to reset several forms at once
   $("#reset").click(function() {
     $("form").each(function() {
       this.reset();
     });
   });
   
   // lets learn about not and what not takes or has
   $("li").not(":has(ul)").css("border", "1px solid black"); 
   
   // demonstration of xpath selector any anchor w/ attribute of name
   $("a[name]").css("background", "#eee" );
   
   // then this one shows the xpath selector with *= which is a like
      $("a[href*='/content/gallery']").click(function() {
     // do something with all links that point somewhere to /content/gallery
   });
});
