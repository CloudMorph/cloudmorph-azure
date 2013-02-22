define(["app/app", "Support", "app/views/home_page"], function (DashboardApp, Support) {
    DashboardApp.Routers.Main = Support.SwappingRouter.extend({
        routes: {
            '': "index",
        },
        initialize: function (options) {
            console.log("Initializing Main router");
            this.el = $('div#app-content');
            this.collection = options.collection;
        },
        index: function () {
            console.log("Invoking home page route");
            var view = new DashboardApp.Views.HomePage();
            this.swap(view);
        }
    });
})