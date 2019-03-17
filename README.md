# Vue
Learning Vue.js for front-end web development

Vue Reference: 

/* 
 * app.js 
 * 
 * created by: Bradley Latreille 
 *
 * Learning Vue.js 
*/

/* app = new Vue
 *
 * @element: #app - set the vue element to the div element id for app. 
 * @data: message - message variable containing string. 
*/
var app = new Vue({
  el: '#app',
  data: {
    message: 'Hello Vue!'
  }
});

/* app2 = new Vue
 *
 * @element: #app-2 - set the vue element to the div element id for app-2. 
 * @data: message - message variable containing string. 
*/
var app2 = new Vue({
	el: '#app-2', 
	data: {
		message: 'You loaded this page on ' + new Date().toLocaleString()
	}
});

/*
 * app4
 *
 * @element: #app-4 - set the vue element to the div element id for app-4.
 * @data:
 *     @todos: a list of todo text.
 */
var app4 = new Vue({
    el: '#app-4',
    data: {
        todos: [
            { text: 'Learn JavaScript' },
            { text: 'Learn Vue' },
            { text: 'Build something awesome' },
        ]
    }
});

var app5 = new Vue({
   el: '#app-5',
   data: {
       seen: true
   }
});

var app6 = new Vue({
   el: '#app-6',
   data: {
       message : 'Hello Vue.js!',
       button_name : 'Reverse String'
   },
   methods: {
       reverseMessage: function() {
           this.message = this.message.split('').reverse().join('')
       }
   }
});

var message = { message : 'Vu is Awesome!' }

var app7 = new Vue({
    el: '#app-7',
    data: message
});

// Vue Componenets
Vue.component('todo-item', {
    props: ['todo'],
    template: '<li>{{ todo.text }}</li>'
})
