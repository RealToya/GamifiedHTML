let time;

class Time //Constructor of Time Class
{
    constructor()
    {
        this.updatetime = this.updatetime.bind(this) //Binding the function to the class
        this.updatetime
        setInterval(this.updatetime, 1000);
    }

    updatetime(){
        let now = new Date();
    
        let now_h = now.getHours();
        let now_m = now.getMinutes();
        let now_s = now.getSeconds();
    
        if (now_m < 10){
            now_m = "0" + now_m;
        }
        if (now_s < 10){
            now_s = "0" + now_s;
        }
    
        time = now_h + ":" + now_m + ":" + now_s + " ";
    
        document.getElementById('clock').innerHTML = time;
    }

    gettime()
    {
        return this.time;
    }
}

new Time();




