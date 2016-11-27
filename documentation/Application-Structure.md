# Application Structure

The applications modules are organized in the following manner:

* App: The app module is the browser module responsible for bootstrapping
the application and binding all the modules together. Only platform
architects are allowed to modify the app module.
* Common: the common module is responsible for storing global services, 
components, interfaces, classes, pipes, etc. The common module is unique 
in that it is the only module that **exports** components. If you build
a common component and wish to use it on the application, you must add it
to the **exports** array in the `common.module.ts` file. Also every
component you build anywhere has to be added to the **declarations**
array in the corresponding module.
