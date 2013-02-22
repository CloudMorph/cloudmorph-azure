DashboardApp.Views.PackageListItem = Support.CompositeView.extend({
    initialize: function () {
        _.bindAll(this, "render");
    },
    render: function () {
        console.log(JSON.stringify(this.model));
        this.$el.html(Preloader.get('packages/package_list_item')({ id: this.model.get('Id'), description: this.model.get('Description') }));
    }
});
