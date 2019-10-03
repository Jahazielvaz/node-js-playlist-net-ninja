

## MVC Architecture:
  * We're going to be using MVC architecture, and therefore, here's a brief description of what it is and how it works.

  * What It Is: MVC stands for model view controller. It's a simple architecture, that allows you to break down your code into a logical setup. The Model is where you store anything data related. The View is the interface that the user interacts with. You can think of the Controller, as the kind of server within your app. It is the one responsible for retrieving data back and forth between the view and the model. 












## Discoveries
* Passing Modules as parameters: This is really cool. Basically, if you have a module that you've exported out onto another module such as app. You can fire the module you've imported and pass the module or function which belongs to the module where the function is being fired, in as a parameter, and that will export that function unto the module that got exported. See example below
  EXAMPLE
    //myModule.js
      module.exports = (myApp) => {
        [code block]
      }

    //myApp.js
      let myModule = require('./myModule');

      let myApp = () => {
        [code block]
      }

      myModule(myApp);

      NOTE: In the example above, everything inside of the method called myApp, will be available inside of myModule. This is pretty neat.
