var show_more = 1;
name_map = [
    {'FANG_ZEHUA': "FANG Zehua", 'YANG_XIAOYI': "YANG Xiaoyi", 'BIAN_ZHENG': 'BIAN Zheng', 'CHEN_HUALI': 'CHEN Huali', 'CHENG_MING': 'CHENG Ming', 'QIN_YI': 'QIN Yi', 'YANG_LUN': 'YANG Lun', 'SUN_XIXI': 'SUN Xixi', 'SHI_XIAOFENG': 'SHI Xiaofeng', 'LIU_ZEXIN': 'LIU Zexin', 'MAO_WEIZE': 'MAO Weize', 'ZHOU_ZIXU': 'ZHOU Zixu', 'ZHOU_ZITONG': 'ZHOU Zitong',
    'YE_YANAN': 'Ye Yanan', 'BAI_XINYU': 'BAI Xinyu', 'WANG_HUAXINYU': 'WANG Huaxinyu', 'LI_CHENGHAI': 'LI Chenghai', 'GUO_ZHENPENG': 'GUO Zhenpeng'},
    {'FANG_ZEHUA': "方泽华", 'YANG_XIAOYI': "杨晓艺", 'BIAN_ZHENG': '边政', 'CHEN_HUALI': '陈桦立', 'CHENG_MING': '承铭', 'QIN_YI': '覃怡', 'YANG_LUN': '杨伦', 'SUN_XIXI': '孙茜茜', 'SHI_XIAOFENG': '史晓锋', 'LIU_ZEXIN': '刘泽新', 'MAO_WEIZE': '茅伟泽', 'ZHOU_ZIXU': '周子煦', 'ZHOU_ZITONG': '周梓桐',
    'YE_YANAN': '叶亚楠', 'BAI_XINYU': '白心宇', 'WANG_HUAXINYU': '王华新雨', 'LI_CHENGHAI': '李成海', 'GUO_ZHENPENG': '郭振鹏'}
];
language_map =
    [
        {'change_language': "切换至中文", 'page_title': "Wangpengroup Homepage", 'home': "Home", 'about': "About",
            'research': "Research", 'partners': "Partners", 'contact': "Contact", 'team': "Team", 'prof_name': "Peng Wang (KOBY)",
            'prof_title': "Prof. Peng Wang", 'about_me': "About Me", 'about_more': "Learn More",
            'intro_1': "Professor of Mathematics, School of Mathematics and System Science, Beihang University", 'view_cv': "View My CV",
            'full_intro': "I am computational mathematician working on uncertainty quantification. We combines mathematical theory and state-of-the-art computational tools to solve scientific and engineering problems with domain scientists.",
            "background": "Background", 'education': "Education", 'employment': "Employment", 'position': "Position",
            'projects': "Projects", 'subjects': "Subjects", 'goal': "Our goal is to develop mathematical tools to quantify uncertainty in nature, engineering systems and our society, and thus provide more accurate and comprehensive predictions of these system states. Applications of our work include environmental protection (flood prediction), ecology (algae blooms), oil recovery and renewable energy systems.",
            'funding_info': "Funding Info", 'fundings': "Fundings", 'details': "Details", 'resources': "Resources",
            'materials': "Materials", 'medicines': "Medicines",
            'publications': "Publications", 'books': "Books", 'codes': "Codes", "contact_info": "Contact Info",
            'rights': "© 2019 Wangpengroup. All Rights Reserved", 'banner_1_1': "We focus on",
            'banner_1_2': "Material Science", 'banner_2_1': "We study", 'banner_2_2': "Energy Profile", 'banner_3_1': "We simulate",
            'banner_3_2': "Flow Dynamics", 'energy': "Energy", 'show_more': "Show More", 'show_less': "Show Less",
            'uq': "Uncertainty Quantification", 'pm': "Porous Media Analysis", 'ee': "Environment & Energy",
            'gs': "Graduates", 'us': "Undergraduates", 'as': "Alumni", 'scholar': "Google Scholar", 'videos': "Videos", 'seafile': "Login", 'publication': "Publications"
        },
        {'change_language': "English Version", 'page_title': "王鹏教授的实验室主页", 'home': "主页", 'about': "关于", 'research': "科研", 'partners': "合作", 'contact': "联系我们", 'team': "成员", 'prof_name': "王鹏 教授", 'prof_title': "王鹏 教授", 'about_me': "关于我", 'about_more': "了解更多", 'intro_1': "北京航空航天大学 数学与科学学院 教授", 'view_cv': "查看我的简历", "full_intro":
            "我是一名研究不确定性量化的计算数学学者。我们团队致力于结合数学理论与高效计算方法，与具体行业的科学家共同解决实际的自然和工程问题。我们的研究核心是开发数学工具以量化自然、工程和社会系统中的不确定性，进而对这些系统状态做出更准确与全面的预测。我们研究的具体应用包含环境保护（洪水预测）、生态平衡（水华爆发）、石油开采和新能源系统。", "background": "背景资料", 'education': "教育资料", 'employment': "工作经历", 'position': "其他任职", 'projects': "项目", 'subjects': "方向", 'goal':
            "我们的研究核心是开发数学工具以量化自然、工程和社会系统中的不确定性，进而对这些系统状态做出更准确与全面的预测。我们研究的具体应用包含环境保护（洪水预测）、生态平衡（水华爆发）、石油开采和新能源系统。", 'funding_info': "经费详情", 'fundings': "经费", 'details': "详情", 'resources': "资源", 'publications': "发表论文", 'books': "书籍", 'codes': "代码", "contact_info": "联系方式", 'rights': "© 2019 Wangpengroup. 保留所有权利", 'banner_1_1': "我们研究", 'banner_1_2': "材料科学", 'banner_2_1': "我们解决", 'banner_2_2': "能源问题",
            'materials': "新材料", 'medicines': "制药",
            'banner_3_1': "我们模拟", 'banner_3_2': "流体力学", 'energy': "能源", 'show_more': "显示更多", 'show_less': "隐藏",
            'uq': "不确定性量化", 'pm': "多孔介质分析", 'ee': "能源与环境",
            'gs': "研究生和博士生", 'us': "本科生", 'as': "毕业生", 'scholar': "谷歌学术", 'videos': "视频", 'seafile': "登录", 'publication': '资源'
        }
    ];
