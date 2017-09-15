/*
This is empty on purpose! Your code to build the resume will go here.
 */
 // va
 // $("#main").append("Mark Krake");
 
 // [string.replace([old], [new])

/* 
 var email = "mark.krake@metas.de";
 var newEmail = email.replace("metas.de", "metasfresh.com");
 
 console.log(email);
 console.log(newEmail);
 
 var awesomeThoughts = "My name is Mark and I am AWESOME!";
 var funThoughts = awesomeThoughts.replace("AWESOME", "having fun");
 
 $("#main").append(funThoughts);
 */
 
 name = "Mark Krake";
 role = "ERP Nerd"
 
 var formattedName = HTMLheaderName.replace("%data%", name);
 var formattedRole = HTMLheaderRole.replace("%data%", role);
 
 $("#header").prepend(formattedRole);
 $("#header").prepend(formattedName);
 
 var s = "audacity";

var udacityizer = function(s) {  
    // Right now, the variable s === "audacity"
    // Manipulate s to make it equal to "Udacity"
    // Your code goes here!
	s = s.replace("u", "U").slice(1);
	
    return s;
};

// Did your code work? The line below will tell you!
console.log(udacityizer(s));
