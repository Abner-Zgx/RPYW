var vendors = [
    {id: 1, vendor: "荣浦印务", contact: "高翔", email: "ios4zgx@gmail.com"},
    {id: 2, vendor: "子龙印刷有限公司", contact: "张宇", email: "test@a.com"},
    {id: 3, vendor: "浦佳科技有限公司", contact: "Abner", email: "12345678912@qq.com"},
    {id: 1, vendor: "荣浦印务", contact: "高翔", email: "ios4zgx@gmail.com"},
    {id: 2, vendor: "子龙印刷有限公司", contact: "张宇", email: "test@a.com"},
    {id: 3, vendor: "浦佳科技有限公司", contact: "Abner", email: "12345678912@qq.com"},
    {id: 1, vendor: "荣浦印务", contact: "高翔", email: "ios4zgx@gmail.com"},
    {id: 2, vendor: "子龙印刷有限公司", contact: "张宇", email: "test@a.com"},
    {id: 3, vendor: "浦佳科技有限公司", contact: "Abner", email: "12345678912@qq.com"},
    {id: 1, vendor: "荣浦印务", contact: "高翔", email: "ios4zgx@gmail.com"},
    {id: 2, vendor: "子龙印刷有限公司", contact: "张宇", email: "test@a.com"},
    {id: 3, vendor: "浦佳科技有限公司", contact: "Abner", email: "12345678912@qq.com"},
    {id: 1, vendor: "荣浦印务", contact: "高翔", email: "ios4zgx@gmail.com"},
    {id: 2, vendor: "子龙印刷有限公司", contact: "张宇", email: "test@a.com"},
    {id: 3, vendor: "浦佳科技有限公司", contact: "Abner", email: "12345678912@qq.com"},
    {id: 1, vendor: "荣浦印务", contact: "高翔", email: "ios4zgx@gmail.com"},
    {id: 2, vendor: "子龙印刷有限公司", contact: "张宇", email: "test@a.com"},
    {id: 3, vendor: "浦佳科技有限公司", contact: "Abner", email: "12345678912@qq.com"},
    {id: 1, vendor: "荣浦印务", contact: "高翔", email: "ios4zgx@gmail.com"},
    {id: 2, vendor: "子龙印刷有限公司", contact: "张宇", email: "test@a.com"},
    {id: 3, vendor: "浦佳科技有限公司", contact: "Abner", email: "12345678912@qq.com"},
    {id: 1, vendor: "荣浦印务", contact: "高翔", email: "ios4zgx@gmail.com"},
    {id: 2, vendor: "子龙印刷有限公司", contact: "张宇", email: "test@a.com"},
    {id: 3, vendor: "浦佳科技有限公司", contact: "Abner", email: "12345678912@qq.com"},
];

$(function(){

    var self = {
        init(){
            this.addEvent();
        },
        addEvent(){
            this.loadTableData();
        },
        loadTableData() {
            var languageURL;
            if ($.cookie("locale") == "zh") {
                languageURL = "//cdn.datatables.net/plug-ins/1.10.19/i18n/Chinese.json"
            } else if ($.cookie("locale") == "en") {
                languageURL = "//cdn.datatables.net/plug-ins/1.10.19/i18n/English.json"
            } else {
                languageURL = "//cdn.datatables.net/plug-ins/1.10.19/i18n/English.json"
            }
            $("#vendorTable").DataTable({
                data: vendors,
                language: {
                    url: languageURL
                },
                columns: [
                    { data: "id" },
                    { data: "vendor" },
                    { data: "contact" },
                    { data: "email" },
                ]
            });
        }
    }
    
    self.init();

})