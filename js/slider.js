// See if any animations are running
function animationsTest (callback) {
    var testAnimationInterval = setInterval(function () {
        // If finished then clear interval
        console.log($.timers.length);
        if (! $.timers.length) {
            clearInterval(testAnimationInterval);
            callback();
        }
    }, 10);
};

function email() {
    if ($("#aboutme").is(':visible')) {
        $("#aboutme").toggle('slide');
    }
    else if ($("#projects").is(':visible')) {
        $("#projects").toggle('slide');
    }
    else {
        $("#toggle").toggle('slide');
        return;
    }
    animationsTest(function () {
        email();
    });
    //setTimeout(email, 450);
}

function aboutme() {
    if ($("#toggle").is(':visible')) {
        $("#toggle").toggle('slide');
    }
    else if ($("#projects").is(':visible')) {
        $("#projects").toggle('slide');
    }
    else {
        $("#aboutme").toggle('slide');
        return;
    }
    animationsTest(function () {
        aboutme();
    });
    //setTimeout(aboutme, 450);
}

function projects() {
    if ($("#toggle").is(':visible')) {
        $("#toggle").toggle('slide');
    }
    else if ($("#aboutme").is(':visible')) {
        $("#aboutme").toggle('slide');
    }
    else {
        $("#projects").toggle('slide');
        return;
    }
    animationsTest(function () {
        projects();
    });
    //setTimeout(projects, 450);
}