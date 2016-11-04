#What is Karma?

1. *Karma* is a JavaScript test runner created by *Angular JS* team.
2. *Karma* provides helpful tools thaat make it easier to us to call our Jasmine tests whilst we are writing code.
3. *Karma* is a JavaScript command line tool that can be used to spawn a web browser which loads your applicaiton's scource code and executes your tests
4. *Karma* can be configured to run aganist various Browsers
5. *Karma* is executed on the command line and will display the results of your tesrs on the command line once the have run in the browser.
6. *Karma* is a NodeJS applicaiton, and should be installed through npm

# Karma Configuration
###### Navigate to your working directory in your terminal or command prompt and follow the below instructions.

1. Install AngularJS
    ```
    npm install angular --save
    ```
2. Install Karma
    ```
    npm install -g karma --save-dev
    ```
3. Install Jasmine
    ```
    npm install karma-jasmine jasmine-core --save-dev
    ```
4. Install ngMock
    ngMock allows you to inject and mock angular services to help you test your application.
    ```
    npm install angular-mocks --save-dev
    ```
5. Browsers
    Install browser launcher on which you want karma to run your tests. We need to install atleast one browser. I’ll use PhantomJs or chrome.
    ```
    npm install karma-phantomjs-launcher --save-dev
        or
    npm install karma-chrome-launcher --save-dev
    ```
6. Create two folders in your working directory.
    ```
    mkdir app //your script files, controllers,filters etc.
    mkdir tests //here we will keep our tests.
    ```
7. karma.conf.js
    ```
    karma init
    ```
8. Select Jasmine as your testing framework.
9. Select browser, I’ve selected PhantomJS.
10. Specify the paths to your js and spec files. 
    ```
    Eg. 'app/*.js', 'test/*.js.
    ```
11. After answering a few more questions you should be done.
    Open up your karma.conf.js and add the location of angular.js in to the files array.
    ```
    node_modules/angular/angular.js
    ```
    Add the location for ngMock just below that.
    ```
    node_modules/angular-mocks/angular-mocks.js
    ```

