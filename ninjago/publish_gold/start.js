var iv_location_type = '0';
var isDisableIFrameLoader = true;
window.onload = function()
{
    var mainScript = document.createElement('script');
    mainScript.src = 'js/main.js'
    document.body.appendChild(mainScript);
    window.omsPhase = "gold";
    mainScript.onload = function()
    {
        if (window.isDisableIFrameLoader)
        {
            if (window.main)
            {
                main();
            }
        }
    }
};