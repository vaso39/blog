$(function () {

    if (window.matchMedia("(min-width: 772px)").matches) {
        // NAV-DROP-LIST HOVER BEHAVE
        $(".navdrop").hover(function(e) {
            let id = e.target.id;
            switch (id) {
                case "product":
                    $("#product-droplist").slideDown(400);
                    $("#company-droplist").slideUp(400);
                    $("#connect-droplist").slideUp(400);
                    $("#product-arrow").css({
                        "transform": "rotate(180deg)",
                        "transition": "0.5s ease-in-out",
                    })
                    $("#company-arrow").css({
                        "transform": "rotate(0deg)",
                        "transition": "0.5s ease-in-out",
                    })
                    $("#connect-arrow").css({
                        "transform": "rotate(0deg)",
                        "transition": "0.5s ease-in-out",
                    })
                    break;

                case "company":
                    $("#company-droplist").slideDown(400);
                    $("#product-droplist").slideUp(400);
                    $("#connect-droplist").slideUp(400);
                    $("#company-arrow").css({
                        "transform": "rotate(180deg)",
                        "transition": "0.5s ease-in-out",
                    })
                    $("#product-arrow").css({
                        "transform": "rotate(0deg)",
                        "transition": "0.5s ease-in-out",
                    })
                    $("#connect-arrow").css({
                        "transform": "rotate(0deg)",
                        "transition": "0.5s ease-in-out",
                    })
                    break;

                case "connect":
                    $("#connect-droplist").slideDown(400);
                    $("#product-droplist").slideUp(400);
                    $("#company-droplist").slideUp(400);
                    $("#connect-arrow").css({
                        "transform": "rotate(180deg)",
                        "transition": "0.5s ease-in-out",
                    })
                    $("#product-arrow").css({
                        "transform": "rotate(0deg)",
                        "transition": "0.5s ease-in-out",
                    })
                    $("#company-arrow").css({
                        "transform": "rotate(0deg)",
                        "transition": "0.5s ease-in-out",
                    })
                break;
            }
        });

        $(".droplist").mouseleave(function(e) {
            let id = e.target.id;
        $("#" + id).slideUp(400); 
        $(".arrow-svg").css({
            "transform": "rotate(0deg)",
            "transition": "0.5s ease-in-out",
        })
        });

        $("nav, header, #editor-section, #logo-img, #header-btns, #navbtn").mouseenter(function() {
            $(".droplist").slideUp(400);
            $(".arrow-svg").css({
                "transform": "rotate(0deg)",
                "transition": "0.5s ease-in-out",
            })
        })


        // FOOTER LINKS HOVER BEHAVE
        $(".site-links").hover(function(e) {
            let id = e.target.id;
            $("#" + id).css({
                "text-decoration": "underline",
            })
        }, function(e) {
            let id = e.target.id;
            $("#" + id).css({
                "text-decoration": "none",
            })
        });
    };

    //MOBIL VIEW CODES
    if (window.matchMedia("(max-width: 771px)").matches) {
        $("#editor-img").attr("src", "images/illustration-editor-mobile.svg");
        $("#laptop-img").attr("src", "images/illustration-laptop-mobile.svg");

        let mobileMenu =  $("<div></div>", {id: "mobile-menu"});
        let navContainer = $("<div></div>", {id: "nav-container"});
        $("nav").append(navContainer);
        $("nav").append(mobileMenu);

        $("#nav-container").append($("#logo-img"), $("#hamburger-icon"));
        $("#nav-container").css({
            "width": "100%",
            "display": "flex",
            "justify-content": "space-between",
            "align-items": "center",
        });

        $("#product-arrow").css({
            "transform": "rotate(180deg)",
        });

        $("#mobile-menu").append($("#product"), $("#product-droplist"), $("#company"), $("#company-droplist"), $("#connect"), $("#connect-droplist"), $("<div></div>", {id: "line"}), $("#navbtn"));

        $("#mobile-menu").css({
            "width": "90%",
            "height": "500px",
            "margin-top": "30%",
            "padding": "20px 0",
            "display": "none",
            "position": "absolute",
            "background-color": "white",
            "border-radius": "5px",
            "box-shadow": "5px 5px 5px -5px rgb(107, 107, 107)",
            "z-index": "3",
        });

        $(".arrow-path").attr("stroke", "#ff7b89");
        $("#login").css({"color": "#203e58"});
        $("#sign-up").css({
            "background": "linear-gradient(60deg, hsl(13, 100%, 72%), hsl(353, 100%, 62%))",
            "color": "white",
        });
        $("#line").css({
            "width": "90%",
            "height": "0.5px",
            "margin-bottom": "0%",
            "position": "absolute",
            "top": "390px",
            "background-color": "#e4e4e4",
        });

        let clicks = 0;
        $("#hamburger-icon").click(function() {
            if (clicks % 2 === 0) {
                $("#hamburger-icon").attr("src", "images/icon-close.svg");
                $("#mobile-menu").slideDown(400);
                $("#mobile-menu").css({
                    "display": "flex",
                    "flex-direction": "column",
                    "justify-content": "unset",
                    "align-items": "center",
                });
            } else {
                $("#hamburger-icon").attr("src", "images/icon-hamburger.svg");
                $("#mobile-menu").slideUp(400);
            }

            clicks++;
        });

        
        let productClicks = 0;
        $("#product").click(function() {
            if (productClicks % 2 !== 0) {
                $("#product-droplist").slideDown(400);
                $("#company-droplist").slideUp(400);
                $("#connect-droplist").slideUp(400);
                $("#product-arrow").css({
                    "transform": "rotate(180deg)",
                    "transition": "0.5s ease-in-out",
                });
                $("#company-arrow").css({
                    "transform": "rotate(0deg)",
                    "transition": "0.5s ease-in-out",
                });
                $("#connect-arrow").css({
                    "transform": "rotate(0deg)",
                    "transition": "0.5s ease-in-out",
                });
                $("#product").css({
                    "color": "#5c6f7e",
                    "transition": "0.5s ease-in-out",
                });
            } else {
                $("#product-droplist").slideUp(400);
                $("#product-arrow").css({
                    "transform": "rotate(0deg)",
                    "transition": "0.5s ease-in-out",
                });
                $("#product").css({
                    "color": "#203e58",
                    "transition": "0.5s ease-in-out",
                });
            }
            productClicks++;
        });

        let companyClicks = 0;
        $("#company").click(function() {
            if (companyClicks % 2 === 0) {
                $("#company-droplist").slideDown(400);
                $("#product-droplist").slideUp(400);
                $("#connect-droplist").slideUp(400);
                $("#company-arrow").css({
                    "transform": "rotate(180deg)",
                    "transition": "0.5s ease-in-out",
                });
                $("#product-arrow").css({
                    "transform": "rotate(0deg)",
                    "transition": "0.5s ease-in-out",
                });
                $("#connect-arrow").css({
                    "transform": "rotate(0deg)",
                    "transition": "0.5s ease-in-out",
                });
                $("#company").css({
                    "color": "#5c6f7e",
                    "transition": "0.5s ease-in-out",
                });
            } else {
                $("#company-droplist").slideUp(400);
                $("#company-arrow").css({
                    "transform": "rotate(0deg)",
                    "transition": "0.5s ease-in-out",
                });
                $("#company").css({
                    "color": "#203e58",
                    "transition": "0.5s ease-in-out",
                });
            }
            companyClicks++;
        });

        let connectClicks = 0;
        $("#connect").click(function() {
            if (connectClicks % 2 === 0) {
                $("#connect-droplist").slideDown(400);
                $("#product-droplist").slideUp(400);
                $("#company-droplist").slideUp(400);
                $("#connect-arrow").css({
                    "transform": "rotate(180deg)",
                    "transition": "0.5s ease-in-out",
                });
                $("#product-arrow").css({
                    "transform": "rotate(0deg)",
                    "transition": "0.5s ease-in-out",
                });
                $("#company-arrow").css({
                    "transform": "rotate(0deg)",
                    "transition": "0.5s ease-in-out",
                });
                $("#connect").css({
                    "color": "#5c6f7e",
                    "transition": "0.5s ease-in-out",
                });
            } else {
                $("#connect-droplist").slideUp(400);
                $("#connect-arrow").css({
                    "transform": "rotate(0deg)",
                    "transition": "0.5s ease-in-out",
                });
                $("#connect").css({
                    "color": "#203e58",
                    "transition": "0.5s ease-in-out",
                });
            }
            connectClicks++;
        });

    }

});
