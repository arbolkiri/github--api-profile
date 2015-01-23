window.onload = app;

// runs when the DOM is loaded
function app() {
    "use strict";

    // load some scripts (uses promises :D)
    loader.load(
        //css
        {
            url: "./dist/style.css"
        },
        //js
        {
            url: "./bower_components/jquery/dist/jquery.min.js"
        }, {
            url: "./bower_components/lodash/dist/lodash.min.js"
        },
        // {
        //     url: "./js/github.js"
        // }
        {
            url: "./bower_components/backbone/backbone.js"
        }
    ).then(function() {
            document.querySelector("html").style.opacity = 1;

            // start app?
            // debugger;
            var token = "ebea4cc6152fc438604271db8a796366b4f7a5d7";
            var githubUsername = "arbolkiri";
            var left_template_url = "./templates/leftside.html";
            // var right_template_url = "./templates/rightside.html";
            var profile_url = "https://api.github.com/users/" + githubUsername + "?access_token=" + token;

            // var url2 = "https://api.github.com/users/" + githubUsername + "/repos" + "?access_token=" + token;

            var promise1 = $.get(profile_url);
            var promise2 = $.get(left_template_url);

            $.when(promise1, promise2).then(drawProfile)


            function drawProfile() {
                    // debugger;
                    var data = arguments[0]
                    var template = arguments[1]
                    document.getElementsByClassName("left")[0].innerHTML += _.template(template[0], data[0]);
                }
                // document.getElementsByClassName("left")[0].innerHTML += _.template(template[0], data[0]
                // "status:",
                // arguments[1]


            // function drawRepos() {}

        })
    }




// var reps = "repos";
