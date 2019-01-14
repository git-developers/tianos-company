function include(scriptUrl) {
    document.write('<script src="' + scriptUrl + '"></script>');
}

function lazyInit(element, func) {
    var $win = jQuery(window),
        wh = $win.height();
    $win.on('load scroll', function() {
        var st = $(this).scrollTop();
        if (!element.hasClass('lazy-loaded')) {
            var et = element.offset().top,
                eb = element.offset().top + element.outerHeight();
            if (st + wh > et - 100 && st < eb + 100) {
                func.call();
                element.addClass('lazy-loaded');
            }
        }
    });
}

function isIE() {
    var myNav = navigator.userAgent.toLowerCase();
    return (myNav.indexOf('msie') != -1) ? parseInt(myNav.split('msie')[1]) : false;
};;
(function($) {
    $(document).ready(function() {
        $("#copyright-year").text((new Date).getFullYear());
    });
})(jQuery);;
(function($) {
    if (isIE() && isIE() < 11) {
        $('html').addClass('lt-ie11');
        $(document).ready(function() {
            PointerEventsPolyfill.initialize({});
        });
    }
    if (isIE() && isIE() < 10) {
        $('html').addClass('lt-ie10');
    }
})(jQuery);;
(function($) {
    var o = $('html');
    if (o.hasClass('desktop') && o.hasClass("wow-animation") && $(".wow").length) {
        $(document).ready(function() {
            new WOW().init();
        });
    }
})(jQuery);;
(function($) {
    var o = $('html');
    if (o.hasClass('desktop')) {
        $(document).ready(function() {
            $().UItoTop({
                easingType: 'easeOutQuart',
                containerClass: 'ui-to-top fa fa-angle-up'
            });
        });
    }
})(jQuery);;
(function($) {
    var o = $('.responsive-tabs');
    if (o.length > 0) {
        $(document).ready(function() {
            o.each(function() {
                var $this = $(this);
                $this.easyResponsiveTabs({
                    type: $this.attr("data-type") === "accordion" ? "accordion" : "default"
                });
            })
        });
    }
})(jQuery);;
(function($) {
    var o = $('.rd-mailform');
    if (o.length > 0) {
        $(document).ready(function() {
            var o = $('.rd-mailform');
            if (o.length) {
                o.rdMailForm({
                    validator: {
                        'constraints': {
                            '@LettersOnly': {
                                message: 'Please use letters only!'
                            },
                            '@NumbersOnly': {
                                message: 'Please use numbers only!'
                            },
                            '@NotEmpty': {
                                message: 'Field should not be empty!'
                            },
                            '@Email': {
                                message: 'Enter valid e-mail address!'
                            },
                            '@Phone': {
                                message: 'Enter valid phone number!'
                            },
                            '@Date': {
                                message: 'Use MM/DD/YYYY format!'
                            },
                            '@SelectRequired': {
                                message: 'Please choose an option!'
                            }
                        }
                    }
                }, {
                    'MF000': 'Sent',
                    'MF001': 'Recipients are not set!',
                    'MF002': 'Form will not work locally!',
                    'MF003': 'Please, define email field in your form!',
                    'MF004': 'Please, define type of your form!',
                    'MF254': 'Something went wrong with PHPMailer!',
                    'MF255': 'There was an error submitting the form!'
                });
            }
        });
    }
})(jQuery);;


