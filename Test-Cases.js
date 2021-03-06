﻿set PATH=%PATH%;C:\Users\u58190.USTR\AppData\Roaming\npm;

TFS::
https://vstsustglobal.visualstudio.com

HOLIDAY LIST:::
https://ustglobal.sharepoint.com/teams/HR-Home/Lists/HolidayList/2018.aspx

Need FOR ng build --prod:
npm i enhanced-resolve@3.3.0

npm install --save-dev @angular/cli@latest

MongoDB Docs

https://www.tutorialspoint.com/mongodb/mongodb_create_collection.htm

:::::::::::::::::::::::::::::::::::::::::::::::::::::::

Overriding means, giving a different definition of an existing function with same parameters, and overloading means adding a different definition of an existing function with different parameters.

:::::::::::::::::::::::::::::::::::::::::::::::::::::::


Pagination:

http://jasonwatmore.com/post/2016/08/23/angular-2-pagination-example-with-logic-like-google

https://github.com/cornflourblue/angular2-pagination-example

Observables Array Operations:::::
Transform data using map in angular2:::::::: 

https://angular-2-training-book.rangle.io/handout/observables/observables_array_operations.html

http://stackabuse.com/avoiding-callback-hell-in-node-js/

https://stackoverflow.com/questions/42342781/why-should-we-use-subscribe-over-map-in-angular2

https://angular.io/guide/component-interaction


https://github.com/angular/angular-cli/wiki/build


https://angular.io/guide/lifecycle-hooks

ngOnDestroy: Cleanup just before Angular destroys the directive/component. Unsubscribe Observables and detach event handlers to avoid memory leaks.
Called just before Angular destroys the directive/component.


Difference between Constructor and ngOnInit

https://stackoverflow.com/questions/35763730/difference-between-constructor-and-ngoninit



Difference between Constructor and ngOnInit:::::::::::::::::::::

The Constructor is a default method of the class that is executed when the class is instantiated and ensures proper initialization of fields in the class and its subclasses.
//called first time before the ngOnInit()

ngOnInit is a life cycle hook called by Angular2 to indicate that Angular is done creating the component.
We have to import OnInit in order to use like this (actually implementing OnInit is not mandatory but considered good practice):
//called after the constructor and called  after the first ngOnChanges() 


https://stackoverflow.com/questions/35763730/difference-between-constructor-and-ngoninit   ***************

https://stackoverflow.com/questions/35845554/angular-2-component-constructor-vs-oninit/35846307#35846307

Constructor is predefined default method of the typescript class. There is no relation between Angular and constructor. Normally we use constructor to define/initialize some variables, but when we have tasks related to Angular's bindings we move to Angular's ngOnInit life cycle hook. ngOnInit is called just after the constructor call. We can also do the same work in the constructor but its preferable to use ngOnInit to start Angular's binding.

in order to use ngOnInit we have to import this hook from the core library:

import {Component, OnInit} from '@angular/core'


https://www.toptal.com/html5/interview-questions

https://stackoverflow.com/questions/32680244/directive-v-s-component-in-angular

https://angular.io/guide/attribute-directives

https://embed.plnkr.co/?show=preview


https://angular.io/guide/architecture


Change the default port number in systemjs

https://stackoverflow.com/questions/42307747/change-the-default-port-number-in-systemjs


Component Interaction
https://angular.io/guide/component-interaction

Angular 2 Dashboard

https://github.com/creativetimofficial/light-bootstrap-dashboard-angular

https://github.com/akveo/ngx-admin
http://akveo.com/ngx-admin/#/pages/dashboard


https://github.com/gevgeny/angular2-highcharts


Getting error while compiling

https://github.com/akveo/ngx-admin/issues/1381
https://github.com/akveo/ngx-admin/issues/1367#issuecomment-342789113


https://github.com/angular/angular-cli#installation


ngx-admin:::

https://github.com/akveo/ngx-admin



http-server:::

https://www.npmjs.com/package/http-server

npm install http-server -g
http-server [path] [options]




https://github.com/valor-software/ng2-charts

