let outputsscreen=document.getElementById("outputScreen");
function Display(num)
{
    outputsscreen.value+=num;
}
function Clear()
{
    outputsscreen.value=" ";
}
function del()
{
    outputsscreen.value=outputsscreen.value.slice(0,-1);
}
function submit()
{ 
    try
    {
        outputsscreen.value=eval(outputsscreen.value);
    }
    catch(error)
    {
        outputsscreen.value="ERROR!";
    }
}