/*
(function($) {
    var o = $('#google-map');
    if (o.length) {
        include('//maps.google.com/maps/api/js');
        $(document).ready(function() {
            var head = document.getElementsByTagName('head')[0],
                insertBefore = head.insertBefore;
            head.insertBefore = function(newElement, referenceElement) {
                if (newElement.href && newElement.href.indexOf('//fonts.googleapis.com/css?family=Roboto') != -1 || newElement.innerHTML.indexOf('gm-style') != -1) {
                    return;
                }
                insertBefore.call(head, newElement, referenceElement);
            };
            lazyInit(o, function() {
                o.googleMap({
                    styles: [{
                        "stylers": [{
                            "saturation": -100
                        }, {
                            "gamma": 1
                        }]
                    }, {
                        "elementType": "labels.text.stroke",
                        "stylers": [{
                            "visibility": "off"
                        }]
                    }, {
                        "featureType": "poi.business",
                        "elementType": "labels.text",
                        "stylers": [{
                            "visibility": "off"
                        }]
                    }, {
                        "featureType": "poi.business",
                        "elementType": "labels.icon",
                        "stylers": [{
                            "visibility": "off"
                        }]
                    }, {
                        "featureType": "poi.place_of_worship",
                        "elementType": "labels.text",
                        "stylers": [{
                            "visibility": "off"
                        }]
                    }, {
                        "featureType": "poi.place_of_worship",
                        "elementType": "labels.icon",
                        "stylers": [{
                            "visibility": "off"
                        }]
                    }, {
                        "featureType": "road",
                        "elementType": "geometry",
                        "stylers": [{
                            "visibility": "simplified"
                        }]
                    }, {
                        "featureType": "water",
                        "stylers": [{
                            "visibility": "on"
                        }, {
                            "saturation": 50
                        }, {
                            "gamma": 0
                        }, {
                            "hue": "#50a5d1"
                        }]
                    }, {
                        "featureType": "administrative.neighborhood",
                        "elementType": "labels.text.fill",
                        "stylers": [{
                            "color": "#333333"
                        }]
                    }, {
                        "featureType": "road.local",
                        "elementType": "labels.text",
                        "stylers": [{
                            "weight": 0.5
                        }, {
                            "color": "#333333"
                        }]
                    }, {
                        "featureType": "transit.station",
                        "elementType": "labels.icon",
                        "stylers": [{
                            "gamma": 1
                        }, {
                            "saturation": 50
                        }]
                    }]
                });
            });
        });
    }
})(jQuery);;
*/


(function($) {
    var o = $('.rd-navbar');
    if (o.length > 0) {
        $(document).ready(function() {
            o.RDNavbar({
                responsive: {
                    0: {
                        layout: 'rd-navbar-fixed'
                    },
                    768: {
                        layout: 'rd-navbar-fixed',
                        deviceLayout: 'rd-navbar-fixed'
                    },
                    992: {
                        layout: 'rd-navbar-static',
                        deviceLayout: 'rd-navbar-static'
                    },
                    1200: {
                        deviceLayout: o.attr("data-rd-navbar-lg").split(" ")[0],
                        layout: o.attr("data-rd-navbar-lg").split(" ")[0],
                        stickUpClone: false,
                        stickUpOffset: 0
                    }
                },
                anchorNavOffset: -95
            });
        });
    }
})(jQuery);;
(function($) {
    var o = $('.rd-parallax');
    if (o.length) {
        $(document).ready(function() {
            o.each(function() {
                $(this).RDParallax({
                    direction: ($('html').hasClass("smoothscroll") || $('html').hasClass("smoothscroll-all")) && !isIE() ? "normal" : "inverse"
                });
            });
        });
    }
})(jQuery);;
(function($) {
    var o = $('#camera');
    if (o.length > 0) {
        $(document).ready(function() {
            o.camera({
                fx: 'mosaic',
                height: 'auto',
                loader: false,
                pagination: true,
                navigation: true,
                hover: true,
                autoAdvance: true,
                time: 500,
                transPeriod: 1400,
                onLoaded: function() {
                    $('.imgLoaded').each(function() {
                        if (!$(this).parent().hasClass("camera-img__wrap")) {
                            $('.imgLoaded').wrap("<div class='camera-img__wrap'></div>");
                        }
                    });
                }
            })
        });
    }
})(jQuery);;
(function($) {
    var o = $('[data-lightbox]').not('[data-lightbox="gallery"] [data-lightbox]'),
        g = $('[data-lightbox^="gallery"]');
    if (o.length > 0 || g.length > 0) {
        $(document).ready(function() {
            if (o.length) {
                o.each(function() {
                    var $this = $(this);
                    $this.magnificPopup({
                        type: $this.attr("data-lightbox")
                    });
                })
            }
            if (g.length) {
                g.each(function() {
                    var $gallery = $(this);
                    $gallery.find('[data-lightbox]').each(function() {
                        var $item = $(this);
                        $item.addClass("mfp-" + $item.attr("data-lightbox"));
                    }).end().magnificPopup({
                        delegate: '[data-lightbox]',
                        type: "image",
                        gallery: {
                            enabled: true
                        }
                    });
                })
            }
        });
    }
})(jQuery);