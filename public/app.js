let vueApp = new Vue({
  el: '#app',
  data: {
    message: 'hello world',
    items: [
      { id: "contacts", text: "Contacts", icon: "contacts.png" },
      { id: "projects", text: "Projects", icon: "projects.png" },
      { id: "events", text: "Events", icon: "events.png" },
      { id: "settings", text: "Settings", icon: "settings.png" }
    ]
  },
  methods: {
    initDhx: function () {
      this.message = 'hello init';
      let mainSidebar = new dhtmlXSideBar({
        parent: 'app',
        icons_path: "imgs/sidebar/",
        width: 180,
        template: "tiles"
      });
      console.log(this.items);
      for(item of this.items) {
        mainSidebar.addItem(item);
      }
      console.log(mainSidebar);
    }
  },
  mounted: function () {
    console.log('loading dhtmlx...', this.message);
    this.initDhx();
  }
});
