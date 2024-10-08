var MetaPortalFilterArray = [];
! function($) {
    "use strict";
    var a = !1,
        b = new Date,
        c = 0,
        d = {
            init: function() {
                d.ready(), d.menuCenter(), d.imgToSVG(), d.BgImg(), d.totopFixer(), d.slider(), d.headerFixer(), d.fn_cs_counter(), d.video(), d.collection(), d.contactForm(), d.totopScroll(), d.seachSomething(), d.walletAndLeftNavOpener(), d.resizeWalletAndLeftNav(), d.headerAnchor(), d.isotope(), d.qnt(), d.countdown(), d.hold(), d.filterItems(), d.applyFilter(), d.navSubMenu(), d.roadmapSwiper()
            },
            roadmapSwiper: function() {
                $(".fn_cs_roadmap .swiper-container").each(function() {
                    var b = $(this),
                        a = new Swiper(b, {
                            loop: !1,
                            speed: 1500,
                            autoplay: {
                                delay: 5e3,
                                disableOnInteraction: !1
                            },
                            slidesPerView: 4,
                            spaceBetween: 40,
                            direction: "horizontal",
                            loopAdditionalSlides: 10,
                            watchSlidesProgress: !0,
                            breakpoints: {
                                768: {
                                    slidesPerView: 1
                                },
                                1040: {
                                    slidesPerView: 2
                                },
                                1200: {
                                    slidesPerView: 3
                                },
                                1400: {
                                    slidesPerView: 4
                                }
                            }
                        }),
                        c = 100 / (a.params.loop ? a.slides.length - 2 : a.slides.length),
                        e = b.closest(".fn_cs_roadmap").find(".step_in");
                    d.roadmapStep(a, e, c), a.on("slideChange", function() {
                        d.roadmapStep(this, e, c)
                    })
                })
            },
            roadmapStep: function(b, c, d) {
                var a, e = parseInt(b.currentBreakpoint);
                switch (e) {
                    case 1400:
                    case 1040:
                    default:
                        a = 4;
                        break;
                    case 1200:
                        a = 3;
                        break;
                    case 768:
                        a = 1
                }
                c.css({
                    width: (b.activeIndex + a) * d + "%"
                })
            },
            translateVal: function(a) {
                return a.style.transform.match(/translate3d\((.+)px,(.+)px,(.+)px\)/)[1]
            },
            menuCenter: function() {
                var d = $(".header .trigger_logo"),
                    e = $(".header .wallet"),
                    c = $(".header .nav"),
                    a = 0,
                    b = 0;
                d.length && (a = parseInt(d.width())), e.length && (b = parseInt(e.width())), a < b ? c.css({
                    paddingLeft: b - a + "px"
                }) : c.css({
                    paddingRight: a - b + "px"
                }), c.css({
                    opacity: 1
                })
            },
            navSubMenu: function() {
                $(".metaportal_fn_leftnav .nav_holder a").off().on("click", function() {
                    var b = $(this),
                        a = b.siblings(".sub-menu"),
                        e = $(".metaportal_fn_leftnav .nav_holder .icon").html();
                    if (a.length) return c++, a.find(">li>.prev").length || a.prepend('<li><a href="#" class="prev"><span class="creative_link">' + e + b.text() + "</span></a></li>"), $(".metaportal_fn_leftnav .nav_holder > ul").css({
                        transform: "translateX(-" + 100 * c + "%)"
                    }), d.previousItems(), !1
                })
            },
            previousItems: function() {
                $(".metaportal_fn_leftnav .nav_holder .prev").off().on("click", function() {
                    return c--, $(".metaportal_fn_leftnav .nav_holder > ul").css({
                        transform: "translateX(-" + 100 * c + "%)"
                    }), !1
                })
            },
            isotopeCollection: function() {
                $(".grid").isotope({
                    itemSelector: "li",
                    layoutMode: "fitRows"
                })
            },
            applyFilter: function() {
                d.isotopeCollection(), $(".metaportal_fn_filters .checkbox").off().on("click", function() {
                    var a = $(this),
                        f = a.closest(".metaportal_fn_collection"),
                        b = f.find(".metaportal_fn_result_box"),
                        c = a.data("id"),
                        h = a.data("category"),
                        i = a.find(".text").text(),
                        e = b.find(".filter_count span");
                    if (a.hasClass("selected")) {
                        a.removeClass("selected"), f.find('.result_item[data-id="' + c + '"]').remove(), 0 === b.find(".result_item").length && b.find(".clear_all").remove(), a.find('input[type="checkbox"]').prop("checked", ""), e.text(parseInt(e.text()) - 1);
                        var g = MetaPortalFilterArray.indexOf(c); - 1 !== g && MetaPortalFilterArray.splice(g, 1)
                    } else a.addClass("selected"), 0 === b.find(".result_item").length && b.append('<a href="#" class="clear_all">Clear All</a>'), b.find(".clear_all").before('<div class="result_item" data-id="' + c + '"><a href="#" title="Remove Filter">' + h + ": <span>" + i + '</span><img src="svg/cancel.svg" alt="" class="fn__svg"></a></div>'), a.find('input[type="checkbox"]').prop("checked", "checked"), e.text(parseInt(e.text()) + 1), MetaPortalFilterArray.push(c), d.imgToSVG(), d.removeFilter();
                    return d.recallGridAfterFiltering(), !1
                }), d.removeFilter()
            },
            recallGridAfterFiltering: function(c) {
                var a = $(".grid").isotope({
                    itemSelector: "li",
                    layoutMode: "fitRows"
                });
                if ("clear" === c) return a.isotope({
                    filter: "*"
                }), MetaPortalFilterArray = [], !1;
                var b = "";
                0 === MetaPortalFilterArray.length ? b = "*" : $.each(MetaPortalFilterArray, function(c, a) {
                    b += ".id" + a
                }), a.isotope({
                    filter: b
                })
            },
            removeFilter: function() {
                $(".metaportal_fn_result_box .result_item a").off().on("click", function() {
                    var b = $(this),
                        c = b.closest(".metaportal_fn_collection"),
                        e = b.closest(".result_item"),
                        a = c.find(".metaportal_fn_result_box"),
                        f = e.data("id"),
                        g = a.find(".filter_count span");
                    e.remove(), c.find('.metaportal_fn_filters .checkbox[data-id="' + f + '"]').removeClass("selected").find('input[type="checkbox"]').prop("checked", ""), g.text(parseInt(g.text()) - 1), 0 === a.find(".result_item").length && a.find(".clear_all").remove();
                    var h = MetaPortalFilterArray.indexOf(f);
                    return -1 !== h && MetaPortalFilterArray.splice(h, 1), d.recallGridAfterFiltering(), !1
                }), $(".metaportal_fn_result_box .clear_all").off().on("click", function() {
                    var a = $(this),
                        b = a.closest(".metaportal_fn_collection"),
                        e = b.find(".metaportal_fn_filters"),
                        c = b.find(".metaportal_fn_result_box"),
                        f = c.find(".filter_count span");
                    return f.text(0), c.find(".result_item").remove(), a.remove(), e.find(".checkbox").removeClass("selected").find('input[type="checkbox"]').prop("checked", ""), d.recallGridAfterFiltering("clear"), !1
                })
            },
            filterItems: function() {
                $(".metaportal_fn_filters .filter_item.opened").each(function() {
                    $(this).find(".filter_item__content").slideDown(300)
                }), $(".filter_item__header a").off().on("click", function() {
                    var a = $(this).closest(".filter_item");
                    return a.hasClass("opened") ? (a.removeClass("opened"), a.find(".filter_item__content").slideUp(300)) : (a.addClass("opened"), a.find(".filter_item__content").slideDown(300)), !1
                })
            },
            hold: function() {
                ! function() {
                    var b, c = $("#social,.metaportal_fn_search");

                    function d() {
                        c.addClass("hold")
                    }

                    function a() {
                        clearTimeout(b), b = setTimeout(d, 2e3), c.removeClass("hold")
                    }
                    window.onload = a, document.onmousemove = a, document.onkeypress = a
                }()
            },
            countdown: function() {
                $(".metaportal_fn_countdown").each(function() {
                    var a = $(this),
                        b = a.data("type");
                    if ("due_date" === b) var g = new Date(a.data("date")).getTime();
                    else if ("ever" === b) var c = 86400 * parseInt(a.data("days")),
                        d = 3600 * parseInt(a.data("hours")),
                        e = 60 * parseInt(a.data("minutes")),
                        f = parseInt(a.data("seconds")),
                        h = c + d + e + f;
                    var i = a.parent();
                    a.hasClass("boxed") && (a.after('<div class="metaportal_fn_boxed_countdown"><ul><li class="days"><div class="item"><div class="count"><h3 class="fn__gradient_title"></h3></div><span>Days</span></div></li><li class="hours"><div class="item"><div class="count"><h3 class="fn__gradient_title"></h3></div><span>Hours</span></div></li><li class="minutes"><div class="item"><div class="count"><h3 class="fn__gradient_title"></h3></div><span>Minutes</span></div></li><li class="seconds"><div class="item"><div class="count"><h3 class="fn__gradient_title"></h3></div><span>Seconds</span></div></li></ul></div>'), a.remove()), "due_date" === b ? setInterval(function() {
                        var j = new Date().getTime(),
                            f = g - j,
                            b = Math.floor(f / 864e5),
                            c = Math.floor(f % 864e5 / 36e5),
                            d = Math.floor(f % 36e5 / 6e4),
                            e = Math.floor(f % 6e4 / 1e3);
                        if (a.hasClass("boxed")) b = b < 10 ? "0" + b : b, c = c < 10 ? "0" + c : c, d = d < 10 ? "0" + d : d, e = e < 10 ? "0" + e : e, i.find(".days h3").text(b), i.find(".hours h3").text(c), i.find(".minutes h3").text(d), i.find(".seconds h3").text(e);
                        else {
                            var h = "";
                            b > 0 && (h += b + "d: "), h += c + "h: " + d + "m: " + e + "s", a.text(h)
                        }
                    }, 1e3) : "ever" === b && setInterval(function() {
                        if (c = Math.floor(h / 86400), d = Math.floor(h % 86400 / 3600), e = Math.floor(h % 3600 / 60), f = Math.floor(h % 60), a.hasClass("boxed")) c = c < 10 ? "0" + c : c, d = d < 10 ? "0" + d : d, e = e < 10 ? "0" + e : e, f = f < 10 ? "0" + f : f, i.find(".days h3").text(c), i.find(".hours h3").text(d), i.find(".minutes h3").text(e), i.find(".seconds h3").text(f);
                        else {
                            var b = "";
                            c > 0 && (b += c + "d: "), b += d + "h: " + e + "m: " + f + "s", a.text(b)
                        }
                        h--
                    }, 1e3)
                })
            },
            qnt: function() {
                $(".qnt .decrease").off().on("click", function() {
                    var a = $(this).closest(".qnt").find(".summ"),
                        b = parseInt(a.text());
                    b >= 2 && b--, a.text(b);
                    var c = b * a.data("price");
                    return a.closest(".mint_list").find(".total_price").html(c), !1
                }), $(".qnt .increase").off().on("click", function() {
                    var a = $(this).closest(".qnt").find(".summ"),
                        b = parseInt(a.text());
                    b++, a.text(b);
                    var c = b * a.data("price");
                    return a.closest(".mint_list").find(".total_price").html(c), !1
                })
            },
            isotope: function() {
                $(".fn-isotope").isotope({
                    itemSelector: ".isotope-item",
                    masonry: {}
                })
            },
            headerAnchor: function() {
                $(".header .nav a").on("click", function() {
                    var a = $(this);
                    $(a.attr("href")).length && $("html, body").animate({
                        scrollTop: $(a.attr("href")).offset().top
                    }, 1e3)
                })
            },
            resizeWalletAndLeftNav: function() {
                var a = $(".metaportal_fn_walletbox").height();
                $(".metaportal_fn_walletbox .walletbox").css({
                    minHeight: a
                });
                var b = $(".metaportal_fn_leftnav").height();
                $(".metaportal_fn_leftnav .navbox").css({
                    minHeight: b
                })
            },
            ready: function() {
                $(".metaportal_fn_walletbox, .metaportal_fn_wallet_closer, .metaportal_fn_leftnav, .metaportal_fn_leftnav_closer").removeClass("ready")
            },
            walletAndLeftNavOpener: function() {
                var d = $(".metaportal_fn_walletbox"),
                    a = $(".metaportal_fn_wallet_closer,.metaportal_fn_walletbox .fn__closer");
                $(".wallet_opener").on("click", function() {
                    return d.addClass("active"), a.addClass("active"), !1
                }), a.on("click", function() {
                    return d.removeClass("active"), a.removeClass("active"), !1
                });
                var e = $(".metaportal_fn_leftnav"),
                    b = $(".metaportal_fn_leftnav_closer,.metaportal_fn_leftnav .fn__closer");
                $(".header .trigger,.metaportal_fn_mobnav .social_trigger .trigger").on("click", function() {
                    return e.addClass("active"), b.addClass("active"), !1
                }), b.on("click", function() {
                    return e.removeClass("active"), b.removeClass("active"), !1
                });
                var c = $(".metaportal_fn_mobnav .mob_mid .trigger"),
                    f = $(".metaportal_fn_mobnav .mob_bot");
                c.on("click", function() {
                    return c.hasClass("active") ? (c.removeClass("active"), f.slideUp(300)) : (c.addClass("active"), f.slideDown(300)), !1
                })
            },
            preloader: function() {
                if (a) return !1;
                a = !0;
                var d = new Date - b,
                    c = 3e3;
                d < c ? c -= d : c = 0, setTimeout(function() {
                    $(".metaportal_fn_preloader").addClass("ready")
                }, c)
            },
            seachSomething: function() {
                var b = $(".metaportal_fn_search"),
                    a = $(".metaportal_fn_searchbox"),
                    c = $(".metaportal_fn_search_closer"),
                    d = a.find("input"),
                    e = a.find("a");
                b.on("click", function() {
                    return a.hasClass("active") ? (a.removeClass("active"), c.removeClass("active")) : (a.addClass("active"), c.addClass("active"), d.val(""), setTimeout(function() {
                        d[0].focus()
                    }, 100)), !1
                }), c.on("click", function() {
                    return a.removeClass("active"), c.removeClass("active"), !1
                }), d.on("keypress", function(a) {
                    "Enter" === a.key && (a.preventDefault(), e.trigger("click"))
                }), e.on("click", function() {
                    var b = $(".metaportal_fn_searchbox input").val();
                    return window.find(b), a.removeClass("active"), c.removeClass("active"), !1
                })
            },
            totopScroll: function() {
                $(".metaportal_fn_totop").off().on("click", function(b) {
                    b.preventDefault();
                    var a = ($(window).scrollTop() - $(window).height()) / 2;
                    return a < 500 && (a = 500), a > 1500 && (a = 1500), $("html, body").animate({
                        scrollTop: 0
                    }, a), !1
                })
            },
            contactForm: function() {
                $(".contact_form #send_message").on("click", function() {
                    var a = $(".contact_form #name").val(),
                        b = $(".contact_form #email").val(),
                        d = $(".contact_form #tel").val(),
                        e = $(".contact_form #subject").val(),
                        c = $(".contact_form #message").val(),
                        f = $(".contact_form .returnmessage").data("success");
                    return $(".contact_form .returnmessage").empty(), "" === a || "" === b || "" === c ? $(".contact_form .empty_notice").slideDown(500).delay(2e3).slideUp(500) : $.post("modal/contact.html", {
                        ajax_name: a,
                        ajax_email: b,
                        ajax_subject: e,
                        ajax_message: c,
                        ajax_tel: d
                    }, function(a) {
                        $(".contact_form .returnmessage").append(a), $(".contact_form .returnmessage span.contact_error").length ? $(".contact_form .returnmessage").slideDown(500).delay(2e3).slideUp(500) : ($(".contact_form .returnmessage").append("<span class='contact_success'>" + f + "</span>"), $(".contact_form .returnmessage").slideDown(500).delay(4e3).slideUp(500)), "" === a && $("#contact_form")[0].reset()
                    }), !1
                })
            },
            collection: function() {
                $(".fn_cs_collection").each(function() {
                    var a = $(this),
                        b = a.find(".item").length;
                    setInterval(function() {
                        for (var d = Math.floor(Math.random() * b), c = Math.floor(Math.random() * b); c === d;) c = Math.floor(Math.random() * b);
                        var e = a.find(".item").eq(d),
                            f = a.find(".item").eq(c),
                            g = e.find("input").val(),
                            h = f.find("input").val();
                        e.addClass("ready"), f.addClass("ready"), setTimeout(function() {
                            e.find("input").val(h), e.find(".abs_img").css({
                                backgroundImage: "url(" + h + ")"
                            }), f.find("input").val(g), f.find(".abs_img").css({
                                backgroundImage: "url(" + g + ")"
                            }), e.removeClass("ready"), f.removeClass("ready")
                        }, 500)
                    }, 2e3)
                })
            },
            video: function() {
                $(".popup-youtube, .popup-vimeo").each(function() {
                    $(this).magnificPopup({
                        disableOn: 700,
                        type: "iframe",
                        mainClass: "mfp-fade",
                        removalDelay: 160,
                        preloader: !1,
                        fixedContentPos: !1
                    })
                }), $(".popup-soundcloud").magnificPopup({
                    type: "image",
                    gallery: {
                        enabled: !0
                    }
                })
            },
            fn_cs_counter: function() {
                $(".fn_cs_counter").each(function() {
                    var a = $(this);
                    a.waypoint({
                        handler: function() {
                            a.hasClass("stop") || a.addClass("stop").countTo({
                                refreshInterval: 50,
                                formatter: function(a, b) {
                                    return a.toFixed(b.decimals).replace(/\B(?=(?:\d{3})+(?!\d))/g, "")
                                }
                            })
                        },
                        offset: "90%"
                    })
                })
            },
            headerFixer: function() {
                var a = $("body"),
                    b = $(".header"),
                    c = $(window).scrollTop();
                c > 10 ? b.addClass("active") : b.removeClass("active"), c > 300 ? a.addClass("totop-active") : a.removeClass("totop-active")
            },
            slider: function() {
                $(".fn_cs_slider").each(function() {
                    var a = $(this),
                        b = a.find(".slider_top"),
                        c = a.find(".slider_content"),
                        e = 2,
                        f = setInterval(function() {
                            e++, e = d.sliderDo(b, c, e)
                        }, 6e3);
                    a.find(".slider_nav .prev").off().on("click", function() {
                        return clearInterval(f), e--, e = d.sliderDo(b, c, e), f = setInterval(function() {
                            e++, e = d.sliderDo(b, c, e)
                        }, 6e3), !1
                    }), a.find(".slider_nav .next").off().on("click", function() {
                        return clearInterval(f), e++, e = d.sliderDo(b, c, e), f = setInterval(function() {
                            e++, e = d.sliderDo(b, c, e)
                        }, 6e3), !1
                    }), a.find(".slider_top li").off().on("click", function() {
                        var a = $(this).attr("class");
                        if ("next" === a) e++;
                        else {
                            if ("prev" !== a) return !1;
                            e--
                        }
                        return clearInterval(f), e = d.sliderDo(b, c, e), f = setInterval(function() {
                            e++, e = d.sliderDo(b, c, e)
                        }, 6e3), !1
                    })
                })
            },
            sliderDo: function(c, h, b) {
                var a = c.find("li").length;
                b > a && (b -= a);
                var d = b - 1,
                    e = b - 2,
                    f = b + 1,
                    g = b + 2;
                return d > a && (d -= a), e > a && (e -= a), f > a && (f -= a), g > a && (g -= a), d < 1 && (d += a), e < 1 && (e += a), b < 1 && (b += a), f < 1 && (f += a), g < 1 && (g += a), c.find("li").removeClass("prev prev2 active next next2"), c.find('li[data-index="' + e + '"]').addClass("prev2"), c.find('li[data-index="' + d + '"]').addClass("prev"), c.find('li[data-index="' + b + '"]').addClass("active"), c.find('li[data-index="' + f + '"]').addClass("next"), c.find('li[data-index="' + g + '"]').addClass("next2"), b
            },
            totopFixer: function() {
                var a = $(".metaportal_fn_totop .totop_inner").width();
                $(".metaportal_fn_totop").css({
                    height: a + "px"
                })
            },
            imgToSVG: function() {
                $("img.fn__svg").each(function() {
                    var a = $(this),
                        c = a.attr("class"),
                        b = a.attr("src");
                    $.get(b, function(d) {
                        var b = $(d).find("svg");
                        void 0 !== c && (b = b.attr("class", c + " replaced-svg")), a.replaceWith(b)
                    }, "xml")
                })
            },
            BgImg: function() {
                $("*[data-bg-img]").each(function() {
                    var a = $(this),
                        b = a.attr("data-bg-img"),
                        c = a.data("bg-img");
                    void 0 !== b && a.css({
                        backgroundImage: "url(" + c + ")"
                    })
                })
            }
        };
    $(document).ready(function() {
        d.init(), setTimeout(function() {
            d.isotope(), d.isotopeCollection()
        }, 150)
    }), $(window).on("resize", function() {
        d.resizeWalletAndLeftNav(), d.totopFixer(), d.isotope(), d.isotopeCollection(), d.roadmapSwiper()
    }), $(window).on("load", function() {
        d.preloader(), d.isotope(), d.isotopeCollection(), setTimeout(function() {
            d.isotope(), d.isotopeCollection()
        }, 200)
    }), $(window).on("scroll", function() {
        d.headerFixer()
    }), window.addEventListener("load", function() {
        d.preloader()
    })
}(jQuery)