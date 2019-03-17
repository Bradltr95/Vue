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

/*
 * app5
 *
 * @element: #app-5 - set the vue element to the div element id for app-5.
 * @data:
 *     @seen: boolean variable used to hide or view the message object
 */
var app5 = new Vue({
   el: '#app-5',
   data: {
       seen: true
   }
});

/*
 * app6
 *
 * @element: #app-6 - set the vue element to the div element id for app-6.
 * @data:
 *     @message: a list of todo text.
 *     @button_name: name of the <button> tag.
 */
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

/*
 * app4
 *
 * @element: #app-4 - set the vue element to the div element id for app-4.
 * @data:
 *     @todos: a list of todo text.
 *
 * @message - message object variable.
 */
var message = { message : 'Vu is Awesome!' }

var app7 = new Vue({
    el: '#app-7',
    data: message
});


/* ------------------------------------------
 *              Vue Components
 *-------------------------------------------*/

/*
 * todo-item
 *
 * @props -
 * @template -
 */
Vue.component('todo-item', {
    props: ['todo'],
    template: '<li>{{ todo.text }}</li>'
}); 




