const socialMediaLinks = {
    facebook: "https://www.facebook.com/sharer/sharer.php?u=",
    instagram: "https://www.instagram.com/accounts/login/?next=",
    twitter: "https://twitter.com/intent/tweet?url=",
    whatsapp: "https://wa.me/?text=",
    linkedin: "https://www.linkedin.com/sharing/share-offsite/?url="
};

const url = encodeURIComponent(window.location.href); // Encode the current page URL

document.getElementById("facebook-link").href = `${socialMediaLinks.facebook}${url}`;
document.getElementById("instagram-link").href = `${socialMediaLinks.instagram}${url}`;
document.getElementById("twitter-link").href = `${socialMediaLinks.twitter}${url}`;
document.getElementById("whatsapp-link").href = `${socialMediaLinks.whatsapp}${url}`;
document.getElementById("linkedin-link").href = `${socialMediaLinks.linkedin}${url}`;


