● What is Emmet?

Emmet is a plugin for many popular text editors which greatly improves HTML & CSS workflow. It allows

● Difference between a Library and Framework?

i) A library is a collection of reusable code that provides a specific functionality.
ii) It is a collection of Pre-written codes snippets that can be used and reused to perform certain tasks
iii) In Library control remains with Dev.
iv) It can be used for Smaller part of an App.
for ex----- React, Jquery

i) Framework provides a basic foundation or structure for a website or an application to perform.
ii) The Control is reversed, Framework tells Dev where code needs to be provided.
iii) It is used in a whole app.
for ex----- Angular, Vuejs

● What is CDN? Why do we use it?

i) A Content Delivery Network (CDN) is a distributed network of servers that work together to deliver web content (such as HTML pages, JavaScript files, stylesheets, images, and videos) to users based on their geographic location. 
ii) The primary purpose of a CDN is to improve the speed, reliability, and security of content delivery.
iii) Improved Performance- CDNs reduce the latency and improve the loading speed of websites and applications by serving content from nearby locations.
iv) Reduced Server Load- CDNs reduce the load on origin servers by distributing traffic across multiple servers
v) Scalability- CDNs can handle high traffic and large volumes of data, making them ideal for popular websites and applications.
vi) Enhanced Security- CDNs often provide built-in security features, such as SSL/TLS encryption, DDoS protection, and web application firewalls.

● Why is React known as React?

React, a popular JavaScript library for building user interfaces, got its name from the concept of "reaction" to changes in the application's state.

● What is crossorigin in script tag?

i) crossorigin attribute in a <script> tag is used to specify how the browser should handle cross-origin requests for that script. 
ii) It is an optional attribute that can be added to the <script> tag to enable Cross-Origin Resource Sharing (CORS) for that script.

How does crossorigin work in script tag?
 When a script is loaded with the crossorigin attribute, the browser sends a cross-origin request to the server hosting the script. The server can then respond with the appropriate CORS headers, indicating whether the script can be accessed from other domains.


● What is diference between React and ReactDOM

Use React to:
i) Create and manage components
ii) Handle state changes and updates
iii) Manage the component lifecycle

Use ReactDOM to:
i) Render React components to the DOM
ii) Update the DOM when the virtual DOM changes
iii) Interact with the DOM (e.g., handling events, focusing elements)

● What is difference between react.development.js and react.production.js files via CDN?

Use react.development.js during:

i) Development and testing
ii) Debugging and troubleshooting
iii) Local development environments

Use react.production.js in:

i) Production environments
ii) Deployed applications
iii) CDNs or caching layers

● What is async and defer? - see my Youtube video ;)

 async and defer are two attributes that can be used with the <script> tag to control how scripts are loaded and executed by the browser.

The problem: Blocking scripts By default, when a browser encounters a <script> tag, it will block the parsing of the HTML document until the script has been downloaded, parsed, and executed. This can lead to a slower page load and a poor user experience.

async (Asynchronous) The async attribute tells the browser to load the script asynchronously, which means that the script will be downloaded in the background while the browser continues to parse the HTML document. Once the script is downloaded, it will be executed as soon as possible.

Here's how it works:

The browser encounters a <script async> tag.
The browser continues to parse the HTML document while downloading the script in the background.
Once the script is downloaded, it is executed as soon as possible.
defer The defer attribute tells the browser to load the script after the HTML document has finished parsing. This means that the script will be downloaded in the background, but it will not be executed until the HTML document has been fully parsed.

Here's how it works:

The browser encounters a <script defer> tag.
The browser continues to parse the HTML document while downloading the script in the background.
Once the HTML document has finished parsing, the script is executed.