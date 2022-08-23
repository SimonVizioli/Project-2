window.onload=function (){
    contenidos=general.getElementsByTagName("section");
    var Con=[];
    var c=0;
    for (var b=0;b<contenidos.length;b++){
        
        if (contenidos[b].parentNode.id=="general"){
            contenidos[b].style.left=(100*c)+"%";   
            contenidos[b].pos=(c*100);
            c++;
            Con.push(contenidos[b]);
        }
        
        
    }
    
    window.onresize=function () {
    
    foot=document.body.getElementsByTagName("footer")[0];
    foot.style.top=(document.body.clientHeight-45)+"px";
    
}
    contenidos=Con;
    item=menu.getElementsByTagName("li");
    c=0;
    for (var b=item.length-1;b>=0;b--){
        
        item[b].numero=c;
        item[b].onclick=Cambiar;    
        c++;
        
    }
}
function Cambiar(e){
    console.log(this.numero);
    for (var b=0;b<item.length;b++){
        if (item[b]==this){
        item[b].style.boxShadow="0px 5px 0px #f2f2f2";
        }
        else {
            item[b].style.cssText="";   
        }
    }
    var cto=contenidos[this.numero].pos;
    for (var c=0;c<contenidos.length;c++){
        contenidos[c].pos+=-cto;  
        contenidos[c].style.left=contenidos[c].pos+"%";
    }
}
 