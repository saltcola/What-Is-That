
Router.configure({ layoutTemplate: 'layout' });

//Router.route('/' , {name: 'posts'});

Router.route('/login', {name:'login'});

Router.route('/register', {name:'register'});

Router.route('/posts', {name:'posts'});
Router.route('/userPosts', {name:'userPosts'});

Router.route('/makeAPost', {name:'makeAPost'});

//Router.route('/new',	{name: 'newForm'});

//Router.route('/:name', {name: "bCard"});