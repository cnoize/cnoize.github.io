$.get("assets/scripts/data.json", function (data) {
    var vm = new Vue({
        "el": "#app",
        "data": {
            "selected": {
                "word": {},
                "examples": false,
                "en": false,
                "cn": false,
                "detail": false
            }
        },
        "methods": {
            "recall": function (words, selected) {
                var index = Math.min(words.length, selected);
                var word = words[index];
                this.selected = $.extend({}, this.selected,
                    {
                        "word": data.words[word],
                        "examples": false,
                        "en": false,
                        "cn": false,
                        "detail": false
                    });
            },
            "play": function (audioUrl) {
                $('#audio').attr({
                    "src": audioUrl,
                    "autoplay": "autoplay"
                });
            },
            "unknown": function () {
                if (!this.selected.examples) {
                    this.selected.examples = true;
                    return;
                }
                if (!this.selected.en) {
                    this.selected.en = true;
                    return;
                }
                if (!this.selected.cn) {
                    this.selected.cn = true;
                    return;
                }
            },
            "known": function () {
                $.extend(this.selected, {
                    "examples": true,
                    "en": true,
                    "cn": true,
                    "detail": true
                });
            }
        }
    });
    vm.recall(["abandon"], 0);
});