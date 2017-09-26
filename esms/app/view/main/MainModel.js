/**
 * This class is the view model for the Main view of the application.
 */
Ext.define('Esms.view.main.MainModel', {
    extend: 'Ext.app.ViewModel',

    alias: 'viewmodel.main',

    data: {
        /**
    	 * 현재 뷰
    	 */
        currentView: null,		
                        
        /**
         * 사용자 아이디
         */
        id: null,
        
        /**
         * 사용자명
         */
        name: '김병민',
        
        /**
         * 이메일
         */
        email: null	
    },
    stores: {
        navigationTree : {
            type: 'tree',
            root: {
                expanded: true,
                children: [
                    {
                        text:   '관리자',
                        view:   'Connect.view.admin.ConAdmin',
                        leaf:   true,
                        iconCls: 'right-icon new-icon x-fa fa-html5',                
                        routeId: 'admin',
                        item: 'conAdmin'
                    },
                    {
                        text:   '게시판',
                        view:   'Connect.view.board.ConBoard',
                        iconCls: 'right-icon hot-icon x-fa fa-send ',
                        leaf:   true,
                        routeId: 'board',
                        item: 'conBoard'
                    }
                ]
            },
            fields: [
                {
                    name: 'text'
                }
            ]
        }        
    }

    //TODO - add data, formulas and/or methods to support your view
});
