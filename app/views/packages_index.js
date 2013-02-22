DashboardApp.Views.PackagesIndex = Support.CompositeView.extend({
    initialize: function () {
        console.log("Initializing ContactsIndex view");
        _.bindAll(this, 'render');
    },
    render: function () {
        console.log("Rendering ContactsIndex view");
        this.renderTemplate();
        this.renderPackagesList();
        //this.renderDetailPane();
        return this;
    },
    renderTemplate: function () {
        this.$el.html(Preloader.templates['packages/index']);
    },
    renderPackagesList: function () {
        var packagesListView = new DashboardApp.Views.PackageList({ collection: this.collection });
        this.renderChild(packagesListView);
        this.$('#package-list').html(packagesListView.el);
    },
/*    renderDetailPane: function () {
        this.$('#contact-details').html("Please select a contact from the list to the left, or create a new one");
    } */
});
