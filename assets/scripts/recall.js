$.get("assets/data/words.json", function (words) {
    $.get("assets/data/recall.json", function (recall) {
        var vm = new Vue({
            "el": "#recall",
            "data": {
                "recall": recall,
                "selected": {
                    "index": -1,
                    "example": false,
                    "en": false,
                    "cn": false,
                    "full": false
                }
            },
            "computed": {
                "length": function () {
                    return this.recall.words.length;
                },
                "groups": function () {
                    return Math.ceil(this.length / this.recall.size);
                },
                "groupOf": function () {
                    if (this.selected.index < 0) {
                        return false;
                    }
                    return Math.ceil(
                        (this.selected.index + 1) / this.recall.size);
                },
                "selectedWord": function () {
                    if (this.selected.index < 0) {
                        return false;
                    }
                    var selectedIndex = Math.min(this.selected.index, this.length - 1);
                    var wordContent = this.recall.words[selectedIndex];
                    return words[wordContent];
                }
            },
            "methods": {
                "select": function (index) {
                    this.selected = {
                        "example": false,
                        "en": false,
                        "cn": false,
                        "full": false,
                        "index": Math.min(this.length - 1, index)
                    };
                },
                "play": function (audioUrl) {
                    $("#audio").attr({
                        "src": audioUrl,
                        "autoplay": "autoplay"
                    });
                },
                "known": function () {
                    $.extend(this.selected, {
                        "example": true,
                        "en": true,
                        "cn": true,
                        "full": true
                    });
                },
                "unknown": function () {
                    if (!this.selected.example) {
                        this.selected.example = true;
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
                "next": function () {
                    var newIndex = this.selected.index + 1;
                    this.select(newIndex);
                }
            }
        });
    });
});