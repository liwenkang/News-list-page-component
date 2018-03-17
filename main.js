const switchList = function () {
    var $obj = $('.content_main ul')
    var len = $obj.length
    var i = 0
    $("#id-a-next").click(function () {
        i++
        if (i === len) {
            i = 0
        }
        $obj.stop(true, true).hide().eq(i).fadeIn(800)
        return false
    });
    $("#id-a-previous").click(function () {
        i--
        if (i === -1) {
            i = len - 1
        }
        $obj.stop(true, true).hide().eq(i).fadeIn(800)
        return false
    })
}

const __main = function () {
    switchList()
}

__main()