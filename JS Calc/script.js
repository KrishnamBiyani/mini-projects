let inps=document.querySelectorAll(".circles");
let text=document.querySelector("input");
let str="";

inps.forEach((inp)=>{
    inp.addEventListener("click",(e)=>{
        if(e.target.innerText=="AC")
        {
            text.value="0";
            str="";
            return;
        }
        if(e.target.innerText!=="=")
        {
            if(e.target.innerText=="DEL")
            {
                let size=str.length;
                if(size==1 || size==0)
                {
                    text.value="0";
                    str="";
                    return;
                }
                else
                {
                    str=str.slice(0,size-1);
                }
            }
            else
            {
                str=str+e.target.innerText;
            }
        }
        else
        {
            let out=eval(str);
            text.value=out;
            str=out.toString();

            return;
        }
        text.value=str;
    })
})