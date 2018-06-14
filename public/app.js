let vueApp = new Vue({
  el: '#app',
  data: {
    settings: {
      iconsPath: 'imgs/'
    },
    sideBarItems: [
      { id: 'contacts', text: 'Contacts', icon: 'contacts.png' },
      { id: 'projects', text: 'Projects', icon: 'projects.png' },
      { id: 'events', text: 'Events', icon: 'events.png' },
      { id: 'settings', text: 'Settings', icon: 'settings.png' }
    ],
    toolBarItems: [
      { type: 'text', id: 'title', text: '&nbsp;' },
      { type: 'spacer' },
      { type: 'button', id: 'add', img: 'add.png' },
      { type: 'button', id: 'del', img: 'del.png' }
    ]
  },
  methods: {
    initDhx: function () {
      let that = this;
      let mainSidebar = new dhtmlXSideBar({
        parent: 'app',
        icons_path: `${this.settings.iconsPath}sidebar/`,
        width: 180,
        template: 'tiles',
        items: this.sideBarItems
      });

      let mainToolbar = mainSidebar.attachToolbar({
        icons_size: 32,
        icons_path: `${this.settings.iconsPath}toolbar/`,
        items: this.toolBarItems
      });

      mainSidebar.attachEvent('onSelect', function (id) {
        window.dhx4.callEvent('onSidebarSelect', [id, this.cells(id)]);
        myForm = mainSidebar.cells(id).attachForm([
          { type: 'input', name: 'label', label: 'Label' },
          {
            type: 'combo', label: 'Icon', name: 'icon', options: [
              { text: 'contacts.png' },
              { text: 'projects.png', selected: true },
              { text: 'events.png' },
              { text: 'settings.png' }
            ]
          },
          { type: 'button', value: 'Add' }
        ]);
        myForm.attachEvent('onButtonClick', function (id) {
          let iconName = myForm.getCombo('icon').getSelectedText();
          mainSidebar.addItem({ id: myForm.getItemValue('label'), text: myForm.getItemValue('label'), icon: iconName });
          //that.sideBarItems.push({id: myForm.getItemValue('label'), text: myForm.getItemValue('label'), icon: iconName});
          //console.log(that.sideBarItems);
        });
      });
    }
  },
  mounted: function () {
    this.initDhx();
  }
});