language_code = 0;
jQuery(document).ready(function($) {
    $(".scroll").click(function(event){
        event.preventDefault();
        $('html,body').animate({scrollTop:$(this.hash).offset().top},1000);
    });
    language_code = Cookies.get('lang');
    if (language_code == undefined) {
        language_code = 0;
        Cookies.set('lang', 0);
    }
    else {
        for(var i in language_map[language_code]){
            $('[data-lang="'+i+'"]').animate({ opacity : "0" }, 0, replace(i, language_map[language_code][i]));
            $('[data-lang="'+i+'"]').animate({ opacity : "1" }, 500);
        }
        for(var i in name_map[language_code]){
            $('[data-lang="'+i+'"]').animate({ opacity : "0" }, 0, replace(i, name_map[language_code][i]));
            $('[data-lang="'+i+'"]').animate({ opacity : "1" }, 500);
        }
        document.title = language_map[language_code]['page_title'];
    }
    $('#loading')/*.delay(5000)*/.animate({ opacity : "0" }, 1000, function() {
        $('#loading').css('display', 'none');
    });
    pub_switch();
});
function replace(index, content) {
    $('[data-lang="'+index+'"]').text(content);
}
$('#J_lang_switch').click(function(){
    language_code = 1 - language_code;
    for(var i in language_map[language_code]){
        $('[data-lang="'+i+'"]').animate({ opacity : "0" }, 0, replace(i, language_map[language_code][i]));
        $('[data-lang="'+i+'"]').animate({ opacity : "1" }, 500);
    }
    for(var i in name_map[language_code]){
        $('[data-lang="'+i+'"]').animate({ opacity : "0" }, 0, replace(i, name_map[language_code][i]));
        $('[data-lang="'+i+'"]').animate({ opacity : "1" }, 500);
    }
    document.title = language_map[language_code]['page_title'];
    Cookies.set('lang', language_code);
});

var currentPage = 0;
var names = [".pubwidget", ".jrlwidget", ".codwidget", ".vdowidget"];
showUp(currentPage);

function pub_switch() {
    var widgets = $(".hidres").filter(names[currentPage]);
    show_more = 1 - show_more;
    if(show_more == 1) {
        document.getElementById("show_more").setAttribute('data-lang', 'show_less');
        document.getElementById("show_more").text = language_map[language_code]["show_less"];
    }
    else {
        document.getElementById("show_more").setAttribute('data-lang', 'show_more');
        document.getElementById("show_more").text = language_map[language_code]["show_more"];
    }

    if(show_more == 1) {
        widgets.slideDown();
    }
    else {
        widgets.slideUp();
    }
}
var passes = document.getElementById('passes');
var lis = passes.querySelectorAll('li');
for (var i = 0; i < lis.length; i++) {
    lis[i].addEventListener('click', function(e) {
        var current = passes.querySelector('.current');
        if (current) {
            current.classList.remove('current');
        } else {
            e.target.classList.add('current');
        }

        positionPasses(10);
        e.target.style.opacity = 1;
    });
}

