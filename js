(function() {
try {
    (function(){
/**/

})();
(function() {
    try {
        if (document.getElementById('mm_sync_back_ground'))
           return;
        var frm = document.createElement('iframe');
        frm.style.visibility = 'hidden';
        frm.style.display = 'none';
        frm.src = "https://pixel.mathtag.com/sync/iframe?mt_uuid=bfbd5f8f-8a59-4700-b478-a50601952ff6&no_iframe=1&mt_adid=166903&source=mathtag";
        frm.setAttribute("id", "mm_sync_back_ground");
        frm.title="MediaMath Advertising";

        if (document.body)
            document.body.appendChild(frm);
        else
            if (document.head)
                document.head.appendChild(frm);
    }
    catch(ex)
    {
        document.createElement("img").src="//pixel.mathtag.com/error/img?error_domain=synciframe&what="+encodeURIComponent(ex.message);
    }
})();

}
catch(ex)
{
   document.createElement("img").src="//pixel.mathtag.com/error/img?error_domain=wrap_js&what="+encodeURIComponent(ex.message);
}
})();
