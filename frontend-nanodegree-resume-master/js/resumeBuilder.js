var bio = {
	"name": "Kevin N. Glick",
	"role": "Front-End Web Developer",
	"contacts": {
		"skypePhone": "330-460-4389",
		"mobile": "+7(919)773-77-81",
		"email": "kevin.n.glick@gmail.com",
		"github": "https://github.com/Caoimhin89",
		"location": "Moscow, Russia"
	},
	"welcomeMessage": "This is my CV.",
	"skills": ["HTML5", "CSS3", "JavaScript", "Fluent Russian", "Translation & Localization", "Economics"],
	"bioPic": "imgages/me.png"
}

var work = {
	"jobs": [
	{
		"employer": "Denis' School",
		"title": "English Teacher",
		"location": "Moscow, Russia",
		"dates": "October 2014 - Present",
		"description": "As an English teacher at Denis' School, I taught classes to a variety of corporate clients right in their offices. I had a mixture of individual students as well as small and medium-sized groups. I prepared daily lesson plans, organized teaching materials, kept careful academic and attendence records, designed and administered tests, and gave regular feedback to the students. The lessons were customized to be relevant and engaging for the particular needs of each company. The companies for whom I taught classes includes Agilent Technologies, Syngenta, Intel, LukOil, Yandex, and Johnson&Johnson.",
		"url": "http://www.dschool.ru/"
	},
	{
		"employer": "ZeroChaos, LLC.",
		"title": "Ads Quality Rater (Russian Language)",
		"location": "Orlando, Florida",
		"dates": "2014 - 2015",
		"description": "As an Ads Quality Rater, I primarily reviewed web adverts that appear at the top of Google search results pages and compared them with the webpages which they link to, in order to ensure the honesty of the advertiser and security of to users' computers when clicking on those links, as well as the advert's and landing page's relevance to the user's search query. I also classified various webpages by content and interpretted the user's likely intent in navigating to a given webpage. I reviewed both English and Russian-language content.",
		"url": "http://www.careerbuilder.com/jobseeker/jobs/jobdetails.aspx?2015=true&job_did=J8Q1WZ6JZ50JQGMNMH7&showNewJDP=yes&IPath=CJR"
	}
	]
}

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
		"dates": "Unknown",
		"description": "For this project I used JavaScript to populate a pre-made HTML resume template with my own data.",
		"images": []
	},
	{
		"title": "Classic Arcade Game",
		"dates": "Unknown",
		"description": "N/A",
		"images": []
	},
	{
		"title": "Website Optimization",
		"dates": "Unknown",
		"description": "N/A",
		"images": []
	},
	{
		"title": "Interactive City Map",
		"dates": "Unknown",
		"description": "N/A",
		"images": []
	}
	]
}

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
}

function displayBio() {
	var name = "Kevin N. Glick";
	var myRole = "Front-End Web Developer";
	var formattedName = HTMLheaderName.replace("%data%", name);
	var formattedRole = HTMLheaderRole.replace("%data%", myRole);
	$("#header").prepend(formattedRole);
	$("#header").prepend(formattedName);
	var formattedWelcome = HTMLWelcomeMsg.replace("%data%", bio.welcomeMessage);
	$("#header").append(formattedWelcome);
	var formattedPic = HTMLbioPic.replace("%data%", bio.bioPic);
	$("#header").prepend(formattedPic);

	if (bio.skills.length > 0) {
		$("#header").append(HTMLskillsStart);
		var formattedSkill = HTMLskills.replace("%data%", bio.skills[0]);
		$("#skills").append(formattedSkill);
		formattedSkill = HTMLskills.replace("%data%", bio.skills[1]);
		$("#skills").append(formattedSkill);
		formattedSkill = HTMLskills.replace("%data%", bio.skills[2]);
		$("#skills").append(formattedSkill);
		formattedSkill = HTMLskills.replace("%data%", bio.skills[3]);
		$("#skills").append(formattedSkill);
		formattedSkill = HTMLskills.replace("%data%", bio.skills[4]);
		$("#skills").append(formattedSkill);
		formattedSkill = HTMLskills.replace("%data%", bio.skills[5]);
		$("#skills").append(formattedSkill);
	}

		var formattedskypePhone = HTMLskypePhone.replace("%data%", bio.contacts.skypePhone);
		$("#topContacts").append(formattedskypePhone);
		var formattedEmail = HTMLemail.replace("%data%", bio.contacts.email);
		$("#topContacts").append(formattedEmail);
		var formattedGithub = HTMLgithub.replace("%data%", bio.contacts.github);
		$("#topContacts").append(formattedGithub);
		var formattedLocation = HTMLlocation.replace("%data%", bio.contacts.location);
		$("#topContacts").append(formattedLocation);
}
displayBio();

