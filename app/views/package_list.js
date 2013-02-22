DashboardApp.Views.PackageList = Support.CompositeView.extend({
    events: {
//        'keyup #contact-query': "filter"
    },
    initialize: function () {
        _.bindAll(this, "render");
        this.collection.on('add destroy', this.render);
        var updateCollection = this.collection;

        var updatePackageList = function () {
            updateCollection.fetch({
                add: true
            });
            setTimeout(updatePackageList, 5000);
        };
        updatePackageList();
    },
    render: function () {
        //this.$('#contact-list').empty();
        this.$el.html(Preloader.get('packages/package_list')());
        var self = this;
        this.collection.each(function (package) {
            var package = new DashboardApp.Views.PackageListItem({ model: package });
            self.renderChild(package);
            self.$('#package-list').append(package.el);
        });
        return this;
    },
/*    filter: function (e) {
        var query = $('#contact-query').val().toLowerCase();
        this.$('#contact-list a').each(function (i) {
            if (this.innerText.toLowerCase().indexOf(query) === -1) {
                $(this).closest('li').hide();
            } else {
                $(this).closest('li').show();
            }
        });
    } */
});
