import './app2.css'
import $ from "jquery"

const $tabBar = $('#app2 .tab-bar')
const $tabContent = $('#app2 .tab-content')

$tabBar.on('click', 'li', (e) => {
    const $li = $(e.currentTarget);// 获取点击的那个元素

    $li.addClass("selected")
        .siblings()
        .removeClass("selected")

    const index = $li.index()
    $tabContent.children()
        .eq(index).addClass('active')
        .siblings().removeClass('active');
})

// 模拟初始化，点击第1个tab-bar
$tabBar.children().eq(0).trigger('click')