function displayWork() {
	for (job in work.jobs) {
		$("#workExperience").append(HTMLworkStart);
		var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
		var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title);
		var formattedLocation = HTMLworkLocation.replace("%data%", work.jobs[job].location);
		var formattedDates = HTMLworkDates.replace("%data%", work.jobs[job].dates);
		var formattedDescription = HTMLworkDescription.replace("%data%", work.jobs[job].description);
		var formattedEmployerTitleLocDateDescrip = formattedEmployer + formattedTitle + formattedLocation + formattedDates + formattedDescription;
		$(".work-entry:last").append(formattedEmployerTitleLocDateDescrip);
	}
}
displayWork();

/*$(document).click(function(loc) {
	var x = loc.pageX;
	var y = loc.pageY;
	logClicks(x, y);
});*/

/*function locationFinder() {
	var locations = [];
	locations.push(bio.contacts.location);
	for (var school in education.schools) {
		locations.push(education.schools[school].location);
	}
	for (var job in work.jobs) {
		locations.push(work.jobs[job].location);
	}
	return locations;
}
*/

function inName(name) {
	name = name.trim().split(" ");
	console.log(name);
	name[2] = name[2].toUpperCase();
	name[1] = name[1].toUpperCase();
	name[0] = name[0].slice(0, 1).toUpperCase() + name[0].slice(1).toLowerCase();
	return name[0]+" "+name[1]+" "+name[2];
}
$("#main").append(internationalizeButton);

projects.display = function() {
	for (project in projects.projects) {
		$("#projects").append(HTMLprojectStart);
		var formattedTitle = HTMLprojectTitle.replace("%data%", projects.projects[project].title);
		$(".project-entry:last").append(formattedTitle);
		var formattedDates = HTMLprojectDates.replace("%data%", projects.projects[project].dates);
		$(".project-entry:last").append(formattedDates);
		var formattedDescription = HTMLprojectDescription.replace("%data%", projects.projects[project].description);
		$(".project-entry:last").append(formattedDescription);
		
		if (projects.projects[project].images.length > 0) {
			for (image in projects.projects[project].images) {
				var formattedImage = HTMLprojectImage.replace("%data%", projects.projects[project].images[image]);
				$(".project-entry:last").append(formattedImage);
			}
		}
	}
}
projects.display();

education.display = function() {
	for (school in education.schools) {
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

	for (school in education.onlineClasses) {
		var formattedTitle = HTMLonlineTitle.replace("%data%", education.onlineClasses[school].title);
		$(".education-entry:last").append(formattedTitle);
		var formattedSchool = HTMLonlineSchool.replace("%data%", education.onlineClasses[school].school);
		$(".education-entry:last").append(formattedSchool);
		var formattedDates = HTMLonlineDates.replace("%data%", education.onlineClasses[school].dates);
		$(".education-entry:last").append(formattedDates);
		var formattedURL = HTMLonlineURL.replace("%data%", education.onlineClasses[school].url);
		$(".education-entry:last").append(formattedURL);
	}
}
education.display();