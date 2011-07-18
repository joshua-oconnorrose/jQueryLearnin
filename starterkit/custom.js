//jQuery(document).ready(function(){ or
$(function() {
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
   
   // squeezing two jobs in one find the dd in the faq id and hide them then find the dt's in the faq id and set the slide toggle function
	
	// in english in id Faq find tag dd and hide it, then find the dt tag and put an onclick 
	// function that finds the next sibling of dt and toggle it they say that chaining is better for performance
	$('#faq').find('dd').hide().end().find('dt').click(function() {
     $(this).next().slideToggle();
   });
/* here's a bit of a walk through what we did before
   $('#faq').find('dd').hide();
   $('#faq').find('dt').click(function() {
     $(this).next().slideToggle();
   });
*/
// this is the hover both times note function() one
   $("a").hover(function(){
     $(this).parents("p").addClass("highlight");
   },function(){
     $(this).parents("p").removeClass("highlight");
   });
   
   //ajax time oh yeah uh huh boot shedoobee
   
   // generate markup
   $("#rating").append(" Please rate: ");
   
   for ( var i = 1; i <= 5; i++ )
     $("#rating").append("<a href='#'>" + i + "</a> ");
   
   // add markup to container and apply click handlers to anchors
   $("#rating a").click(function(e){
     // stop normal link click
     e.preventDefault();
     
     // send request
     $.post("rate.php", {rating: $(this).html()}, function(xml) {
       // format and output result
       $("#rating").html(
         "Thanks for rating, current average: " +
         $("average", xml).text() +
         ", number of votes: " +
         $("count", xml).text()
       );
     });
   });
/*
	A very common problem encountered when loading content by Ajax is this: 
	When adding event handlers to your document that should also apply to the loaded content, 
	you have to apply these handlers after the content is loaded. To prevent code duplication, 
	you can delegate to a function. 
*/   
   function addClickHandlers() {
   $("a.remote", this).click(function() {
     $("#target").load(this.href, addClickHandlers);
   });
}
 
 	$(document).ready(addClickHandlers);

/* I'm not going to pretend to understand this just yet

	here's the thing its the term callback that I don't get

   Another common problem with callbacks are parameters. 
   You have specified your callback but need to pass an extra parameter. 
   The easiest way to achieve this is to wrap the callback inside another function:
*/
	 // get some data
	 var foobar = "...";
	 
	 // specify handler, it needs data as a paramter
	 function handler(data) {
	   //...
	 }
	 
	 // add click handler and pass foobar!
	 $('a').click(function(){
	   handler(foobar);
	 });
	 
	 // if you need the context of the original handler, use apply:
	 $('a').click(function(){
	   handler.apply(this, [foobar]);
	 });
   
   // look you can make stuff move
   /*
$("a").toggle(function(){
     $(".stuff").hide('slow');
   },function(){
     $(".stuff").show('fast');
   });
   
*/
   $("a").toggle(function(){
     $(".stuff").animate({ height: 'hide', opacity: 'hide' }, 'slow');
   },function(){
     $(".stuff").animate({ height: 'show', opacity: 'show' }, 'slow');
   });
});
