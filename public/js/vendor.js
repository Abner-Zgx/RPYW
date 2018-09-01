var vendors = [
    { id: 1, vendor: "荣浦印务", contact: "高翔", email: "ios4zgx@gmail.com" },
    { id: 2, vendor: "子龙印刷有限公司", contact: "张宇", email: "test@a.com" },
    { id: 3, vendor: "浦佳科技有限公司", contact: "Abner", email: "12345678912@qq.com" },
    { id: 1, vendor: "荣浦印务", contact: "高翔", email: "ios4zgx@gmail.com" },
    { id: 2, vendor: "子龙印刷有限公司", contact: "张宇", email: "test@a.com" },
    { id: 3, vendor: "浦佳科技有限公司", contact: "Abner", email: "12345678912@qq.com" },
    { id: 1, vendor: "荣浦印务", contact: "高翔", email: "ios4zgx@gmail.com" },
    { id: 2, vendor: "子龙印刷有限公司", contact: "张宇", email: "test@a.com" },
    { id: 3, vendor: "浦佳科技有限公司", contact: "Abner", email: "12345678912@qq.com" },
    { id: 1, vendor: "荣浦印务", contact: "高翔", email: "ios4zgx@gmail.com" },
    { id: 2, vendor: "子龙印刷有限公司", contact: "张宇", email: "test@a.com" },
    { id: 3, vendor: "浦佳科技有限公司", contact: "Abner", email: "12345678912@qq.com" },
    { id: 1, vendor: "荣浦印务", contact: "高翔", email: "ios4zgx@gmail.com" },
    { id: 2, vendor: "子龙印刷有限公司", contact: "张宇", email: "test@a.com" },
    { id: 3, vendor: "浦佳科技有限公司", contact: "Abner", email: "12345678912@qq.com" },
    { id: 1, vendor: "荣浦印务", contact: "高翔", email: "ios4zgx@gmail.com" },
    { id: 2, vendor: "子龙印刷有限公司", contact: "张宇", email: "test@a.com" },
    { id: 3, vendor: "浦佳科技有限公司", contact: "Abner", email: "12345678912@qq.com" },
    { id: 1, vendor: "荣浦印务", contact: "高翔", email: "ios4zgx@gmail.com" },
    { id: 2, vendor: "子龙印刷有限公司", contact: "张宇", email: "test@a.com" },
    { id: 3, vendor: "浦佳科技有限公司", contact: "Abner", email: "12345678912@qq.com" },
    { id: 1, vendor: "荣浦印务", contact: "高翔", email: "ios4zgx@gmail.com" },
    { id: 2, vendor: "子龙印刷有限公司", contact: "张宇", email: "test@a.com" },
    { id: 3, vendor: "浦佳科技有限公司", contact: "Abner", email: "12345678912@qq.com" },
];
var survey = {
    pages: [
        {
            name: "page1",
            elements: [
                {
                    type: "text",
                    name: "name",
                    title: "Please enter your name:",
                    isRequired: true,
                    placeHolder: "Jon Snow"
                },
                {
                    type: "text",
                    name: "birthdate",
                    title: "Your birthdate:",
                    isRequired: true,
                    inputType: "date"
                },
                {
                    type: "text",
                    name: "email",
                    title: "Your e-mail:",
                    isRequired: true,
                    validators: [
                        {
                            type: "email"
                        }
                    ],
                    inputType: "email",
                    placeHolder: "jon.snow@nightwatch.org"
                }
            ]
        },
        {
            name: "page2",
            elements: [
                {
                    type: "checkbox",
                    name: "question1",
                    choices: [
                        "item1",
                        "item2",
                        "item3"
                    ]
                },
                {
                    type: "file",
                    name: "question3",
                    maxSize: 0
                },
                {
                    type: "expression",
                    name: "question2"
                }
            ]
        }
    ]
}

$(function () {

    var self = {
        init() {
            this.addEvent();
        },
        addEvent() {
            this.loadTableData();
            this.loadSurvey();
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
                ],
            });
        },
        loadSurvey() {
            window.survey = new Survey.Model(survey);
            $("#surveyElement").Survey({ model: survey });
        }
    }

    self.init();

})