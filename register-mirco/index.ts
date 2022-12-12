import app from "./src/app";
import { variables } from "./src/config/variables";

app.listen(variables.PORT,()=>{
    console.log('====================================');
    console.log("Server listen in port: %d", variables.PORT);
    console.log('====================================');
})