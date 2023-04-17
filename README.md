 ## Fetch data with React Routing

 By adding loader() property you tell React to run this function before reaching this route.
 Every data you return with loader() React make it avaliable on the render page.

 ### How to use data from loader()

    1. Return data you want the Component to use
    2. Import {useLoaderData} 
    3. const events =useLoaderData();

