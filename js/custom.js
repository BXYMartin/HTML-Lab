var show_more = 1;
language_map =
    [
        {'change_language': "切换至中文", 'page_title': "Wangpengroup Homepage", 'home': "Home", 'about': "About",
            'research': "Research", 'partners': "Partners", 'contact': "Contact", 'team': "Team", 'prof_name': "Peng Wang (KOBY)",
            'prof_title': "Prof. Peng Wang", 'about_me': "About Me", 'about_more': "Learn More",
            'intro_1': "Professor of Mathematics, School of Mathematics and System Science, Beihang University", 'intro_2': "\“Thousand Talents Program\” Recipient", 'view_cv': "View My CV",
            'full_intro': "I am computational mathematician working on uncertainty quantification. We combines mathematical theory and state-of-the-art computational tools to solve scientific and engineering problems with domain scientists.",
            "background": "Background", 'education': "Education", 'employment': "Employment", 'position': "Position",
            'projects': "Projects", 'subjects': "Subjects", 'goal': "Our goal is to develop mathematical tools to quantify uncertainty in nature, engineering systems and our society, and thus provide more accurate and comprehensive predictions of these system states. Applications of our work include environmental protection (flood prediction), ecology (algae blooms), oil recovery and renewable energy systems.",
            'funding_info': "Funding Info", 'fundings': "Fundings", 'details': "Details", 'resources': "Resources",
            'materials': "Materials", 'medicines': "Medicines",
            'publications': "Publications", 'journals': "Journals", 'codes': "Codes", "contact_info": "Contact Info",
            'rights': "© 2019 Wangpengroup. All Rights Reserved", 'banner_1_1': "We focus on",
            'banner_1_2': "Material Science", 'banner_2_1': "We study", 'banner_2_2': "Energy Profile", 'banner_3_1': "We simulate",
            'banner_3_2': "Flow Dynamics", 'stochastic': "Stochastic", 'show_more': "Show More", 'show_less': "Show Less"},
        {'change_language': "English Version", 'page_title': "王鹏教授的实验室主页", 'home': "主页", 'about': "关于", 'research': "科研", 'partners': "合作", 'contact': "联系我们", 'team': "成员", 'prof_name': "王鹏 教授", 'prof_title': "王鹏 教授", 'about_me': "关于我", 'about_more': "了解更多", 'intro_1': "北京航空航天大学 数学与系统科学学院 教授", 'intro_2': "中组部“青年千人计划”专家", 'view_cv': "查看我的简历", "full_intro":
            "我是一名研究不确定性量化的计算数学学者。我们团队致力于结合数学理论与高效计算方法，与具体行业的科学家共同解决实际的自然和工程问题。我们的研究核心是开发数学工具以量化自然、工程和社会系统中的不确定性，进而对这些系统状态做出更准确与全面的预测。我们研究的具体应用包含环境保护（洪水预测）、生态平衡（水华爆发）、石油开采和新能源系统。", "background": "背景资料", 'education': "教育资料", 'employment': "工作经历", 'position': "其他任职", 'projects': "项目", 'subjects': "方向", 'goal':
            "我们的研究核心是开发数学工具以量化自然、工程和社会系统中的不确定性，进而对这些系统状态做出更准确与全面的预测。我们研究的具体应用包含环境保护（洪水预测）、生态平衡（水华爆发）、石油开采和新能源系统。", 'funding_info': "经费详情", 'fundings': "经费", 'details': "详情", 'resources': "资源", 'publications': "发表论文", 'journals': "发表期刊", 'codes': "代码", "contact_info": "联系方式", 'rights': "© 2019 Wangpengroup. 保留所有权利", 'banner_1_1': "我们研究", 'banner_1_2': "材料科学", 'banner_2_1': "我们解决", 'banner_2_2': "能源问题",
            'materials': "新材料", 'medicines': "制药",
            'banner_3_1': "我们模拟", 'banner_3_2': "流体力学", 'stochastic': "随机过程", 'show_more': "显示更多", 'show_less': "隐藏"}
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
    document.title = language_map[language_code]['page_title'];
    Cookies.set('lang', language_code);
});

var currentPage = 0;
var names = [".pubwidget", ".jrlwidget", ".codwidget"];
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

$.fn.toolBar = function changeBar(pubsAction, jrlsAction, codsAction){
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
    }
);

