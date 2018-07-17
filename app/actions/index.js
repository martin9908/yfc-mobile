export const DATA_AVAILABLE = 'DATA_AVAILABLE';

//Import the sample data
import axios from 'axios';

export function getData(){
    return (dispatch) => {

        //Make API Call
        //For this example, I will be using the sample data in the json file
        //delay the retrieval [Sample reasons only]
        setTimeout(() => {
          //API Get With filer
          //http://localhost:3000/api/info_users?filter[where][User_Number]=1001&filter[where][password]=admin123
          axios.get('http://localhost:3000/api/info_users')
          .then(response=>{
            const data  = response.data;
            console.log(response.data);
            dispatch({type: DATA_AVAILABLE, data:data});
          })
          .catch(error=>{
            console.log(error);
          })
        }, 2000);

    };
}