https://valor-software.com/ng2-charts/#lineChart

npm install forever -g 
forever start app.js

forever start -c nodemon app.js  

https://github.com/foreverjs/forever

npm install http-server -g



https://docs.mongodb.com/manual/tutorial/enable-authentication/


Enable Auth

1) Start MongoDB without access control.

  mongod --port 27017 --dbpath /data/db1

2) Connect to the instance.

  mongo --port 27017

3) Create the user administrator.

  Here “admin” is the database name.

  use admin
  db.createUser(
   {
     user: "myUserAdmin",
     pwd: "abc123",
     roles: [ { role: "userAdminAnyDatabase", db: "admin" } ]
   }
  )

  Disconnect the mongo shell.

4) Re-start the MongoDB instance with access control.

  mongod --auth --port 27017 --dbpath /data/db1

5) Connect and authenticate as the user administrator.

  mongo --port 27017 -u "myUserAdmin" -p "abc123" --authenticationDatabase "admin"

  To authenticate after connecting

  mongo --port 27017

  use admin
  db.auth("myUserAdmin", "abc123" )



https://docs.mongodb.com/manual/tutorial/enable-authentication/


http://www.randomsnippets.com/2008/03/26/how-to-dynamically-remove-delete-elements-via-javascript/


https://stackoverflow.com/questions/19655189/javascript-click-event-listener-on-class

https://www.testdome.com/tests/javascript-online-test/14

https://www.tutorialspoint.com/javascript/javascript_mock_test.htm?min=51&max=75



https://www.tutorialspoint.com/javascript/javascript_online_test.htm


https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/some


https://docs.mongodb.com/manual/reference/operator/aggregation/match/


==============================================================================================

JavaScript SUM and GROUP BY of JSON data ::::::::::::::::::::::::::::::::::::::::::::


https://stackoverflow.com/questions/31688459/group-array-items-using-object

https://stackoverflow.com/questions/11199653/javascript-sum-and-group-by-of-json-data

==============================================================================================


https://www.codexworld.com/export-html-table-data-to-csv-using-javascript/

http://demos.codexworld.com/export-html-table-data-to-csv-using-javascript/

=================================================================================================


https://jsfiddle.net/gengns/j1jm2tjx/
https://stackoverflow.com/questions/44567559/angular2-export-table-to-html-excel-and-give-filename


https://stackoverflow.com/questions/44152002/export-html-to-pdf-in-angular2-using-angular1-example-of-plunker
https://plnkr.co/edit/9BIaTI6Y5nB8CnqZYMir?p=preview


Pipes in Angular2 are the equivalent of filters in Angular.JS (1). Let's create a simple Pipe to truncate strings.

http://youknowriad.github.io/angular2-cookbooks/pipe.html

https://www.npmjs.com/package/ngx-trim

http://voidcanvas.com/angular-2-pipes-filters/


https://stackoverflow.com/questions/36891243/error-object-blobconstructor-is-not-a-constructor-in-safari


https://stackoverflow.com/questions/17959663/why-is-node-js-single-threaded
https://stackoverflow.com/questions/40028377/is-it-possible-to-achieve-multithreading-in-nodejs


Questions and Answers::::::::::::::::
https://blog.risingstack.com/node-js-interview-questions-and-answers-2017/

CHILED PROCESS::::::::::::::::::::::::
https://medium.freecodecamp.org/node-js-child-processes-everything-you-need-to-know-e69498fe970a


Differences Between JavaScript And TypeScript::::::::::::::::::
http://www.c-sharpcorner.com/blogs/differences-between-javascript-and-typescript
https://stackoverflow.com/questions/12694530/what-is-typescript-and-why-would-i-use-it-in-place-of-javascript



https://docs.npmjs.com/getting-started/creating-node-modules
https://www.gitbook.com/book/kevinchisholm/njsc-creating-your-first-node-js-module/details


Top 10 Things to Know about TypeScript:::::::::::::::::::::
https://www.developer.com/lang/top-10-things-to-know-about-typescript.html

https://webapplog.com/es6/