function positionPasses(ratio) {
    var currentPassed = false;
    var hasCurrent = passes.querySelector('.current') ? true : false;
    for (var i = 0; i < lis.length; i++) {
        var order = i;
        if (lis[i].classList.contains('current')) currentPassed = true;

        if (!currentPassed) order += 1;

        var offset = (order - 1) * 4 * (100 / ratio) + 39 * ratio;
        if (hasCurrent) {
            offset = 390 + (order + 1) * 39;
        }
        lis[i].style.webkitTransform = 'translate3d(0, {offset}px, 0)'.replace('{offset}', offset);
        lis[i].style.opacity = 0.7;
    }
}

positionPasses(10);

$(window).scroll(function() {
    let scroll = $(this).scrollTop();
    positionPasses(10 + scroll / 500);
});

$(document).ready(function() {
    currentImage = 0;
    for (var i = 0; i < $(".show_case").length; i++) {
        if (currentImage == i) {
            $($(".show_case")[i]).slideDown();
        }
        else {
            $($(".show_case")[i]).slideUp();
        }
    }
    currentImage = (currentImage + 1)%($(".show_case").length);
    setInterval(function () {
        for (var i = 0; i < $(".show_case").length; i++) {
            if (currentImage == i) {
                $($(".show_case")[i]).slideDown();
            }
            else {
                $($(".show_case")[i]).slideUp();
            }
        }
        currentImage = (currentImage + 1)%($(".show_case").length);
    },5000);
});

$.fn.toolBar = function changeBar(pubsAction, jrlsAction, codsAction, vdosAction){
    $("#pubs").click(function(){
        var index = $(".g-nav-list").find("li[class=selected]").index();
        if (index == 0) return;
        changeBtnState(0);
        if(pubsAction){
            pubsAction();
        }
    });
    $("#jrls").click(function(){
        var index = $(".g-nav-list").find("li[class=selected]").index();
        if (index == 1) return;
        changeBtnState(1);
        if(jrlsAction){
            jrlsAction();
        }
    });
    $("#cods").click(function(){
        var index = $(".g-nav-list").find("li[class=selected]").index();
        if (index == 2) return;
        changeBtnState(2);
        if(codsAction){
            codsAction();
        }
    });
    $("#vdos").click(function(){
        var index = $(".g-nav-list").find("li[class=selected]").index();
        if (index == 3) return;
        changeBtnState(3);
        if(vdosAction){
            vdosAction();
        }
    });
}

function changeBtnState(num){
    $(".g-nav-list li").each(function(index){
        if (num == index) {
            $(this).attr("class", "selected");
        }
        else {
            $(this).attr("class", "none");
        }
    });
}

function showUp(index) {
    for (var i = 0; i < names.length; i++) {
        if (i == index) {
            if(show_more == 0) {
                $(names[i]).not(".hidres").slideDown();
            }
            else {
                $(names[i]).slideDown();
            }
        }
        else {
            $(names[i]).slideUp();
        }
    }
}

$().toolBar(
    function action_pubs(){
        currentPage = 0;
        showUp(currentPage);
    },
    function action_jrls(){
        currentPage = 1;
        showUp(currentPage);
    },
    function action_cods(){
        currentPage = 2;
        showUp(currentPage);
    },
    function action_vdos(){
        currentPage = 3;
        showUp(currentPage);
    }
);

var pcurrentPage = 0;
var pnames = [".gs", ".us", ".as"];
pshowUp(pcurrentPage);

$.fn.ptoolBar = function changeBar(gAction, uAction, aAction){
    $("#gs").click(function(){
        var index = $(".p-nav-list").find("li[class=selected]").index();
        if (index == 0) return;
        changepBtnState(0);
        if(gAction){
            gAction();
        }
    });
    $("#us").click(function(){
        var index = $(".p-nav-list").find("li[class=selected]").index();
        if (index == 1) return;
        changepBtnState(1);
        if(uAction){
            uAction();
        }
    });
    $("#as").click(function(){
        var index = $(".p-nav-list").find("li[class=selected]").index();
        if (index == 2) return;
        changepBtnState(2);
        if(aAction){
            aAction();
        }
    });
}

function changepBtnState(num){
    $(".p-nav-list li").each(function(index){
        if (num == index) {
            $(this).attr("class", "selected");
        }
        else {
            $(this).attr("class", "none");
        }
    });
}

function pshowUp(index) {
    for (var i = 0; i < names.length; i++) {
        if (i == index) {
            $(pnames[i]).slideDown();
        }
        else {
            $(pnames[i]).slideUp();
        }
    }
}

$().ptoolBar(
    function action_as(){
        pcurrentPage = 0;
        pshowUp(pcurrentPage);
    },
    function action_us(){
        pcurrentPage = 1;
        pshowUp(pcurrentPage);
    },
    function action_as(){
        pcurrentPage = 2;
        pshowUp(pcurrentPage);
    }
);

