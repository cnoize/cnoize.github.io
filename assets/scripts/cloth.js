(function () {
    var vm = new Vue({
        el: '#app',
        methods: {
            switchConfig: function (uuid) {
                $('li.config').removeClass('active');
                $('#' + uuid + '-config').addClass('active');
                $('div.configItem').hide();
                resizeList($('#' + uuid + '-item')).fadeIn(1000);
            },
            run: function () {
                $('#progress-bar').toggle();
            }
        },
        watch: {
            selectedValues: {
                deep: true,
                handler: function (val, oldVal) {
                    for (var key in val) {
                        var value = val[key];
                        for (var index in this.config[key].items) {
                            var item = this.config[key].items[index];
                            if (value == item.value) {
                                this.selectedData[key] = {
                                    title: item.title,
                                    image: item.image
                                };
                                break;
                            }
                        }
                    }
                }
            }
        },
        data: {
            selectedValues: {
                dress: '',
                person: '',
                hair: ''
            },
            selectedData: {
                dress: {
                    title: '',
                    image: {
                        small: {
                            url: ''
                        }
                    }
                },
                person: {
                    title: '',
                    image: {
                        small: {
                            url: ''
                        }
                    }
                },
                hair: {
                    title: '',
                    image: {
                        small: {
                            url: ''
                        }
                    }
                }
            },
            config: {
                dress: {
                    title: 'Dress',
                    items: [
                        {
                            'value': '1',
                            'title': 'T-shirt+pants_std',
                            'image': {
                                'large': {
                                    'url': 'assets/images/dress-1-large.png',
                                    'title': ''
                                },
                                'small': {
                                    'url': 'assets/images/dress-1-small.png',
                                    'title': ''
                                }
                            }
                        },
                        {
                            'value': '2',
                            'title': 'short_sleeve_skirt_std',
                            'image': {
                                'large': {
                                    'url': 'assets/images/dress-2-large.png',
                                    'title': ''
                                },
                                'small': {
                                    'url': 'assets/images/dress-2-small.png',
                                    'title': ''
                                }
                            }
                        },
                        {
                            'value': '3',
                            'title': 'long_sleeve_skirt_std',
                            'image': {
                                'large': {
                                    'url': 'assets/images/dress-3-large.png',
                                    'title': ''
                                },
                                'small': {
                                    'url': 'assets/images/dress-3-small.png',
                                    'title': ''
                                }
                            }
                        }
                    ]
                },
                person: {
                    title: "Person",
                    items: [
                        {
                            'value': '2',
                            'title': 'normal',
                            'image': {
                                'large': {
                                    'url': 'assets/images/person-1-large.png',
                                    'title': ''
                                },
                                'small': {
                                    'url': 'assets/images/person-1-small.png',
                                    'title': ''
                                }
                            }
                        },
                        {
                            'value': '6',
                            'title': '160',
                            'image': {
                                'large': {
                                    'url': 'assets/images/person-1-large.png',
                                    'title': ''
                                },
                                'small': {
                                    'url': 'assets/images/person-1-small.png',
                                    'title': ''
                                }
                            }
                        },
                        {
                            'value': '7',
                            'title': '190',
                            'image': {
                                'large': {
                                    'url': 'assets/images/person-1-large.png',
                                    'title': ''
                                },
                                'small': {
                                    'url': 'assets/images/person-1-small.png',
                                    'title': ''
                                }
                            }
                        },
                        {
                            'value': '8',
                            'title': 'big_chest',
                            'image': {
                                'large': {
                                    'url': 'assets/images/person-4-large.png',
                                    'title': ''
                                },
                                'small': {
                                    'url': 'assets/images/person-4-small.png',
                                    'title': ''
                                }
                            }
                        },
                        {
                            'value': '9',
                            'title': 'thin',
                            'image': {
                                'large': {
                                    'url': 'assets/images/person-1-large.png',
                                    'title': ''
                                },
                                'small': {
                                    'url': 'assets/images/person-1-small.png',
                                    'title': ''
                                }
                            }
                        }
                    ]
                },
                hair: {
                    title: "Hair",
                    items: [
                        {
                            'value': '1',
                            'title': 'braid-2-1',
                            'image': {
                                'large': {
                                    'url': 'assets/images/hair-1-large.png',
                                    'title': ''
                                },
                                'small': {
                                    'url': 'assets/images/hair-1-small.png',
                                    'title': ''
                                }
                            }
                        },
                        {
                            'value': '2',
                            'title': '2-2',
                            'image': {
                                'large': {
                                    'url': 'assets/images/hair-2-large.png',
                                    'title': ''
                                },
                                'small': {
                                    'url': 'assets/images/hair-2-small.png',
                                    'title': ''
                                }
                            }
                        },
                        {
                            'value': '3',
                            'title': '2-3',
                            'image': {
                                'large': {
                                    'url': 'assets/images/hair-3-large.png',
                                    'title': ''
                                },
                                'small': {
                                    'url': 'assets/images/hair-3-small.png',
                                    'title': ''
                                }
                            }
                        },
                        {
                            'value': '4',
                            'title': '2-4',
                            'image': {
                                'large': {
                                    'url': 'assets/images/hair-4-large.png',
                                    'title': ''
                                },
                                'small': {
                                    'url': 'assets/images/hair-4-small.png',
                                    'title': ''
                                }
                            }
                        },
                        {
                            'value': '5',
                            'title': '2-5',
                            'image': {
                                'large': {
                                    'url': 'assets/images/hair-5-large.png',
                                    'title': ''
                                },
                                'small': {
                                    'url': 'assets/images/hair-5-small.png',
                                    'title': ''
                                }
                            }
                        }
                    ]
                }
            }
        }
    });
    vm.switchConfig('dress');
    $.extend(vm.selectedValues, {
        dress: '1',
        person: '2',
        hair: '1'
    });

    function resizeList(element) {
        var title = element.find('h4');
        var list = element.find('ul');
        list.css({
            'max-height': ($(window).height() - 70 - title.outerHeight(true)) + "px",
            'overflow-x': 'hidden',
            'overflow-y': 'auto',
            'padding-left': '2px'
        });
        return element;
    }

    $(window).resize(function () {
        $('div.configItem').each(function () {
            resizeList($(this));
        });
    });
})();