Stream::::::::::::::::::::::::::::

https://medium.freecodecamp.org/node-js-streams-everything-you-need-to-know-c9141306be93

Event Loop::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::

https://www.journaldev.com/7462/node-js-architecture-single-threaded-event-loop

::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::

html modal form in Angular 2 :::::::::::::::

https://embed.plnkr.co/AuFMJVHpk9OaLr62puS1/

https://www.w3schools.com/howto/howto_css_login_form.asp

https://www.w3schools.com/howto/tryit.asp?filename=tryhow_css_login_form_modal


Creating Read-Only & Virtual Attributes with JavaScript Getters and Setters:::::::::::::::::::

http://nicholasjohnson.com/blog/javascript-getters-and-setters/

Angular 2 Docs:::::::::::::::::::::::::::::::::::::

http://blog.ninja-squad.com/2017/03/24/what-is-new-angular-4/
https://angular-2-training-book.rangle.io/handout/routing/query_params.html
https://angular.io/guide/attribute-directives
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures
https://angular.io/guide/forms
http://nicholasjohnson.com/blog/javascript-getters-and-setters/

Angular 2 Docs:::::::::::::::::::::::::::::::::::::


Angular 2 with real time data (Socket.io):::::::::::::::::::::::::::::::::::::

https://medium.com/@REPTILEHAUS/angular-2-and-socket-io-chat-app-f56afb9ceeb2
https://medium.com/@REPTILEHAUS/angular-2-and-socket-io-chat-app-f56afb9ceeb2

npm install minimatch@3.0.2

https://hackernoon.com/build-real-time-app-with-mean2-angular-cli-and-socket-io-cedf1dc02fec

https://github.com/dassiorleando/gistology


http://www.syntaxsuccess.com/viewarticle/socket.io-with-rxjs-in-angular-2.0

https://github.com/thelgevold/rxjs-socket.io

Angular 2 with real time data (Socket.io):::::::::::::::::::::::::::::::::::::

Angular 2 Testing::::::::::::::::::::::::::::::::::

https://angular-2-training-book.rangle.io/handout/testing/components/
https://angular-2-training-book.rangle.io/handout/testing/components/verify.html
http://plnkr.co/edit/XUM8Gfz08nfbQf1BhDN1?p=preview

https://codecraft.tv/courses/angular/unit-testing/jasmine-and-karma/
http://plnkr.co/edit/8ApdkvletoEc4Q0maXSN?p=preview

https://jasmine.github.io/edge/introduction.html#section-Included_Matchers

https://dzone.com/articles/getting-started-and-testing-with-angular-cli-and-angular-2-rc5-part-1

https://dzone.com/articles/getting-started-and-testing-with-angular-cli-and-angular-2-rc5-part-2

https://code.tutsplus.com/categories/angular
https://code.tutsplus.com/tutorials/getting-started-with-end-to-end-testing-in-angular-using-protractor--cms-29318
https://code.tutsplus.com/tutorials/testing-components-in-angular-using-jasmine-part-2-services--cms-28933

https://medium.com/google-developer-experts/angular-2-testing-guide-a485b6cb1ef0
https://angular.io/guide/testing
https://github.com/angular/angular/tree/e748adda2e7a1f6e302628d0d76b5c3d1e3fc196/modules/angular2/test

https://github.com/PeterKassenaar/ng-testing

http://plnkr.co/edit/8ApdkvletoEc4Q0maXSN?p=preview

https://codecraft.tv/courses/angular/unit-testing/jasmine-and-karma/

Angular 2 Testing::::::::::::::::::::::::::::::::::

React Tutorial::::::::::::::::::::::::::::::::::::::

https://www.tutorialspoint.com/reactjs/reactjs_overview.htm

React Tutorial::::::::::::::::::::::::::::::::::::::

https://angular.io/guide/testing

https://angular.io/guide/forms

https://www.w3schools.com/bootstrap/bootstrap_templates.asp

Angular 2 Active Class ::::::::::::::::::::::::::::::::::::::::

https://stackoverflow.com/questions/34323480/in-angular-how-do-you-determine-the-active-route

