var bio = {
	"name": "Kevin N. Glick",
	"role": "Front-End Web Developer",
	"contacts": {
		"skypePhone": "<a href='tel:3304604389'>330-460-4389</a>",
		"mobile": "<a href='tel:89197737781'>+7(919)773-77-81</a>",
		"email": "<a href='mailto:kevin.n.glick@gmail.com'>kevin.n.glick@gmail.com</a>",
		"github": "<a href='https://github.com/Caoimhin89'>Caoimhin89</a>",
		"linkedIn": "<a href='https://www.linkedin.com/in/kevinglick89'>View Profile</a>",
		"location": "<a href='#'>Moscow, Russia</a>"
	},
	"welcomeMessage": "",
	"skills": ["Fluent Russian", "HTML5 / CSS3", "JavaScript", "jQuery", "KnockoutJS", "JasmineJS", "JSON", "AJAX", "Translation & Localization", "Economics", "ESL Teaching", "Writing & Editing"],
	"bioPic": "images/me.png"
};

var work = {
	"jobs": [
	{
		"employer": "Denis' School",
		"title": "English Teacher",
		"location": "Moscow, Russia",
		"dates": "October 2014 - Present",
		"description": "As an English teacher at Denis' School, I taught classes to a variety of corporate clients right in their offices. I had a mixture of individual students as well as small and medium-sized groups. I prepared daily lesson plans, organized teaching materials, kept careful academic and attendence records, designed and administered tests, and gave regular feedback to the students. The lessons were customized to be relevant and engaging for the particular needs of each company. The companies for whom I taught classes includes Agilent Technologies, Syngenta, Intel, LukOil, Yandex, and Johnson&Johnson."
	},
	{
		"employer": "ZeroChaos",
		"title": "Ads Quality Rater (Russian Language)",
		"location": "Orlando, Florida",
		"dates": "2014 - 2015",
		"description": "As an Ads Quality Rater, I reviewed Russian and English language web content according to various criteria. Primarily, I reviewed adverts that appear at the top of Google search results pages and compared them with the webpages to which they link in order to confirm the honesty of the advertiser as well as ensure the security of users' computers when visiting the landing pages. I also checked the relevance of the advert and landing page to the user's search query. Additionally, I was sometimes tasked with classifying various webpages by their content and interpretting the user's likely intent in navigating to a given webpage."
	}
	]
};

var projects = {
	"projects": [
	{
		"title": "Project Portfolio",
		"dates": "June 7, 2015",
		"description": "I created a responsive project portfolio, which can be cleanly rendered on a variety of devices with different screen sizes by utilizing the grid system of page organization, the bootstrap CSS library, media queries, some custom CSS to fill in the missing pieces, and a little bit of help from jQuery.",
		"images": []
	},
	{
		"title": "Curriculum Vitae",
		"dates": "June 21, 2015",
		"description": "For this project I used JavaScript to populate a pre-made HTML resume template with my own data.",
		"images": []
	},
	{
		"title": "Classic Arcade Game",
		"dates": "July 8, 2015",
		"description": "I took advantage JavaScript's object-oriented features and the HTML5 Canvas API to create a clone of the classic arcade game Frogger.",
		"images": []
	},
	{
		"title": "Website Optimization",
		"dates": "TBA",
		"description": "N/A",
		"images": []
	},
	{
		"title": "Interactive City Map",
		"dates": "TBA",
		"description": "N/A",
		"images": []
	}
	]
};

var education = {
	"schools": [
	  {
	  	"name": "Ohio State University",
	  	"degree": "B.A.",
	  	"dates": "2010 - 2013",
	  	"location": "Columbus, Ohio",
	  	"major": "Russian Studies"
	  },
	  {
	  	"name": "Bashkir State University (Башкирский государственный университет)",
	  	"degree": "Certificate for Successfully Passing the Test of Russian as a Foreign Language at the Second Certification Level (TORFL-II)",
	  	"dates": "2012 - 2013",
	  	"location": "Ufa, Russia",
	  	"major": "Russian as a foreign language"
	  },
	  {
	  	"name": "Russian State University for the Humanities (Российский государственный гуманитарный университет)",
	  	"degree": "Certificate of Successful Completion",
	  	"dates": "2011",
	  	"location": "Moscow, Russia",
	  	"major": "Russian Language & Cultural Immersion"
	  }
	],
	"onlineClasses": [
	  {
	  	"title": "The Mises Curriculum",
	  	"school": "The Ludwig von Mises Academy",
	  	"dates": "2015 - Present",
	  	"url": "<a href='http://academy.mises.org/courses/curriculum/'>Click here for more info.</a>"
	  },
	  {
	  	"title": "Front-End Web Development Nanodegree",
	  	"school": "Udacity",
	  	"dates": "2015",
	  	"url": "<a href='http://www.udacity.com'>Click here for more info.</a>"
	  }
	]
};

