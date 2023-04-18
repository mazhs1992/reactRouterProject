 ## Fetch data with React Routing

 By adding loader({request,params}) property you tell React to run this function before reaching this route.
 Every data you return with loader({request,params}) React make it avaliable on the render page.

 In loader you can t use Hooks but you can use localStorage

 ### How to use data from loader({request,params})

    1. Return data you want the Component to use
    2. Import {useLoaderData} 
    3. const events =useLoaderData();

### Handle Delay with loader()

    1. Import on Root useNavigation
    2. Take advantage of navigation.state

### Responce

Use json() from 'react-router-dom' instead of webs Responce.