Angular 2 Active Class ::::::::::::::::::::::::::::::::::::::::



Arrow Functions

https://basarat.gitbooks.io/typescript/docs/arrow-functions.html ::::::::::::::::::::::::::::::


NODE JS Architechture:::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::

http://blog.thedigitalgroup.com/ujwalap/2015/05/15/introduction-to-how-node-js-works/

Node Unit Testing

https://hackernoon.com/how-to-run-mocha-chai-unit-tests-on-node-js-apps-832eb2eba590

https://buddy.works/guides/how-automate-nodejs-unit-tests-with-mocha-chai

mkdir myapp && cd myapp
npm init
name: hello-world
entry point: app.js
test command: ./node_modules/.bin/mocha We shall use this framework to test the application
npm install express --save
npm install mocha chai --save-dev
mkdir test
npm install touch-cli -g
touch test/test-pages.js
npm install request --save-dev


Angular: Hide Navbar Menu from Login page::::::::::::::::::::::::::::

https://loiane.com/2017/08/angular-hide-navbar-login-page/

https://stackoverflow.com/questions/39340193/proper-way-to-get-queryparams-with-angular2-rc6

https://stackoverflow.com/questions/5172244/idiomatic-way-to-wait-for-multiple-callbacks-in-node-js

https://stackoverflow.com/questions/6156501/read-a-file-one-line-at-a-time-in-node-js


REACT JS ::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::

https://www.tutorialspoint.com/reactjs/reactjs_props_overview.htm


OFFLine Data Store:::::::::::::: How to work angular2-indexeddb? ::::::::::::::::::::::::::::::::::::::::::::::::


https://github.com/gilf/angular2-indexeddb

https://stackoverflow.com/questions/39469743/how-to-work-angular2-indexeddb

https://coryrylan.com/blog/fast-offline-angular-apps-with-service-workers

npm run sw

npm run static-serve


https://github.com/adriancarriger/angularfire2-offline

http://blogs.shephertz.com/2014/01/14/html5-learn-how-to-use-indexeddb/#


https://github.com/SuyashMShepHertz/indexedDB_sample

https://github.com/SuyashMShepHertz/indexedDB_sample/blob/master/index.html

https://github.com/gilf/angular2-indexeddb/issues/25


https://developer.mozilla.org/en-US/docs/Web/API/IDBObjectStore/getAll

https://github.com/gilf/angular2-indexeddb/issues/25

createStore does not exist on type AngularIndexedDB


Uncaught (in promise): TypeError: Cannot set property 'Results' of undefined

https://stackoverflow.com/questions/38807643/error-uncaught-in-promise-typeerror-cannot-set-property-isadmin-of-null

POUCHDB:::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::

https://github.com/couchbaselabs/pouchdb-angular2

https://github.com/pouchdb/pouchdb/issues/6672


OffLine DB:::::::::::::::::::::::::::::::::::::::::::::::::::

https://stackoverflow.com/questions/45035184/chaining-http-calls-in-angular-2-in-a-for-loop

catch forEach last iteration :::::::::::::::::::::::::::::::::::::::::::::

https://stackoverflow.com/questions/29738535/catch-foreach-last-iteration



Angular 2/4/5 Animations :::::::::::

https://plnkr.co/Ldn4wJwuZMaaunVWuYpx

https://embed.plnkr.co/ALfIp5nfno2uxBgXEBST/

http://jasonwatmore.com/post/2017/04/19/angular-2-4-router-animation-tutorial-example

https://angularfirebase.com/tag/animation/

https://github.com/AngularFirebase/78-hammerjs-angular-animations

https://www.concretepage.com/angular-2/angular-2-4-animations-example

https://medium.com/@ct7/the-simple-way-to-make-a-mobile-angular-2-bootstrap-navbar-without-jquery-d6b3f67b037b

https://blog.thecodecampus.de/angular-2-animate-creating-sliding-side-navigation/

https://material.angular.io/components/slider/overview

https://blog.learningtree.com/create-side-menu-angular-2-material-design/


