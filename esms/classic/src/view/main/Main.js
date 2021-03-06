/**
 * This class is the main view for the application. It is specified in app.js as the
 * "mainView" property. That setting automatically applies the "viewport"
 * plugin causing this view to become the body element (i.e., the viewport).
 *
 * TODO - Replace this content of this view to suite the needs of your application.
 */
Ext.define('Esms.view.main.Main', {
    extend: 'Ext.container.Viewport',
    xtype: 'app-main',

    requires: [
        'Ext.list.Tree',
        'Esms.view.main.MainContainerWrap',
        'Esms.view.main.MainController',
        'Esms.view.main.MainModel'
    ],

    controller: 'main',
	viewModel: 'main',
	
	layout: {
		type: 'border'
	},
	
	listeners: {
        render: 'onMainViewRender'
    },
	
    items: [{
		region: 'north',
    	xtype: 'toolbar',
    	cls: 'sencha-dash-dash-headerbar toolbar-btn-shadow',
    	height: 64,    	
    	items:[{
            margin: '0 0 0 8',            
            iconCls:'x-fa fa-navicon',
            xtype: 'button',
            enableToggle: true,
            toggleHandler: 'onToggleMicro'        	     	 
    	},{
        	id: 'app-header-title',
        	xtype: 'component',
        	html: '게시판'      
        },'->',{
        	xtype: 'component',
        	bind: {
        		html: '{name}'
        	}        	
        },{
    		xtype: 'image',
    		src: 'http://www.sencha.com/img/20110215-feat-html5.png',
		    width: 60,
		    height: 40
    	}]
	},{
		region: 'west',
		width: 200,
		reference: 'treelistContainer',
		layout: {
			type: 'vbox',
			align: 'stretch'
		},
		border: false,
		scrollable: 'y',
		items: [{
				xtype: 'image',
	    		src: 'http://www.sencha.com/img/20110215-feat-html5.png',
			    width: 60,
			    height: 70,
			    cls: 'userProfilePic'
			},{
				xtype: 'treelist',		
		        ui: 'nav',
				reference: 'navigationTreeList',
				itemId: 'navigationTreeList',     
				bind : {
					store: '{navigationTree}'
				},		        
		        expanderFirst: true,
		        listeners: {
		            selectionchange: 'onNavigationTreeSelectionChange'
		        }	
		}]				
	},{
        xtype: 'container',    
        flex: 1,
        reference: 'mainCardPanel',
        cls: 'sencha-dash-right-main-container',
        region: 'center',
        itemId: 'contentPanel',
        layout: {
            type: 'card',
            anchor: '100%'
        },                      
        items: [{
        	//xtype: 'conBoard',
        	height: 800,
        	width: 1000,
			html:'Test'
        }]
    }]        
});
