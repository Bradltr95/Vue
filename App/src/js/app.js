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
})

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
})