bio.display = function() {
	var name = "Kevin N. Glick";
	var myRole = "Front-End Web Developer";
	var formattedName = HTMLheaderName.replace("%data%", name);
	var formattedRole = HTMLheaderRole.replace("%data%", myRole);
	$("#header").prepend(formattedRole);
	$("#header").prepend(formattedName);
	if (bio.welcomeMessage.length > 0) {
		var formattedWelcome = HTMLWelcomeMsg.replace("%data%", bio.welcomeMessage);
		$("#header").append(formattedWelcome);
	}
	var formattedPic = HTMLbioPic.replace("%data%", bio.bioPic);
	$("#header").append(formattedPic);

	if (bio.skills.length > 0) {
		$("#header").append(HTMLskillsStart);
		for (var i = 0; i < bio.skills.length; i++) {
			var formattedSkill = HTMLskills.replace("%data%", bio.skills[i]);
			$("#skills").append(formattedSkill);
	}
}
	var formattedskypePhone = HTMLskypePhone.replace("%data%", bio.contacts.skypePhone);
	$("#topContacts").append(formattedskypePhone);
	$("#footerContacts").append(formattedskypePhone);
	var formattedMobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
	$("#topContacts").append(formattedMobile);
	$("#footerContacts").append(formattedMobile);
	var formattedEmail = HTMLemail.replace("%data%", bio.contacts.email);
	$("#topContacts").append(formattedEmail);
	$("#footerContacts").append(formattedEmail);
	var formattedGithub = HTMLgithub.replace("%data%", bio.contacts.github);
	$("#topContacts").append(formattedGithub);
	$("#footerContacts").append(formattedGithub);
	var formattedLinkedIn = HTMLlinkedIn.replace("%data%", bio.contacts.linkedIn);
	$("#topContacts").append(formattedLinkedIn);
	$("#footerContacts").append(formattedLinkedIn);
	var formattedLocation = HTMLlocation.replace("%data%", bio.contacts.location);
	$("#topContacts").append(formattedLocation);
	$("footerContacts").append(formattedLocation);
};

work.display = function() {
	for (var job in work.jobs) {
		$("#workExperience").append(HTMLworkStart);
		var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
		var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title);
		var formattedLocation = HTMLworkLocation.replace("%data%", work.jobs[job].location);
		var formattedDates = HTMLworkDates.replace("%data%", work.jobs[job].dates);
		var formattedDescription = HTMLworkDescription.replace("%data%", work.jobs[job].description);
		var formattedEmployerTitleLocDateDescrip = formattedEmployer + formattedTitle + formattedLocation + formattedDates + formattedDescription;
		$(".work-entry:last").append(formattedEmployerTitleLocDateDescrip);
	}
};

projects.display = function() {
	for (var project in projects.projects) {
		$("#projects").append(HTMLprojectStart);
		var formattedTitle = HTMLprojectTitle.replace("%data%", projects.projects[project].title);
		$(".project-entry:last").append(formattedTitle);
		var formattedDates = HTMLprojectDates.replace("%data%", projects.projects[project].dates);
		$(".project-entry:last").append(formattedDates);
		var formattedDescription = HTMLprojectDescription.replace("%data%", projects.projects[project].description);
		$(".project-entry:last").append(formattedDescription);
		
		if (projects.projects[project].images.length > 0) {
			for (var image in projects.projects[project].images) {
				var formattedImage = HTMLprojectImage.replace("%data%", projects.projects[project].images[image]);
				$(".project-entry:last").append(formattedImage);
			}
		}
	}
};

education.display = function() {
	for (var school in education.schools) {
		$("#education").append(HTMLschoolStart);
		var formattedName = HTMLschoolName.replace("%data%", education.schools[school].name);
		$(".education-entry:last").append(formattedName);
		var formattedDegree = HTMLschoolDegree.replace("%data%", education.schools[school].degree);
		$(".education-entry:last").append(formattedDegree);
		var formattedDates = HTMLschoolDates.replace("%data%", education.schools[school].dates);
		$(".education-entry:last").append(formattedDates);
		var formattedLocation = HTMLschoolLocation.replace("%data%", education.schools[school].location);
		$(".education-entry:last").append(formattedLocation);
		var formattedMajor = HTMLschoolMajor.replace("%data%", education.schools[school].major);
		$(".education-entry:last").append(formattedMajor);
	}

	$(".education-entry:last").append(HTMLonlineClasses);

	for (var school in education.onlineClasses) {
		var formattedTitle = HTMLonlineTitle.replace("%data%", education.onlineClasses[school].title);
		$(".education-entry:last").append(formattedTitle);
		var formattedSchool = HTMLonlineSchool.replace("%data%", education.onlineClasses[school].school);
		$(".education-entry:last").append(formattedSchool);
		var formattedDates = HTMLonlineDates.replace("%data%", education.onlineClasses[school].dates);
		$(".education-entry:last").append(formattedDates);
		var formattedURL = HTMLonlineURL.replace("%data%", education.onlineClasses[school].url);
		$(".education-entry:last").append(formattedURL);
	}
};

bio.display();
work.display();
projects.display();
education.display();

$("#mapDiv").append(googleMap);

function inName(name) {
	name = name.trim().split(" ");
	console.log(name);
	name[2] = name[2].toUpperCase();
	name[1] = name[1].toUpperCase();
	name[0] = name[0].slice(0, 1).toUpperCase() + name[0].slice(1).toLowerCase();
	return name[0]+" "+name[1]+" "+name[2];
}
$("#main").append(internationalizeButton);