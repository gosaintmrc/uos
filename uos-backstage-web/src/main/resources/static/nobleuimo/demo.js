
(function leftsider() {
    var s="<div class=\"sidebar-header\">\n" +
        "    <a href=\"#\" class=\"sidebar-brand\">\n" +
        "    Noble<span>UI</span>\n" +
        "    </a>\n" +
        "    <div class=\"sidebar-toggler not-active\">\n" +
        "    <span></span>\n" +
        "    <span></span>\n" +
        "    <span></span>\n" +
        "    </div>\n" +
        "    </div>\n" +
        "    <div class=\"sidebar-body\">\n" +
        "    <ul class=\"nav\">\n" +
        "    <li class=\"nav-item nav-category\">Main</li>\n" +
        "    <li class=\"nav-item\">\n" +
        "    <a href=\"/uos/uos-backstage-web/static/nobleuimo/backstage/dashboard-one.html\" class=\"nav-link\">\n" +
        "    <i class=\"link-icon\" data-feather=\"box\"></i>\n" +
        "    <span class=\"link-title\">仪表板</span>\n" +
        "    </a>\n" +
        "    </li>\n" +
        "    <li class=\"nav-item nav-category\">web apps</li>\n" +
        "<li class=\"nav-item\">\n" +
        "    <a class=\"nav-link\" data-toggle=\"collapse\" href=\"#emails\" role=\"button\" aria-expanded=\"false\" aria-controls=\"emails\">\n" +
        "    <i class=\"link-icon\" data-feather=\"mail\"></i>\n" +
        "    <span class=\"link-title\">邮件</span>\n" +
        "    <i class=\"link-arrow\" data-feather=\"chevron-down\"></i>\n" +
        "    </a>\n" +
        "    <div class=\"collapse\" id=\"emails\">\n" +
        "    <ul class=\"nav sub-menu\">\n" +
        "    <li class=\"nav-item\">\n" +
        "    <a href=\"pages/email/inbox.html\" class=\"nav-link\">收件箱</a>\n" +
        "    </li>\n" +
        "    <li class=\"nav-item\">\n" +
        "    <a href=\"pages/email/read.html\" class=\"nav-link\">已读</a>\n" +
        "    </li>\n" +
        "    <li class=\"nav-item\">\n" +
        "    <a href=\"pages/email/compose.html\" class=\"nav-link\">写邮件</a>\n" +
        "    </li>\n" +
        "    </ul>\n" +
        "    </div>\n" +
        "    </li>\n" +
        "    <li class=\"nav-item\">\n" +
        "    <a href=\"pages/apps/chat.html\" class=\"nav-link\">\n" +
        "    <i class=\"link-icon\" data-feather=\"message-square\"></i>\n" +
        "    <span class=\"link-title\">聊天</span>\n" +
        "    </a>\n" +
        "    </li>\n" +
        "    <li class=\"nav-item\">\n" +
        "    <a href=\"pages/apps/calendar.html\" class=\"nav-link\">\n" +
        "    <i class=\"link-icon\" data-feather=\"calendar\"></i>\n" +
        "    <span class=\"link-title\">日历</span>\n" +
        "    </a>\n" +
        "    </li>\n" +
        "    <li class=\"nav-item nav-category\">组件</li>\n" +
        "    <li class=\"nav-item\">\n" +
        "    <a class=\"nav-link\" data-toggle=\"collapse\" href=\"#uiComponents\" role=\"button\" aria-expanded=\"false\" aria-controls=\"uiComponents\">\n" +
        "    <i class=\"link-icon\" data-feather=\"feather\"></i>\n" +
        "    <span class=\"link-title\">UI Kit</span>\n" +
        "<i class=\"link-arrow\" data-feather=\"chevron-down\"></i>\n" +
        "    </a>\n" +
        "    <div class=\"collapse\" id=\"uiComponents\">\n" +
        "    <ul class=\"nav sub-menu\">\n" +
        "    <li class=\"nav-item\">\n" +
        "    <a href=\"pages/ui-components/alerts.html\" class=\"nav-link\">Alerts</a>\n" +
        "    </li>\n" +
        "    <li class=\"nav-item\">\n" +
        "    <a href=\"pages/ui-components/badges.html\" class=\"nav-link\">Badges</a>\n" +
        "    </li>\n" +
        "    <li class=\"nav-item\">\n" +
        "    <a href=\"pages/ui-components/breadcrumbs.html\" class=\"nav-link\">Breadcrumbs</a>\n" +
        "    </li>\n" +
        "    <li class=\"nav-item\">\n" +
        "    <a href=\"pages/ui-components/buttons.html\" class=\"nav-link\">Buttons</a>\n" +
        "    </li>\n" +
        "    <li class=\"nav-item\">\n" +
        "    <a href=\"pages/ui-components/button-group.html\" class=\"nav-link\">Button group</a>\n" +
        "</li>\n" +
        "<li class=\"nav-item\">\n" +
        "    <a href=\"pages/ui-components/cards.html\" class=\"nav-link\">Cards</a>\n" +
        "    </li>\n" +
        "    <li class=\"nav-item\">\n" +
        "    <a href=\"pages/ui-components/carousel.html\" class=\"nav-link\">Carousel</a>\n" +
        "    </li>\n" +
        "    <li class=\"nav-item\">\n" +
        "    <a href=\"pages/ui-components/collapse.html\" class=\"nav-link\">Collapse</a>\n" +
        "    </li>\n" +
        "    <li class=\"nav-item\">\n" +
        "    <a href=\"pages/ui-components/dropdowns.html\" class=\"nav-link\">Dropdowns</a>\n" +
        "    </li>\n" +
        "    <li class=\"nav-item\">\n" +
        "    <a href=\"pages/ui-components/list-group.html\" class=\"nav-link\">List group</a>\n" +
        "</li>\n" +
        "<li class=\"nav-item\">\n" +
        "    <a href=\"pages/ui-components/media-object.html\" class=\"nav-link\">Media object</a>\n" +
        "</li>\n" +
        "<li class=\"nav-item\">\n" +
        "    <a href=\"pages/ui-components/modal.html\" class=\"nav-link\">Modal</a>\n" +
        "    </li>\n" +
        "    <li class=\"nav-item\">\n" +
        "    <a href=\"pages/ui-components/navs.html\" class=\"nav-link\">Navs</a>\n" +
        "    </li>\n" +
        "    <li class=\"nav-item\">\n" +
        "    <a href=\"pages/ui-components/navbar.html\" class=\"nav-link\">Navbar</a>\n" +
        "    </li>\n" +
        "    <li class=\"nav-item\">\n" +
        "    <a href=\"pages/ui-components/pagination.html\" class=\"nav-link\">Pagination</a>\n" +
        "    </li>\n" +
        "    <li class=\"nav-item\">\n" +
        "    <a href=\"pages/ui-components/popover.html\" class=\"nav-link\">Popovers</a>\n" +
        "    </li>\n" +
        "    <li class=\"nav-item\">\n" +
        "    <a href=\"pages/ui-components/progress.html\" class=\"nav-link\">Progress</a>\n" +
        "    </li>\n" +
        "    <li class=\"nav-item\">\n" +
        "    <a href=\"pages/ui-components/scrollbar.html\" class=\"nav-link\">Scrollbar</a>\n" +
        "    </li>\n" +
        "    <li class=\"nav-item\">\n" +
        "    <a href=\"pages/ui-components/scrollspy.html\" class=\"nav-link\">Scrollspy</a>\n" +
        "    </li>\n" +
        "    <li class=\"nav-item\">\n" +
        "    <a href=\"pages/ui-components/spinners.html\" class=\"nav-link\">Spinners</a>\n" +
        "    </li>\n" +
        "    <li class=\"nav-item\">\n" +
        "    <a href=\"pages/ui-components/tooltips.html\" class=\"nav-link\">Tooltips</a>\n" +
        "    </li>\n" +
        "    </ul>\n" +
        "    </div>\n" +
        "    </li>\n" +
        "    <li class=\"nav-item\">\n" +
        "    <a class=\"nav-link\" data-toggle=\"collapse\" href=\"#advancedUI\" role=\"button\" aria-expanded=\"false\" aria-controls=\"advancedUI\">\n" +
        "    <i class=\"link-icon\" data-feather=\"anchor\"></i>\n" +
        "    <span class=\"link-title\">Advanced UI</span>\n" +
        "<i class=\"link-arrow\" data-feather=\"chevron-down\"></i>\n" +
        "    </a>\n" +
        "    <div class=\"collapse\" id=\"advancedUI\">\n" +
        "    <ul class=\"nav sub-menu\">\n" +
        "    <li class=\"nav-item\">\n" +
        "    <a href=\"pages/advanced-ui/cropper.html\" class=\"nav-link\">Cropper</a>\n" +
        "    </li>\n" +
        "    <li class=\"nav-item\">\n" +
        "    <a href=\"pages/advanced-ui/owl-carousel.html\" class=\"nav-link\">Owl carousel</a>\n" +
        "</li>\n" +
        "<li class=\"nav-item\">\n" +
        "    <a href=\"pages/advanced-ui/sweet-alert.html\" class=\"nav-link\">Sweet Alert</a>\n" +
        "</li>\n" +
        "</ul>\n" +
        "</div>\n" +
        "</li>\n" +
        "<li class=\"nav-item\">\n" +
        "    <a class=\"nav-link\" data-toggle=\"collapse\" href=\"#forms\" role=\"button\" aria-expanded=\"false\" aria-controls=\"forms\">\n" +
        "    <i class=\"link-icon\" data-feather=\"inbox\"></i>\n" +
        "    <span class=\"link-title\">Forms</span>\n" +
        "    <i class=\"link-arrow\" data-feather=\"chevron-down\"></i>\n" +
        "    </a>\n" +
        "    <div class=\"collapse\" id=\"forms\">\n" +
        "    <ul class=\"nav sub-menu\">\n" +
        "    <li class=\"nav-item\">\n" +
        "    <a href=\"pages/forms/basic-elements.html\" class=\"nav-link\">Basic Elements</a>\n" +
        "</li>\n" +
        "<li class=\"nav-item\">\n" +
        "    <a href=\"pages/forms/advanced-elements.html\" class=\"nav-link\">Advanced Elements</a>\n" +
        "</li>\n" +
        "<li class=\"nav-item\">\n" +
        "    <a href=\"pages/forms/editors.html\" class=\"nav-link\">Editors</a>\n" +
        "    </li>\n" +
        "    <li class=\"nav-item\">\n" +
        "    <a href=\"pages/forms/wizard.html\" class=\"nav-link\">Wizard</a>\n" +
        "    </li>\n" +
        "    </ul>\n" +
        "    </div>\n" +
        "    </li>\n" +
        "    <li class=\"nav-item\">\n" +
        "    <a class=\"nav-link\"  data-toggle=\"collapse\" href=\"#charts\" role=\"button\" aria-expanded=\"false\" aria-controls=\"charts\">\n" +
        "    <i class=\"link-icon\" data-feather=\"pie-chart\"></i>\n" +
        "    <span class=\"link-title\">Charts</span>\n" +
        "    <i class=\"link-arrow\" data-feather=\"chevron-down\"></i>\n" +
        "    </a>\n" +
        "    <div class=\"collapse\" id=\"charts\">\n" +
        "    <ul class=\"nav sub-menu\">\n" +
        "    <li class=\"nav-item\">\n" +
        "    <a href=\"pages/charts/apex.html\" class=\"nav-link\">Apex</a>\n" +
        "    </li>\n" +
        "    <li class=\"nav-item\">\n" +
        "    <a href=\"pages/charts/chartjs.html\" class=\"nav-link\">ChartJs</a>\n" +
        "    </li>\n" +
        "    <li class=\"nav-item\">\n" +
        "    <a href=\"pages/charts/flot.html\" class=\"nav-link\">Flot</a>\n" +
        "    </li>\n" +
        "    <li class=\"nav-item\">\n" +
        "    <a href=\"pages/charts/morrisjs.html\" class=\"nav-link\">Morris</a>\n" +
        "    </li>\n" +
        "    <li class=\"nav-item\">\n" +
        "    <a href=\"pages/charts/peity.html\" class=\"nav-link\">Peity</a>\n" +
        "    </li>\n" +
        "    <li class=\"nav-item\">\n" +
        "    <a href=\"pages/charts/sparkline.html\" class=\"nav-link\">Sparkline</a>\n" +
        "    </li>\n" +
        "    </ul>\n" +
        "    </div>\n" +
        "    </li>\n" +
        "    <li class=\"nav-item\">\n" +
        "    <a class=\"nav-link\" data-toggle=\"collapse\" href=\"#tables\" role=\"button\" aria-expanded=\"false\" aria-controls=\"tables\">\n" +
        "    <i class=\"link-icon\" data-feather=\"layout\"></i>\n" +
        "    <span class=\"link-title\">Table</span>\n" +
        "    <i class=\"link-arrow\" data-feather=\"chevron-down\"></i>\n" +
        "    </a>\n" +
        "    <div class=\"collapse\" id=\"tables\">\n" +
        "    <ul class=\"nav sub-menu\">\n" +
        "    <li class=\"nav-item\">\n" +
        "    <a href=\"pages/tables/basic-table.html\" class=\"nav-link\">Basic Tables</a>\n" +
        "</li>\n" +
        "<li class=\"nav-item\">\n" +
        "    <a href=\"pages/tables/data-table.html\" class=\"nav-link\">Data Table</a>\n" +
        "</li>\n" +
        "</ul>\n" +
        "</div>\n" +
        "</li>\n" +
        "<li class=\"nav-item\">\n" +
        "    <a class=\"nav-link\" data-toggle=\"collapse\" href=\"#icons\" role=\"button\" aria-expanded=\"false\" aria-controls=\"icons\">\n" +
        "    <i class=\"link-icon\" data-feather=\"smile\"></i>\n" +
        "    <span class=\"link-title\">Icons</span>\n" +
        "    <i class=\"link-arrow\" data-feather=\"chevron-down\"></i>\n" +
        "    </a>\n" +
        "    <div class=\"collapse\" id=\"icons\">\n" +
        "    <ul class=\"nav sub-menu\">\n" +
        "    <li class=\"nav-item\">\n" +
        "    <a href=\"pages/icons/feather-icons.html\" class=\"nav-link\">Feather Icons</a>\n" +
        "</li>\n" +
        "<li class=\"nav-item\">\n" +
        "    <a href=\"pages/icons/flag-icons.html\" class=\"nav-link\">Flag Icons</a>\n" +
        "</li>\n" +
        "<li class=\"nav-item\">\n" +
        "    <a href=\"pages/icons/mdi-icons.html\" class=\"nav-link\">Mdi Icons</a>\n" +
        "</li>\n" +
        "</ul>\n" +
        "</div>\n" +
        "</li>\n" +
        "<li class=\"nav-item nav-category\">Pages</li>\n" +
        "    <li class=\"nav-item\">\n" +
        "    <a class=\"nav-link\" data-toggle=\"collapse\" href=\"#general-pages\" role=\"button\" aria-expanded=\"false\" aria-controls=\"general-pages\">\n" +
        "    <i class=\"link-icon\" data-feather=\"book\"></i>\n" +
        "    <span class=\"link-title\">Special pages</span>\n" +
        "<i class=\"link-arrow\" data-feather=\"chevron-down\"></i>\n" +
        "    </a>\n" +
        "    <div class=\"collapse\" id=\"general-pages\">\n" +
        "    <ul class=\"nav sub-menu\">\n" +
        "    <li class=\"nav-item\">\n" +
        "    <a href=\"pages/general/blank-page.html\" class=\"nav-link\">Blank page</a>\n" +
        "</li>\n" +
        "<li class=\"nav-item\">\n" +
        "    <a href=\"pages/general/faq.html\" class=\"nav-link\">Faq</a>\n" +
        "    </li>\n" +
        "    <li class=\"nav-item\">\n" +
        "    <a href=\"pages/general/invoice.html\" class=\"nav-link\">Invoice</a>\n" +
        "    </li>\n" +
        "    <li class=\"nav-item\">\n" +
        "    <a href=\"pages/general/profile.html\" class=\"nav-link\">Profile</a>\n" +
        "    </li>\n" +
        "    <li class=\"nav-item\">\n" +
        "    <a href=\"pages/general/pricing.html\" class=\"nav-link\">Pricing</a>\n" +
        "    </li>\n" +
        "    <li class=\"nav-item\">\n" +
        "    <a href=\"pages/general/timeline.html\" class=\"nav-link\">Timeline</a>\n" +
        "    </li>\n" +
        "    </ul>\n" +
        "    </div>\n" +
        "    </li>\n" +
        "    <li class=\"nav-item\">\n" +
        "    <a class=\"nav-link\" data-toggle=\"collapse\" href=\"#authPages\" role=\"button\" aria-expanded=\"false\" aria-controls=\"authPages\">\n" +
        "    <i class=\"link-icon\" data-feather=\"unlock\"></i>\n" +
        "    <span class=\"link-title\">Authentication</span>\n" +
        "    <i class=\"link-arrow\" data-feather=\"chevron-down\"></i>\n" +
        "    </a>\n" +
        "    <div class=\"collapse\" id=\"authPages\">\n" +
        "    <ul class=\"nav sub-menu\">\n" +
        "    <li class=\"nav-item\">\n" +
        "    <a href=\"pages/auth/login.html\" class=\"nav-link\">Login</a>\n" +
        "    </li>\n" +
        "    <li class=\"nav-item\">\n" +
        "    <a href=\"pages/auth/register.html\" class=\"nav-link\">Register</a>\n" +
        "    </li>\n" +
        "    </ul>\n" +
        "    </div>\n" +
        "    </li>\n" +
        "    <li class=\"nav-item\">\n" +
        "    <a class=\"nav-link\" data-toggle=\"collapse\" href=\"#errorPages\" role=\"button\" aria-expanded=\"false\" aria-controls=\"errorPages\">\n" +
        "    <i class=\"link-icon\" data-feather=\"cloud-off\"></i>\n" +
        "    <span class=\"link-title\">Error</span>\n" +
        "    <i class=\"link-arrow\" data-feather=\"chevron-down\"></i>\n" +
        "    </a>\n" +
        "    <div class=\"collapse\" id=\"errorPages\">\n" +
        "    <ul class=\"nav sub-menu\">\n" +
        "    <li class=\"nav-item\">\n" +
        "    <a href=\"pages/error/404.html\" class=\"nav-link\">404</a>\n" +
        "    </li>\n" +
        "    <li class=\"nav-item\">\n" +
        "    <a href=\"pages/error/500.html\" class=\"nav-link\">500</a>\n" +
        "    </li>\n" +
        "    </ul>\n" +
        "    </div>\n" +
        "    </li>\n" +
        "    <li class=\"nav-item nav-category\">Docs</li>\n" +
        "    <li class=\"nav-item\">\n" +
        "    <a href=\"https://www.nobleui.com/html/documentation/docs.html\" target=\"_blank\" class=\"nav-link\">\n" +
        "    <i class=\"link-icon\" data-feather=\"hash\"></i>\n" +
        "    <span class=\"link-title\">Documentation</span>\n" +
        "    </a>\n" +
        "    </li>\n" +
        "    </ul>\n" +
        "    </div>\n";
     box.innerHTML=s;
})();
