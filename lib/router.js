
Router.configure({ layoutTemplate: 'layout' });

Router.route('/' , {name: 'posts'});

Router.route('/login', {name:'login'});

Router.route('/register', {name:'register'});

//Router.route('/new',	{name: 'newForm'});

//Router.route('/:name', {name: "bCard"});