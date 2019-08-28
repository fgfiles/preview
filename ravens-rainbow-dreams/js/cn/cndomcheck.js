function checkDomain() {
    var whitelist = [
        "dev.playerthree.com",
        "localhost"
    ];

    if ((/:\/\/([a-zA-Z0-9]*[.])*cartoonnetwork[.](co[.]uk|fr|it|de|es|pt|ru|pl|ro|hu|bg|nl|cz|dk|se|no|com[.]tr)/.test(window.location.href)) ||
        (/:\/\/([a-zA-Z0-9]*[.])*cartoonnetwork(arabic|me|hq)[.]com/.test(window.location.href)) ||
        (/:\/\/([a-zA-Z0-9]*[.])*boomerangtv[.](co[.]uk|fr|it|de|ru|nl|se|dk|no|pt|com[.]tr)/.test(window.location.href)) ||
        (/:\/\/([a-zA-Z0-9]*[.])*boomerang-tv[.](pl|hu|ro)/.test(window.location.href)) ||
        (/:\/\/([a-zA-Z0-9]*[.])*boomerangtv(mena[.]com|hq[.]net)/.test(window.location.href)) &&

        (top === window) ||
        (/:\/\/([a-zA-Z0-9]*[.])*cartoonnetwork[.](co[.]uk|fr|it|de|es|pt|ru|pl|ro|hu|bg|nl|cz|dk|se|no|com[.]tr)/.test(document.referrer)) ||
        (/:\/\/([a-zA-Z0-9]*[.])*cartoonnetwork(arabic|me|hq)[.]com/.test(document.referrer)) ||
        (/:\/\/([a-zA-Z0-9]*[.])*boomerangtv[.](co[.]uk|fr|it|de|ru|nl|se|dk|no|pt|com[.]tr)/.test(document.referrer)) ||
        (/:\/\/([a-zA-Z0-9]*[.])*boomerang-tv[.](pl|hu|ro)/.test(document.referrer)) ||
        (/:\/\/([a-zA-Z0-9]*[.])*boomerangtv(mena[.]com|hq[.]net)/.test(document.referrer))) {
        return true;
    } else {
        for (var i in whitelist) {
            if (window.location.hostname === whitelist[i]) {
                return true;
            }
        }
    }
    return false;
}