Custom image zoom with Angular 2:::::::::::::::::::::::::::::::::::::::::::::::

https://medium.com/@miguelhaba/custom-image-zoom-with-angular-2-3c2f1a6a17ac

CSS EFFECTS ::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::

15 Inspiring Examples of CSS Animation on CodePen:::::::::::::::::::::::::::::::::::::::::::::::::::::::

https://webdesign.tutsplus.com/articles/15-inspiring-examples-of-css-animation-on-codepen--cms-23937

::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::

http://jsfiddle.net/jxgjhzer/1/
http://css3.bradshawenterprises.com/cfimg/#cfimg4
http://talkerscode.com/webtricks/rotate-and-flip-images-using-css3.php
https://codepen.io/darkwing/pen/bCali
https://css-tricks.com/zooming-background-images/
https://codepen.io/wifeo/pen/qzwkb

https://1stwebdesigner.com/css-effects/ ******************
https://tympanus.net/Tutorials/SwatchBook/index5.html **********************

https://garden-eight.com/
http://www.creativebloq.com/inspiration/css-animation-examples
https://media.24ways.org/2009/15/space.html
http://www.romancortes.com/blog/pure-css-coke-can/
https://paulrhayes.com/experiments/cube/multiCubes.html

https://webkit.org/blog-files/leaves/index.html
https://1stwebdesigner.com/css-effects/

http://www.the-art-of-web.com/css/css-animation/
https://media.24ways.org/2009/15/space.html


CSS GRID::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::

https://www.w3schools.com/css/tryit.asp?filename=trycss_grid_layout_named




https://css-tricks.com/using-multi-step-animations-transitions/
https://www.webdesignerdepot.com/2014/05/8-simple-css3-transitions-that-will-wow-your-users/ ************
https://dcrazed.com/css3-animation-examples/


https://hackernoon.com/how-css-grid-beats-bootstrap-85d5881cf163

https://www.w3schools.com/css/css_grid.asp

https://www.w3schools.com/bootstrap/bootstrap_grid_system.asp

https://www.w3schools.com/css/tryit.asp?filename=trycss_grid_layout_named



https://stackoverflow.com/questions/15561669/placing-multiple-divs-side-by-side-within-a-parent-div

http://jsfiddle.net/j08691/p6RZQ/



Getting to know asynchronous JavaScript: Callbacks, Promises and Async/Await::::::::::::::::::::::::::::::::::::::::::::

https://medium.com/codebuddies/getting-to-know-asynchronous-javascript-callbacks-promises-and-async-await-17e0673281ee


https://angular.io/guide/forms

https://www.codeproject.com/Tips/1166952/Angular-Forms-Template-driven-and-Model-driven-a
https://scotch.io/tutorials/using-angular-2s-model-driven-forms-with-formgroup-and-formcontrol


Object.keys(obj).length


https://docs.mongodb.com/manual/tutorial/getting-started/
https://docs.mongodb.com/getting-started/shell/remove/

https://github.com/rahil471/search-sort-pagination-angular2
https://ciphertrick.com/2017/08/01/search-sort-pagination-in-angular/
http://plnkr.co/edit/JVQMPvV8z2brCIzdG3N4?p=preview
https://github.com/ashwin-sureshkumar/angular-infinite-scroller
https://ashwin-sureshkumar.github.io/angular-infinite-scroller/
https://codeburst.io/angular-2-simple-infinite-scroller-directive-with-rxjs-observables-a989b12d4fb1



https://www.tutorialspoint.com/mongodb/mongodb_sort_record.htm

https://ng2.codecraft.tv/components/viewchildren-and-contentchildren/

https://expressjs.com/en/starter/generator.html


javascript observer pattern

http://www.dofactory.com/javascript/observer-design-pattern


Getting started with ECMAScript 6

http://2ality.com/2015/08/getting-started-es6.html

https://www.developer.com/lang/top-10-things-to-know-about-typescript.html

Build tree array from flat array in javascript
https://stackoverflow.com/questions/18017869/build-tree-array-from-flat-array-in-javascript










